import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";

const ShareZone: React.FC = () => {
  const Title = styled.div`
    ${zoneStyleTitle}
  `;
  const Wrapper = styled.div`
    ${zoneStyleWrapper}
  `;

  return (
    <Wrapper>
      <Title>分享显示组件</Title>
    </Wrapper>
  );
};

export default ShareZone;
