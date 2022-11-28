import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";

const ArticleZone: React.FC = () => {
  const Title = styled.div`
    ${zoneStyleTitle}
  `;
  const Wrapper = styled.div`
    ${zoneStyleWrapper}
    height: 1000px;
  `;

  return (
    <Wrapper>
      <Title>文章显示组件</Title>
    </Wrapper>
  );
};

export default ArticleZone;
