import styled from "styled-components";

export default styled.section`
  min-height: 90vh;
  display: grid;
  background-color: black;

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 35vh 15vh 45vh;
  grid-template-areas:
    " Banner Banner Banner"
    " . gridText . "
    "Food Destinations Culture ";
`;
