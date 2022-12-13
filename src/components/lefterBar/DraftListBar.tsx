import styled from "styled-components";
import { barStyleTitle, barStyleWrapper } from "./barStyle";

const Title = styled.div`
  ${barStyleTitle}
`;
const Wrapper = styled.div`
  ${barStyleWrapper}
`;

const DraftListBar: React.FC = () => {
  return (
    <Wrapper>
      <Title>草稿列表</Title>
    </Wrapper>
  );
};

export default DraftListBar;
