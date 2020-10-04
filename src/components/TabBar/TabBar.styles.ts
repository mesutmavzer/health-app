import styled from "styled-components";
import { animated } from "react-spring";

const Root = styled.div<{ center?: boolean }>`
  margin-top: 12px;
  display: flex;
  overflow-x: auto;
  scrollbar-width: none;
  justify-content: ${(props) => (props.center ? "center" : "flex-start")};
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  position: relative;
`;

const Tab = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  transition: 0.3s;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: rgb(230, 230, 230);
  }
  &:active {
    background-color: rgb(200, 200, 200);
  }
`;

const SelectorContainer = styled.div`
  width: 100%;
  position: relative;
  height: 3px;
`;

const Selector = animated(styled.div`
  position: absolute;
  top: 0;
  height: 3px;
  border-radius: 2px;
  background-color: red;
`);

export const Styled = { Root, TabsContainer, Tab, SelectorContainer, Selector };
