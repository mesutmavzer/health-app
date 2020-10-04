import styled from "styled-components";

const Root = styled.div``;

const Center = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 750px;
  width: 750px;
  margin-top: 80px;
`;

export const Styled = { Root, Center, ItemsContainer };
