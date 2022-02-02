//How to do it using higher order function
import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import Loading from './Loading';
import { withRoomConsumer } from '../Context';

function RoomContainer({ context }) {
    const { loading, sortedRooms, rooms } = context;
    if (loading) {
        return <Loading />;
    }
    return (
        <>              
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </>
    );
}

export default withRoomConsumer(RoomContainer);


// import React from 'react';
// import { RoomConsumer } from '../Context';
// import RoomFilter from './RoomFilter';
// import RoomList from './RoomList';
// import Loading from './Loading';


// export default function RoomContainer() {
//     return (
//             <RoomConsumer>
//                 {
//                     (value) => {
//                         const {loading, sortedRooms, rooms} = value;

//                         if(loading){
//                             return <Loading/>
//                         }
//                         return (
//                             <div>
//                                 Hello from rooms container
//                                 <RoomFilter rooms={rooms}/>
//                                 <RoomList rooms={sortedRooms} />
//                             </div>
//                         );
//                     }
//                 }
//             </RoomConsumer>
//     );
// }
