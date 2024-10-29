import React, { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import Modal from 'react-modal';
import { placesVisited } from '../travel/placesData'; 
import { travelDescriptions } from '../travel/TravelDescriptions'; 
import { Tooltip } from 'react-tooltip';


const geoUrl = "/assets/maps/countries-110m.json";  // Corrected path

const getCustomStyles = (hasImages) => ({
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: hasImages ? '70%' : '40%',  // Adjust modal size based on content
    maxWidth: '90%',
  },
});

Modal.setAppElement('#root');

const Travel = () => {
  const [modalData, setModalData] = useState({ isOpen: false, city: '', description: '', images: [] });
  const [geoDataLoaded, setGeoDataLoaded] = useState(true);  // Track if geography data is loaded
  const [setAnnotationVisibility] = useState({}); // Track visibility of annotations

  useEffect(() => {
    fetch(geoUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to load geography data.');
        }
        return response.json();
      })
      .then(() => {
        setGeoDataLoaded(true);  // Geography data loaded successfully
      })
      .catch((error) => {
        setGeoDataLoaded(false);  // Geography data failed to load
        console.error('Error loading geography data:', error);
      });
  }, []);

  const hasData = (place) => {
    const hasImages = place.images && place.images.length > 0;
    const hasDescription = travelDescriptions[place.descriptionID];
    return hasImages || hasDescription;
  };

  const handleMarkerClick = (place) => {
    const description = travelDescriptions[place.descriptionID] || '';
    const images = place.images || [];
    setModalData({ isOpen: true, city: place.name, description, images });

    // Toggle annotation visibility for clicked marker
    setAnnotationVisibility((prev) => ({
      ...prev,
      [place.name]: !prev[place.name],
    }));
  };

  const closeModal = () => {
    setModalData({ isOpen: false, city: '', description: '', images: [] });
  };

  if (!geoDataLoaded) {
    return <p>Error loading map. Please check the map file path.</p>;  // Handle map loading error
  }

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
                  style={{
                    default: { fill: '#D6D6DA' },
                    hover: { fill: '#F53' },
                    pressed: { fill: '#E42' },
                  }}
                />
              ))
            }
          </Geographies>
 
          {placesVisited.map((place, index) => {
  const isClickable = hasData(place);
  return (
    <Marker key={index} coordinates={place.coordinates}>
      <circle
        r={6}
        fill={isClickable ? "#F00" : "#bbb"}
        stroke="#fff"
        strokeWidth={2}
        data-tip={place.name}
        onClick={() => isClickable && handleMarkerClick(place)}
        style={{ cursor: isClickable ? 'pointer' : 'default', pointerEvents: 'all' }}
      />
    </Marker>
  );
})}
<Tooltip place="top" type="dark" effect="float" />

 
        </ComposableMap>
      </div>

      <Modal
        isOpen={modalData.isOpen}
        onRequestClose={closeModal}
        style={getCustomStyles(modalData.images.length > 0)}
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
              />
            ))}
          </div>
        )}
        <button className="modal-close-button" onClick={closeModal}>Close</button>
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
              <td>{travelDescriptions[place.descriptionID] || 'No description available'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Travel;
