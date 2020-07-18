import React, { useEffect, useState } from "react";
import GoogleMap from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import { Card } from "react-bootstrap";
import "../../styles/map.css";
import axios from "axios";

const LocationPin = ({ text }) => (
  <div>
    <Icon icon={locationIcon} />
    <p>{text}</p>
  </div>
);
const Map = ({ city, zoomLevel }) => {
  const [location, setLocation] = useState({
    address: "",
    location: { lat: 0, lng: 0 },
  });
  useEffect(() => {
    axios
      .get(
        "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA5Kk4KZ5Ia-PHpXo97abm9JPZYm6xGVgY&address=" +
          city
      )
      .then((res) => {
        setLocation({
          address: res.data.results[0].formatted_address,
          location: res.data.results[0].geometry.location,
        });
      })
      .catch();
  }, [city]);

  return (
    <div>
      <div>
        <Card className="maps">
          <Card.Header>MAP</Card.Header>
          <Card.Body>
            <GoogleMap
              className="map"
              style={{ size: "100px" }}
              bootstrapURLKeys={{
                key: "AIzaSyA5Kk4KZ5Ia-PHpXo97abm9JPZYm6xGVgY",
              }}
              center={location.location}
              defaultZoom={zoomLevel}
            >
              <LocationPin
                lat={location.location.lat}
                lng={location.location.lng}
              />
            </GoogleMap>
          </Card.Body>
        </Card>
        {/* <GoogleMap
                        style={{size: "10px"}}
                        bootstrapURLKeys={{ key: "AIzaSyA5Kk4KZ5Ia-PHpXo97abm9JPZYm6xGVgY" }}
                        defaultCenter={location}
                        defaultZoom={zoomLevel}
                    >
                        <LocationPin
                            lat={location.lat}
                            lng={location.lng}
                            text={location.address}
                        />
                    </GoogleMap> */}
      </div>
    </div>
  );
};
export default Map;
