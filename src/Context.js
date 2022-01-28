import React, { Component } from 'react';

const RoomContext = React.createContext();
// <RoomContext.Provider value={}

class RoomProvider extends Component {

    state={
        greeting: 'hello',
        name: 'john'
    };

  render() {
    return (
        <RoomContext.Provider value={{...this.state }}>
            {this.props.children}
        </RoomContext.Provider>
    );
  }
}

// Creting Consumer
const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext};