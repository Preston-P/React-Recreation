import styled from "styled-components";

export default styled.section`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  position: absolute;
  color: white;
  background-color: black;

  h1 {
    grid-column: 2;
    grid-row: 2;
  }

  h2 {
    grid-column: 3;
    grid-row: 2;
  }
  section {
    grid-column: 4;
    grid-row: 2;
    font-size: 2rem;
  }
`;
