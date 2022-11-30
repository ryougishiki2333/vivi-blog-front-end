import styled from "styled-components";
import { barStyleTitle, barStyleWrapper } from "./barStyle";

const SubscribeBar: React.FC = () => {
  const Title = styled.div`
    ${barStyleTitle}
  `;
  const Wrapper = styled.div`
    ${barStyleWrapper}
  `;

  return (
    <Wrapper>
      <Title>订阅渠道</Title>
    </Wrapper>
  );
};

export default SubscribeBar;
