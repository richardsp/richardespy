import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import Modal from 'react-modal';
import { placesVisited } from './placesData'; // Import the places data from the separate file

// Update the file name to the correct one
const geoUrl = "/maps/countries-110m.json";  // Corrected file name

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const Travel = () => {
  const [tooltipContent, setTooltipContent] = useState('');
  const [modalData, setModalData] = useState({ isOpen: false, city: '', description: '', image: '' });

  const handleMarkerClick = (place) => {
    setModalData({ isOpen: true, city: place.name, description: place.description, image: place.image });
  };

  const closeModal = () => {
    setModalData({ isOpen: false, city: '', description: '', image: '' });
  };

  return (
    <section id="travel" className="section">
      <h2>My Travel Map</h2>
      <div className="map-container">
        <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => setTooltipContent(geo.properties.NAME)}
                  onMouseLeave={() => setTooltipContent('')}
                  style={{
                    default: { fill: '#D6D6DA' },
                    hover: { fill: '#F53' },
                    pressed: { fill: '#E42' },
                  }}
                />
              ))
            }
          </Geographies>
          {placesVisited.map((place, index) => (
            <Marker key={index} coordinates={place.coordinates}>
              <circle
                r={6}
                fill="#F00"
                stroke="#fff"
                strokeWidth={2}
                onClick={() => handleMarkerClick(place)}
              />
            </Marker>
          ))}
        </ComposableMap>
      </div>
      <ReactTooltip>{tooltipContent}</ReactTooltip>

      <Modal isOpen={modalData.isOpen} onRequestClose={closeModal} style={customStyles}>
        <h2>{modalData.city}</h2>
        <p>{modalData.description}</p>
        {modalData.image && <img src={modalData.image} alt={modalData.city} className="modal-image" />}
        <button onClick={closeModal}>Close</button>
      </Modal>

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
              <td>{place.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Travel;
