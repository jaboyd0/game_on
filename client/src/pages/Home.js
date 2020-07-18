import React from 'react';

import { Jumbotron, Card } from 'react-bootstrap';
import '../styles/Home.css';
import Drop from '../components/Dropdown';
import Nav from '../components/Navbar';
import Chat from './chat/chat';
import io from 'socket.io-client';
import config from './chat/config'



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
      <div>
        <Nav />
        <Jumbotron>
          <h1>Hello, user!</h1>
        </Jumbotron>
        <Card className="cd">
          <Card.Header>Select a Sport</Card.Header>
          <Card.Body>
            <Drop switchRoom={this.switchRoom.bind(this)} />
          </Card.Body>
        </Card>

        <h2>
          <Card className="message">
            <Card.Header>Get Connected</Card.Header>
            <Card.Body>
              <Chat socket={this.state.socket} chat={this.state.chat} room={this.state.room}  />
            </Card.Body>
          </Card>
        </h2>
      </div>
    );
  }

}



export default Home;