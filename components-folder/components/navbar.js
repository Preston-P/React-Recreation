import styled from "styled-components";

export default styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 10vh;
  background: black;
  color: white;
  font-size: 1.3rem;
  z-index: -1;

  background: url("https://images.pexels.com/photos/1250283/pexels-photo-1250283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");

  ul {
    min-width: 30vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    text-decoration: none;
  }

  h3 {
    position: absolute;
    left: 9%;
  }
`;
