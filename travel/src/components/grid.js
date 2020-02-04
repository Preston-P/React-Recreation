import styled from "styled-components";

export default styled.section`
  min-height: 100vh;
  display: grid;
  text-decoration: none;
  grid-template-columns: repeat(4, 1fr);

  position: absolute;
  color: white;
  background-color: black;
  grid-template-areas:
    ". img1 img2 img3"
    "Text img1 img2 img3"
    "Text img1 img2 img3";

  img {
    position: relative;
    top: -8%;
  }

  h1 {
    color: white;
    background: transparent;
    position: relative;
    text-align: center;
    top: 50%;
    list-style: none;
    text-decoration: none;
    z-index: 3;
  }
`;
