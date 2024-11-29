import React, { useState, useRef } from 'react';
import Modal from 'react-modal';
import { MapContainer, TileLayer, Marker, Tooltip, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { placesVisited } from './travel/_placesData';
import { travelDescriptions } from './travel/TravelDescriptions';
import '../App.css';

// Define custom icons for markers
const greenIcon = L.icon({
  iconUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const blueIcon = L.icon({
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Preprocess static data
const processedPlaces = placesVisited.map((place) => ({
  ...place,
  icon: place.descriptionID ? greenIcon : blueIcon,
}));

Modal.setAppElement('#root');

// Component to trigger flyTo on the map
const FlyToComponent = ({ center }) => {
  const map = useMap();
  React.useEffect(() => {
    if (center) {
      console.log('Flying map to:', center);
      map.flyTo(center, 5, { duration: 1.5 }); // Updated zoom level to 5
    }
  }, [center, map]);

  return null;
};

const Travel = () => {
  const [modalData, setModalData] = useState({
    isOpen: false,
    city: '',
    description: '',
    images: [],
    position: null, // Track position of the marker
  });
  const [mapCenter, setMapCenter] = useState([39.50, -98.35]); // Controlled center
  const mapRef = useRef(null); // Reference to the map instance

  // Helper to calculate modal position
  const getMarkerPosition = (lat, lng) => {
    console.log('getMarkerPosition called with:', lat, lng);
  
    if (!mapRef.current) {
      console.warn('Map reference is not available in getMarkerPosition!');
      return { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };
    }
  
    const markerPoint = mapRef.current.latLngToContainerPoint([lat, lng]); // Position relative to container
    const containerRect = mapRef.current.getContainer().getBoundingClientRect(); // Map container bounds
  
    const modalWidth = modalData.images.length > 0 ? 0.8 * containerRect.width : 0.4 * containerRect.width; // Modal width
    const modalHeight = 300; // Estimated modal height
    const hardcodedYOffset = -300; // Hardcoded offset to shift modal upward
  
    console.log('Modal Position:', {
      top: containerRect.top + markerPoint.y - modalHeight / 2 + hardcodedYOffset,
      left: containerRect.left + markerPoint.x - modalWidth / 2,
    });
  
    return {
      top: `${containerRect.top + markerPoint.y - modalHeight / 2 + hardcodedYOffset}px`, // Adjust with hardcoded Y offset
      left: `${containerRect.left + markerPoint.x - modalWidth / 2}px`, // Horizontal alignment
      transform: 'translate(-50%, -50%)', // Center modal relative to the calculated position
    };
  };
  

  const handleMarkerClick = (place) => {
    const { lat, lng } = place.coordinates;

    console.log('Marker clicked:', { lat, lng });

    setMapCenter([lat, lng]); // Center the map first

    const description = travelDescriptions[place.descriptionID] || '';
    const images = place.images || [];
    if (description || images.length > 0) {
      setModalData({
        isOpen: true,
        city: place.name,
        description,
        images,
        position: { lat, lng }, // Add marker position
      });
    }
  };

  const handleTableRowClick = (place) => {
    const { lat, lng } = place.coordinates;

    console.log('Table row clicked:', { lat, lng });

    setMapCenter([lat, lng]); // Update map center
  };

  const closeModal = () => {
    console.log('Closing modal...');
    setModalData({
      isOpen: false,
      city: '',
      description: '',
      images: [],
      position: null, // Clear position on close
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
          whenCreated={(mapInstance) => {
            console.log('Map instance created:', mapInstance);
            mapRef.current = mapInstance; // Initialize map reference
          }}
        >
          <FlyToComponent center={mapCenter} />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          />

          {processedPlaces.map((place, index) => (
            <Marker
              key={index}
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
        console.log('Rendering modal with position:', modalData.position),
        <Modal
          isOpen={modalData.isOpen}
          onRequestClose={closeModal}
          style={{
            overlay: {
              zIndex: 100,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
            content: {
              position: 'relative',
              ...getMarkerPosition(modalData.position.lat, modalData.position.lng), // Dynamic position
              width: modalData.images.length > 0 ? '80%' : '80%',
              height: 'auto',
              padding: '15px',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              backgroundColor: '#fff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              overflowY: 'auto',
            },
          }}
        >
          <h2 className="modal-title">{modalData.city}</h2>
          {modalData.description && <p>{modalData.description}</p>}
          {modalData.images.length > 0 && (
            <div className="modal-image-container">
              {modalData.images.map((image, index) => (
                <img
                  key={index}
                  src={`/assets/travel/${modalData.city.toLowerCase().replace(/\s/g, '_')}/${image}`}
                  alt={modalData.city}
                  className="modal-image"
                  style={{
                    maxWidth: '100%',
                    marginBottom: '10px',
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              ))}
            </div>
          )}
          <button
            className="modal-close-button"
            onClick={closeModal}
            style={{
              marginTop: '20px',
              alignSelf: 'flex-end',
              padding: '10px 20px',
              borderRadius: '5px',
            }}
          >
            Close
          </button>
        </Modal>
      )}

      <h2>Places I've Visited</h2>
      <table className="travel-table">
        <thead>
          <tr>
            <th>Place</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {processedPlaces
            .slice()
            .sort((a, b) => {
              if (a.name === 'Los Angeles') return -1;
              if (b.name === 'Los Angeles') return 1;
              return a.name.localeCompare(b.name);
            })
            .map((place, index) => (
              <tr
                key={index}
                className="travel-table-row"
                onClick={() => handleTableRowClick(place)}
              >
                <td>{place.name}</td>
                <td>{travelDescriptions[place.descriptionID] || ''}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default Travel;
