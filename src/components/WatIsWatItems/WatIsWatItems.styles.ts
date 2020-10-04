import styled from "styled-components";

const InfoBlock = styled.div<{ colored?: boolean }>`
  padding: 30px;
  margin-top: 30px;
  border-radius: 20px;
  background-color: ${(props) => (props.colored ? "#fbfbfb" : undefined)};
`;

const Title = styled.div`
  color: #121212;
  font-size: 16pt;
  margin-bottom: 22pt;
  margin-top: 8pt;
  font-weight: bold;
`;

const Paragraph = styled.p`
  line-height: 175%;
  font-size: 14pt;
  margin-top: 16pt;
  color: #333433;
`;

export const Styled = { InfoBlock, Title, Paragraph };
