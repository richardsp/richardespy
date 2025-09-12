// Travel.js

import React, { useState, useRef, useEffect } from "react";
import Modal from "react-modal";
import { useLocation } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { placesVisited } from "./travel/_placesData";
import { travelDescriptions } from "./travel/TravelDescriptions";
import "../App.css";

// Define custom icons for markers
const greenIcon = L.icon({
  iconUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const blueIcon = L.icon({
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// Function to duplicate markers across the date line for seamless world wrapping
const createWrappedMarkers = (places) => {
  const wrappedPlaces = [];

  places.forEach((place) => {
    const { lat, lng } = place.coordinates;

    // Add original marker
    wrappedPlaces.push({
      ...place,
      icon:
        place.descriptionID || (place.images && place.images.length > 0)
          ? greenIcon
          : blueIcon,
      coordinates: { lat, lng },
    });

    // Always add a duplicate marker on the other side of the date line
    // This ensures seamless wrapping for all locations
    if (lng > 0) {
      // Eastern hemisphere: add western duplicate
      wrappedPlaces.push({
        ...place,
        icon:
          place.descriptionID || (place.images && place.images.length > 0)
            ? greenIcon
            : blueIcon,
        coordinates: { lat, lng: lng - 360 },
      });
    } else {
      // Western hemisphere: add eastern duplicate
      wrappedPlaces.push({
        ...place,
        icon:
          place.descriptionID || (place.images && place.images.length > 0)
            ? greenIcon
            : blueIcon,
        coordinates: { lat, lng: lng + 360 },
      });
    }
  });

  return wrappedPlaces;
};

// Preprocess static data with world wrapping
const processedPlaces = createWrappedMarkers(placesVisited);

Modal.setAppElement("#root");

// Component to trigger flyTo on the map
const FlyToComponent = ({ center }) => {
  const map = useMap();
  React.useEffect(() => {
    if (center) {
      console.log("Flying map to:", center);
      map.flyTo(center, 5, { duration: 1.5 });
    }
  }, [center, map]);

  return null;
};

const Travel = () => {
  const location = useLocation();
  const [modalData, setModalData] = useState({
    isOpen: false,
    city: "",
    description: "",
    images: [],
    position: null,
  });
  const [mapCenter, setMapCenter] = useState([39.5, -98.35]);
  const mapRef = useRef(null);

  // Handle navigation from About page with selected location
  useEffect(() => {
    if (location.state?.selectedLocation) {
      const selectedPlace = placesVisited.find(
        (place) => place.name === location.state.selectedLocation
      );
      if (selectedPlace) {
        setMapCenter([
          selectedPlace.coordinates.lat,
          selectedPlace.coordinates.lng,
        ]);
      }
    }
  }, [location.state]);

  const getMarkerPosition = (lat, lng) => {
    if (!mapRef.current)
      return { top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
    const markerPoint = mapRef.current.latLngToContainerPoint([lat, lng]);
    const containerRect = mapRef.current.getContainer().getBoundingClientRect();

    return {
      top: `${containerRect.top + markerPoint.y - 150}px`,
      left: `${containerRect.left + markerPoint.x}px`,
      transform: "translate(-50%, -50%)",
    };
  };

  const handleMarkerClick = (place) => {
    const { lat, lng } = place.coordinates;
    setMapCenter([lat, lng]);

    const description = travelDescriptions[place.descriptionID] || "";
    const images = place.images || [];
    if (description || images.length > 0) {
      setModalData({
        isOpen: true,
        city: place.name,
        description,
        images,
        position: { lat, lng },
      });
    }
  };

  const closeModal = () => {
    setModalData({
      isOpen: false,
      city: "",
      description: "",
      images: [],
      position: null,
    });
  };

  return (
    <section id="travel" className="section">
      <h2>My Travel Map</h2>
      <div className="map-container">
        <MapContainer
          center={mapCenter}
          zoom={4}
          className="map-container"
          worldCopyJump={true}
          whenCreated={(mapInstance) => {
            mapRef.current = mapInstance;
          }}
        >
          <FlyToComponent center={mapCenter} />
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            subdomains="abcd"
            maxZoom={20}
          />

          {processedPlaces.map((place, index) => (
            <Marker
              key={`${place.name}-${place.coordinates.lng}-${index}`}
              position={[place.coordinates.lat, place.coordinates.lng]}
              icon={place.icon}
              eventHandlers={{
                click: () => handleMarkerClick(place),
              }}
            >
              <Tooltip direction="top" offset={[0, -10]} opacity={1}>
                {place.name}
              </Tooltip>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {modalData.isOpen && modalData.position && (
        <Modal
          isOpen={modalData.isOpen}
          onRequestClose={closeModal}
          style={{
            overlay: {
              zIndex: 100,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
            content: {
              position: "absolute",
              ...getMarkerPosition(
                modalData.position.lat,
                modalData.position.lng
              ),
              width: modalData.images.length > 0 ? "80%" : "40%",
              height: "auto",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              backgroundColor: "#fff",
              overflowY: "auto",
            },
          }}
        >
          <h2>{modalData.city}</h2>
          {modalData.description && <p>{modalData.description}</p>}
          {modalData.images.length > 0 && (
            <div>
              {modalData.images.map((image, idx) => (
                <img
                  key={idx}
                  src={`/assets/travel/${modalData.city
                    .toLowerCase()
                    .replace(/\s/g, "_")}/${image}`}
                  alt={`${idx + 1} of ${modalData.city}`}
                  style={{ maxWidth: "100%", marginBottom: "10px" }}
                />
              ))}
            </div>
          )}
          <button onClick={closeModal}>Close</button>
        </Modal>
      )}
      <p></p>
      <h2>Places I've Visited</h2>
      <table className="travel-table">
        <thead>
          <tr>
            <th>Place</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {placesVisited
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((place, index) => (
              <tr
                key={index}
                onClick={() =>
                  setMapCenter([place.coordinates.lat, place.coordinates.lng])
                }
              >
                <td>{place.name}</td>
                <td>{travelDescriptions[place.descriptionID] || ""}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default Travel;
