import styled from "styled-components";
// import defaultImg from "../images/room-1.jpeg";

const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${props => props.img}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// We can also add defaultImg here as:
//  /* background: url(${props => props.img?props.img:defaultImg}) center/cover no-repeat; */
// but in this case we have added it in our SingleRoom.js File

export default StyledHero;
