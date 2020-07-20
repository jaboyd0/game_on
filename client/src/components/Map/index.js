import React, { useEffect, useState } from "react";
import GoogleMap from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import { Card } from "react-bootstrap";
import '../Map/map.css'
import axios from "axios";

// //test
// var service = new google.maps.places.PlacesService(map);
// var request = {
//   location: new google.maps.LatLng(-33.8736510, 151.20688960),
//   radius: 500
// };
// service.search(request, function(results) {
//   console.log(results.length);
//   for (var i=0; i< results.length; i++) {
//     console.log(results[i].name, results[i].types)
//   }
// })



const LocationPin = ({ text }) => (
  <div class="mapPin">
    <Icon icon={locationIcon} />
    <p>{text}</p>
  </div>
);


const Map = ({ sportAndCity, zoomLevel }) => {
  const [location, setLocation] = useState({
    address: "",
    location: { lat: 0, lng: 0 },
  });
  const [sportLocations, setSportLocations] = useState([]);

  useEffect(() => {
    if (sportAndCity) {
      const city = sportAndCity.split('-')[1];
      const sport = sportAndCity.split('-')[0];
  
        axios
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA5Kk4KZ5Ia-PHpXo97abm9JPZYm6xGVgY&address=${city}`
        )
        .then((res) => {
          setLocation({
            address: res.data.results[0].formatted_address,
            location: res.data.results[0].geometry.location,
          });
        })
        .catch();

      axios
      .get(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${sport}+courts+in+${city}&key=AIzaSyA5Kk4KZ5Ia-PHpXo97abm9JPZYm6xGVgY`
      )
      .then((res) => {
        setSportLocations(res.data.results);
      })
      .catch();
    }
  }, [sportAndCity]);


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
              defaultZoom={14}
              // defaultZoom={zoomLevel}
            >
              {/*<LocationPin
                lat={location.location.lat}
                lng={location.location.lng}
              />*/}
              {sportLocations.map(location => {
                return <LocationPin
                className="pin"
                lat={location.geometry.location.lat}
                lng={location.geometry.location.lng} 
                text={location.name}
                style={{ p: "fixed" }} 

              />
              })}
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
