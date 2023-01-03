import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";

const Title = styled.div`
  ${zoneStyleTitle}
`;
const Wrapper = styled.div`
  ${zoneStyleWrapper}
`;

const CommentZone: React.FC = () => {
  return (
    <Wrapper>
      <Title>评论显示组件</Title>
    </Wrapper>
  );
};

export default CommentZone;
