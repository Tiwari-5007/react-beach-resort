import React, {Component} from 'react';
import { Link, useParams } from 'react-router-dom';
import { RoomContext } from '../Context';
import defaultBcg from '../images/room-1.jpeg';
import Banner from '../components/Banner';
import StyledHero from '../components/StyledHero';

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

    const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;

    const [mainImg, ...defaultImg] = images;
    return (
      <>
      <StyledHero img={mainImg || this.state.defaultBcg} hero='roomsHero' >
        <Banner title={`${name} room`}>
          <Link to='/rooms' className='btn-primary'>Back To Rooms</Link>
        </Banner>
      </StyledHero>
      <section className='single-room'>
        <div className='single-room-images' >
        {defaultImg.map((item, index)=> {
          return <img key={index} src={item} alt={name}/>
        })};
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price: ${price}</h6>
            <h6>size: ${size} SQFT</h6>
            <h6>
              max capacity : {" "} {capacity > 1 ? `${capacity} people`: `${capacity} person`}
            </h6>
            <h6>
              {pets?"pets allowed":"no pets allowed"}
            </h6>
            <h6>
              {breakfast && "free breakfast included"}
            </h6>

          </article>
        </div>
      </section>

      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {extras.map((item, index)=> {
            return <li key={index}>
              - {item}
            </li>
          })}
        </ul>
      </section>
      </>
    );
  }
}

export default withRouter(SingleRoom);

