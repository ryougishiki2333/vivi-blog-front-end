import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";
import { useAppSelector } from "../../store/hooks";
import { useParams } from "react-router-dom";

const Title = styled.div`
  ${zoneStyleTitle}
`;
const Wrapper = styled.div`
  ${zoneStyleWrapper}
`;

const ArticleZone: React.FC = () => {
  const articleItem = useAppSelector((state) => state.article.value);
  const { id } = useParams();
  const articleItemFilter = articleItem.filter((article) => article.id === id);
  console.log(articleItemFilter);

  return (
    <Wrapper>
      <Title>{articleItemFilter[0].title}</Title>
      <div
        dangerouslySetInnerHTML={{ __html: articleItemFilter[0].content }}
      ></div>
    </Wrapper>
  );
};

export default ArticleZone;
