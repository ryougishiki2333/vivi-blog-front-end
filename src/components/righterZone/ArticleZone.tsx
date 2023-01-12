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

const TagFilterBox = styled.div`
  display: flex;
  justify-content: left;
`;

const Tags = styled.div`
  margin-left: 5px;
`;

const ArticleZone: React.FC = () => {
  const articleItem = useAppSelector((state) => state.article.value);
  const { id } = useParams();
  const articleItemFilter = articleItem.filter((article) => article.id === id);

  const tagList = () => {
    return articleItemFilter[0].tag.map((item) => (
      <Tags key={item.id}>{item.name}</Tags>
    ));
  };

  return (
    <Wrapper>
      <Title>{articleItemFilter[0].title}</Title>
      <div
        dangerouslySetInnerHTML={{ __html: articleItemFilter[0].content }}
      ></div>
      <TagFilterBox>{tagList()}</TagFilterBox>
    </Wrapper>
  );
};

export default ArticleZone;
