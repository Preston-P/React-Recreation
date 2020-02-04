import styled from "styled-components";

export default styled.section`
  width: 70vw;
  margin: 0 auto;
  padding: 2rem 0;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1.5rem;
  }
  @media screen and (min-width: 992px) {
    width: 85vw;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 1140px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
