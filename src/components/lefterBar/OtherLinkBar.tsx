import styled from "styled-components";
import { barStyleTitle, barStyleWrapper } from "./barStyle";

const Title = styled.div`
  ${barStyleTitle}
`;
const Wrapper = styled.div`
  ${barStyleWrapper}
`;

const OtherLinkBar: React.FC = () => {
  return (
    <Wrapper>
      <Title>友情链接</Title>
    </Wrapper>
  );
};

export default OtherLinkBar;
