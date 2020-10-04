import styled from "styled-components";

interface NavButtonStyleProps {
  selected?: boolean;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  background-color: "red";
  justify-content: center;
  align-items: center;
`;

export const Styled = { Root };
