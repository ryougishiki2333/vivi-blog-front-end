import styled from "styled-components";
import { barStyleTitle, barStyleWrapper } from "./barStyle";

const Title = styled.div`
  ${barStyleTitle}
`;
const Wrapper = styled.div`
  ${barStyleWrapper}
`;

const OtherFrameBar: React.FC = () => {
  return (
    <Wrapper>
      <Title>其它网站</Title>
    </Wrapper>
  );
};

export default OtherFrameBar;
