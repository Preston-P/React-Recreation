import styled from "styled-components";

export default styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 10% 1fr;
  position: relative;

  color: white;
  background-color: black;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
