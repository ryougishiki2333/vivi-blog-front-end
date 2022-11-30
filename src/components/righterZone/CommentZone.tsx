import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";

const CommentZone: React.FC = () => {
  const Title = styled.div`
    ${zoneStyleTitle}
  `;
  const Wrapper = styled.div`
    ${zoneStyleWrapper}
  `;

  return (
    <Wrapper>
      <Title>评论显示组件</Title>
    </Wrapper>
  );
};

export default CommentZone;
