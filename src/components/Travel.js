import React, { useState } from 'react';
import Modal from 'react-modal';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { placesVisited } from '../travel/placesData'; 
import { travelDescriptions } from '../travel/TravelDescriptions'; 
import '../App.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

Modal.setAppElement('#root');

const Travel = () => {
  const [modalData, setModalData] = useState({ isOpen: false, city: '', description: '', images: [] });
  const [clickedMarker, setClickedMarker] = useState(null);

  const handleMarkerClick = (place) => {
    const description = travelDescriptions[place.descriptionID] || '';
    const images = place.images || [];

    if (description || images.length > 0) {
      // Show modal if there’s a description or images
      setModalData({ isOpen: true, city: place.name, description, images });
      setClickedMarker(null);  // Hide tooltip if modal is shown
    } else {
      // Show tooltip if no additional information
      setClickedMarker(place.name);
    }
  };

  const closeModal = () => {
    setModalData({ isOpen: false, city: '', description: '', images: [] });
    setClickedMarker(null);
  };

  return (
    <section id="travel" className="section">
      <h2>My Travel Map</h2>
      <div className="map-container">
        <MapContainer center={[39.50, -98.35]} zoom={4} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          />

          {placesVisited.map((place, index) => (
            <Marker
              key={index}
              position={[place.coordinates.lat, place.coordinates.lng]}
              eventHandlers={{
                click: () => handleMarkerClick(place),
              }}
            >
              {/* Show tooltip only if there's no modal data and this marker is clicked */}
              {clickedMarker === place.name && (
                <Tooltip direction="top" offset={[0, -10]} opacity={1}>
                  {place.name}
                </Tooltip>
              )}
            </Marker>
          ))}
        </MapContainer>
      </div>

      {modalData.isOpen && (
        <Modal
          isOpen={modalData.isOpen}
          onRequestClose={closeModal}
          style={{
            overlay: { zIndex: 100 },
            content: { zIndex: 101 }
          }}
          ariaHideApp={false}
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
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              ))}
            </div>
          )}
          <button className="modal-close-button" onClick={closeModal}>Close</button>
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
          {placesVisited.map((place, index) => (
            <tr key={index}>
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
