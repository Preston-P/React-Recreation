import styled from "styled-components";

export default styled.section`
  min-height: 90vh;
  display: grid;
  background-color: black;

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 52vh 8vh 45vh;
  grid-template-areas:
    " Banner Banner Banner"
    " gridText gridText gridText "
    "Food Destinations Iconic ";
`;
