import React, { Component } from 'react';
import items from './data'

const RoomContext = React.createContext();
// <RoomContext.Provider value={}

class RoomProvider extends Component {

    state={
      rooms: [],
      sortedRooms:[],
      featuredRooms:[],
      loading: true // currently we are acessing the data localy so we do not need this property but when the data will come from server we need this.
    };

    // getData: To get the data

    // setting up the lifecycle method so that when the component mount then we are going to update the state
    componentDidMount(){
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        this.setState({
            rooms: rooms,
            featuredRooms:featuredRooms,
            sortedRooms:rooms,
            loading: false
        });
    }

    formatData(items){
        let tempItems = items.map(item =>{
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = {...item.fields, images:images, id:id}

            return room;
        });
        return tempItems;
    }

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === slug)
        return room;
    };

  render() {
    return (
        <RoomContext.Provider value={{...this.state, getRoom:this.getRoom }}>
            {this.props.children}
        </RoomContext.Provider>
    );
  }
}

// Creting Consumer
const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext};