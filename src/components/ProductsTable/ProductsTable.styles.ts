import styled from "styled-components";

interface AlignEnd {
  alignEnd?: boolean;
  weight?: number;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 750px;
  justify-content: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 100%;
  margin-top: 30px;
  border-bottom: 1px solid rgb(177, 221, 178);
  height: fit-content;
`;

const HeaderItem = styled.div<AlignEnd>`
  display: flex;
  flex: ${(props) => props.weight};
  justify-content: ${(props) => (props.alignEnd ? "flex-end" : "flex-start")};
  /* background-color: #fbfbfb; */
  height: 30px;
  align-items: center;
  color: #303030;
  line-height: 180%;
  margin-bottom: 12px;
  margin-top: 30px;
  font-weight: bold;
`;

const ProductRow = styled.div`
  display: flex;
  flex-direction: row;
  /* border-bottom: 1px solid rgb(177, 221, 178); */
`;

const ProductItem = styled.div<AlignEnd>`
  display: flex;
  flex: ${(props) => props.weight || 1};
  justify-content: ${(props) => (props.alignEnd ? "flex-end" : "flex-start")};
  background-color: #fbfbfb;
  color: #303030;
  line-height: 180%;
  padding-top: 3px;
  padding-bottom: 3px;
`;

export const Styled = { Root, Header, HeaderItem, ProductRow, ProductItem };
