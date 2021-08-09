import { useState } from "react";
import ReactMapGL from "react-map-gl";
import { getCenter } from "geolib";
import { Marker, Popup } from "react-map-gl";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState("");

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewPort, setViewPort] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 9,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/archit009/cks2z6vi4381s17qwxels6zwv"
      mapboxApiAccessToken={process.env.mapboxgl_key}
      {...viewPort}
      onViewportChange={(nextViewPort) => setViewPort(nextViewPort)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="text-2xl cursor-pointer animate-bounce"
              aria-label="pushpin
                       "
            >
              📌
            </p>
          </Marker>
          {/* Showing popup */}
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              latitude={result.lat}
              longitude={result.long}
              closeOnClick={true}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
