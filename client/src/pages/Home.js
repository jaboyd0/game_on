import React from "react";
import { Jumbotron, Card, Container, Row, Col } from "react-bootstrap";
import "../styles/Home.css";
import Drop from "../components/Dropdown";
import Nav from "../components/Navbar";
import Chat from "./chat/chat";
import Map from "../components/Map";


const location = {
  address: "1600 Amphitheatre Parkway, Mountain View, california.",
  lat: 37.42216,
  lng: -122.08427,
};

function Home() {

  return (
    <Container fluid true>
      <div className="homepage">
        <Nav />
        <Jumbotron>
          <h1>Welcome to GameOn!</h1>
        </Jumbotron></div>

      <Row>
        <Col lg>
          <Card className="cd">
            <Card.Header>Select a Sport</Card.Header>
            <Card.Body>
              <Drop />
            </Card.Body>
          </Card>
        </Col>

        <Col lg>
          <Card className="message">
            <Card.Header>Get Connected</Card.Header>
            <Card.Body>
              <Chat />
            </Card.Body>
          </Card>
        </Col>

      </Row>

      <Row>
        <Col>
          <Card className="Google">
            <Map location={location} zoomLevel={17} />
          </Card>
        </Col>

      </Row>

    </Container >
  );
}


// <div className="homepage">
//   <Nav />
//   <Jumbotron>
//     <h1>Welcome to GameOn!</h1>
//   </Jumbotron>


//   <Card className="cd">
//     <Card.Header>Select a Sport</Card.Header>
//     <Card.Body>
//       <Drop />
//     </Card.Body>
//   </Card>

//   <h2>
//     <Card className="message">
//       <Card.Header>Get Connected</Card.Header>
//       <Card.Body>
//         <Chat />
//       </Card.Body>
//     </Card>
//   </h2>

//   <h3>
//     <Card className="Google">
//       <Map location={location} zoomLevel={17} />
//     </Card>

//   </h3>




export default Home;