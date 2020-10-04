import styled from "styled-components";

const Root = styled.div<{ center?: boolean }>`
  width: 100%;
  display: flex;
  overflow-x: auto;
  scrollbar-width: none;
  justify-content: ${(props) => (props.center ? "center" : "flex-start")};
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const LettersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  max-width: 1000px;
  min-width: 1000px;
`;

const LetterButton = styled.div<{ selected?: boolean }>`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "rgb(177, 221, 178)" : "")};
  color: ${(props) => (props.selected ? "white" : "black")};
  &:hover {
    color: ${(props) => (props.selected ? "white" : "rgb(177, 221, 178)")};
  }
`;

export const Styled = { Root, LettersContainer, LetterButton };
