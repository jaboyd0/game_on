import React from "react";
import GoogleMap from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import {  Card } from "react-bootstrap";
import '../../styles/map.css';

const LocationPin = ({ text }) => (
    <div>
        <Icon icon={locationIcon} />
        <p>{text}</p>
    </div>
);
const Map = ({ location, zoomLevel }) => (
    <div>
        <div>
            <Card className="maps">
                <Card.Header>MAP</Card.Header>
                <Card.Body>
                    <GoogleMap className="map"
                        style={{ size: "100px" }}
                        bootstrapURLKeys={{ key: "AIzaSyA5Kk4KZ5Ia-PHpXo97abm9JPZYm6xGVgY" }}
                        defaultCenter={location}
                        defaultZoom={zoomLevel}
                    >
                        <LocationPin
                            lat={location.lat}
                            lng={location.lng}
                            text={location.address}
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
export default Map;