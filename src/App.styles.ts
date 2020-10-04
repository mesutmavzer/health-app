import styled from "styled-components";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  padding-top: 2px;
`;

const Content = styled.div`
  width: 80%;
`;

const Header = styled.div`
  flex-direction: row;
  min-height: 250px;
  width: 100%;
  border-radius: 5px;
  background-image: url("./assets/mainer2.jpg");
  background-size: cover;
`;

export const Styled = { Root, Content, Header };
