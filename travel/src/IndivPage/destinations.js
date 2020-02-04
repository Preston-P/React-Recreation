import styled from "styled-components";

export default styled.div`
  grid-area: Destinations;
  text-align: center;
  color: black;
  background-color: white;
  font-size: 2rem;

  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
