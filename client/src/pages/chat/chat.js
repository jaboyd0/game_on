import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import BottomBar from './BottomBar';
import './chat.css';

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      name: '',
    };
  }

  // save messge user is typing
  handleContent(event) {
    this.setState({
      content: event.target.value,
    });
  }

  handleName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  // user posts new message
  handleSubmit(event) {
    console.log(event);

    //prevent form from reloading page
    event.preventDefault();

    console.log(this.state);
      console.log('this', this.props.socket);

      // sends message to server
      console.log(this.props)
      this.props.socket.emit('message', {
        name: this.state.name,
        content: this.state.content,
        room: this.props.room,
      });

  }

  // ensure window is scrolled to latest message
  scrollToBottom() {
    const chat = document.getElementById('chat');
    chat.scrollTop = chat.scrollHeight;
  }


  render() {
    return (
      <div className="App">
        <Paper id="chat" elevation={3}>
          {this.props.chat.map((el, index) => {
            return (
              <div key={index}>
                <Typography variant="caption" className="name">
                  {el.name}
                </Typography>
                <Typography variant="body1" className="content">
                  {el.content}
                </Typography>
              </div>
            );
          })}
        </Paper>
        <BottomBar
          content={this.state.content}
          handleContent={this.handleContent.bind(this)}
          handleName={this.handleName.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
          name={this.state.name}
          />
      </div>
    );
  }
};

export default Chat;