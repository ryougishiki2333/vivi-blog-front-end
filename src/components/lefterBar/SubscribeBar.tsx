import styled from "styled-components";
import { barStyleTitle, barStyleWrapper } from "./barStyle";

const Title = styled.div`
  ${barStyleTitle}
`;
const Wrapper = styled.div`
  ${barStyleWrapper}
`;

const SubscribeBar: React.FC = () => {
  return (
    <Wrapper>
      <Title>订阅渠道</Title>
    </Wrapper>
  );
};

export default SubscribeBar;
