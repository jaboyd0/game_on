import React from 'react';
import { Jumbotron, Card } from 'react-bootstrap';
import '../styles/Home.css'
import Dropdown from '../components/Dropdown'


function Home() {

  return (
    <div>
      <Jumbotron>
        <h1>Hello, user!</h1>
      </Jumbotron>

      <Card>
        <Card.Header>Select a Sport</Card.Header>
        <Card.Body>
          <Dropdown />
        </Card.Body>
      </Card>
    </div>


  );
}





export default Home;