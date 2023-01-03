import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";

const Title = styled.div`
  ${zoneStyleTitle}
`;
const Wrapper = styled.div`
  ${zoneStyleWrapper}
`;

const ReplyZone: React.FC = () => {
  return (
    <Wrapper>
      <Title>回复显示组件</Title>
    </Wrapper>
  );
};

export default ReplyZone;
