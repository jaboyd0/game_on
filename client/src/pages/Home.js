import React from 'react';

import { Jumbotron, Card } from 'react-bootstrap';
import '../styles/Home.css';
import Drop from '../components/Dropdown';
import Nav from '../components/Navbar';
import Chat from './chat/chat'



function Home() {

  return (
    <div>
      <Nav />
      <Jumbotron>
        <h1>Hello, user!</h1>
      </Jumbotron>
      <Card className="cd">
        <Card.Header>Select a Sport</Card.Header>
        <Card.Body>
          <Drop />
        </Card.Body>
      </Card>
      <Chat/>
    </div>
  );
}



export default Home;