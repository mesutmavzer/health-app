import styled from "styled-components";

interface TitleStyleProps {
  isNegative?: boolean;
}

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 80%;
  background-color: red;
`;

const Header = styled.div`
  flex-direction: row;
  min-height: 250px;
  width: 100%;
  background-image: url("./assets/mainer2.jpg");
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.h1<TitleStyleProps>`
  font-size: 40px;
  color: ${(props) => (props.isNegative ? "red" : "blue")};
`;

export const Styled = { Root, Title, Header, Content };
