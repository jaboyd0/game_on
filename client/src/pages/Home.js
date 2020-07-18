import React from 'react';
import '../styles/Home.css';
import Drop from '../components/Dropdown';
import Nav from '../components/Navbar';
import Chat from './chat/chat';
import io from 'socket.io-client';
import config from './chat/config'
import { Jumbotron, Card, Container, Row, Col } from "react-bootstrap";
import Map from "../components/Map";



const location = {
  address: "1600 Amphitheatre Parkway, Mountain View, california.",
  lat: 37.42216,
  lng: -122.08427,
};

class Home extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      chat: [],
      socket: {},
      room: 'Arlington',
    };
  }

  componentDidMount() {

    this.setState({
      socket: io(config[process.env.NODE_ENV].endpoint)
    }, () => {
      this.state.socket.connect()

      // load last 10 messages on page
      this.state.socket.on('init', (msg) => {
        this.setState((state) => ({
          chat: [...state.chat, ...msg.reverse()],
        }), this.scrollToBottom);
      });

      // Update the chat if a new message is broadcasted
      this.state.socket.on('push', (msg) => {
        this.setState((state) => ({
          chat: [...state.chat, msg],
        }), this.scrollToBottom);
      });

      this.state.socket.on('connect', () => {
        this.state.socket.emit('room', this.state.room)
        console.log('connected');
      });

      this.state.socket.on('message', (data) => {
        console.log('incoming message: ', data)
        this.setState((state) => {

          // update page w/current message remove from type area
          return {
            chat: [...state.chat, data],
            content: '',
          };
        }, this.scrollToBottom);
      });

    });
  }

  switchRoom(room) {
    this.setState({
      room: room,
      chat: []
    }, () => {
      this.state.socket.emit('room', this.state.room)
      console.log('connected', this.state.room);
    })
  }

  render() {
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
                <Drop switchRoom={this.switchRoom.bind(this)} />
              </Card.Body>
            </Card>
          </Col>

          <Col lg>
            <Card className="message">
              <Card.Header>Get Connected</Card.Header>
              <Card.Body>
                <Chat socket={this.state.socket} chat={this.state.chat} room={this.state.room} />
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