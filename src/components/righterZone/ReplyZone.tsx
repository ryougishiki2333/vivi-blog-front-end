import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";

const ReplyZone: React.FC = () => {
  const Title = styled.div`
    ${zoneStyleTitle}
  `;
  const Wrapper = styled.div`
    ${zoneStyleWrapper}
  `;

  return (
    <Wrapper>
      <Title>回复显示组件</Title>
    </Wrapper>
  );
};

export default ReplyZone;
