import styled from "styled-components";

interface NavButtonStyleProps {
  selected?: boolean;
}

const Root = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 15px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Filler = styled.div`
  display: flex;
  flex: 2;
`;

const NavButton = styled.div<NavButtonStyleProps>`
  white-space: nowrap;
  display: flex;
  justify-content: center;
  height: 60px;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  flex: 1;
  font-weight: normal;
  color: ${(props) =>
    props.selected ? "rgb(177, 221, 178)" : "rgb(166, 173, 166)"};
  border-bottom: ${(props) =>
    props.selected ? "1px solid rgb(177, 221, 178)" : ""};
  cursor: pointer;
  font-size: large;

  &:hover {
    color: rgb(177, 221, 178);
  }
  margin-bottom: 10px;
`;

const Burger = styled.div`
  width: 35px;
  height: 35px;
  align-self: flex-end;
  transition: 0.3s;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2pt;
  cursor: pointer;
  &:hover {
    background-color: rgb(230, 230, 230);
  }
`;

export const Styled = { Root, NavButton, Filler, Burger };
