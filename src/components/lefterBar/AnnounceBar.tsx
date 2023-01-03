import styled from "styled-components";
import { barStyleTitle, barStyleWrapper } from "./barStyle";

const Title = styled.div`
  ${barStyleTitle}
`;
const Wrapper = styled.div`
  ${barStyleWrapper}
`;

const AnnounceBar: React.FC = () => {
  return (
    <Wrapper>
      <Title>喇叭信息</Title>
    </Wrapper>
  );
};

export default AnnounceBar;
