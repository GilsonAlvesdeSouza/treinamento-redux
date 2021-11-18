import styled from "styled-components";

export const NavMenu = styled.nav`
  background-color: #343a49;
  color: #fff;
  margin: 0 10px;
  border-radius: 5px;

  ul {
    display: flex;
  }

  li {
    color: #fff;
    margin: 5px;
    list-style: none;
    border-radius: 5px;
    padding: 5px;
  }

  .link {
    padding: 10px;
    text-decoration: none;
    color: #fff;
    opacity: 0.6;

    :hover {
      opacity: 1;
    }
  }
`;

export const Container = styled.div`
  footer {
    display: flex;
    background: #343a49;
    width: 100%;
    height: 30px;
    position: absolute;
    bottom: 0;
    left: 0;
    flex-direction: row-reverse;
    color: #FFF;
  }
`;
