import styled from "styled-components";

export default styled.nav`
  display: flex;
  justify-content: space-around;

  align-items: center;
  flex: 1 1 40rem;
  font-size: 1.3rem;
  margin: auto;
  padding: 0.7rem;
  flex-wrap: wrap;
  min-height: 5vh;

  background: linear-gradient(rgba(0, 0, 0, 1), transparent);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  nav ul {
    min-width: 30vw;
    display: flex;
    justify-content: space-around;
    list-style: none;
    flex: 1 1 40rem;
    text-decoration: none;
    align-items: center;
  }
`;
