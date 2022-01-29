import React, {Component} from 'react';
import { Link, useParams } from 'react-router-dom';
import { RoomContext } from '../Context';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';

// This function is used in order to get the props from the react-router-dom v6 to our class component.
export function withRouter(Children){
  return(props)=>{
    const match = {params: useParams()};
    const location = {params: useParams()};
    const history = {params: useParams()};

    return <Children {...props} match = {match} location={location} history={history} />
  }
}

class SingleRoom extends Component {

  constructor(props){
    super(props);
    this.props = props;
    // console.log(this.props.match.params.slug);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }

  static contextType = RoomContext;

  render() {
    
    // console.log(this.props.match.params.slug);

    const {getRoom} = this.context;
    const room = getRoom(this.state.slug);
    if(!room){
      return <div className='error'>
        <h3>No such room could be found</h3>
        <Link to="/rooms" className='btn-primary'>Back To Rooms</Link>
      </div>
    }

    const {name, description, capacity, size, price, extras, breakfast, pets, images} = room
    return (
      <Hero hero='roomsHero' style={{
        backGroundImage: `url(${this.props.img})`
      }}>
        <Banner title={`${name} room`}>
          <Link to='/rooms' className='btn-primary'>Back To Rooms</Link>
        </Banner>
      </Hero>
    );
  }
}

export default withRouter(SingleRoom);

