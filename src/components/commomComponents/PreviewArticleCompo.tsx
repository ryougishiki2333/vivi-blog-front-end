import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { IArticleState } from "../../types/dataType";

const Wrapper = styled.div`
  background: #d6aefb;
  margin: 20px;
  height: 200px;
`;

const PreviewArticleCompo: React.FC = () => {
  const articleItem = useAppSelector((state) => state.article.value);
  const articleItemPublish = articleItem.filter(
    (article) => article.articleState === 1
  );
  const articleItemPublishRender = articleItemPublish.map((article) => (
    <Link key={article.id} to={"/article/" + article.id}>
      <Wrapper>{article.title}</Wrapper>
    </Link>
  ));

  return <>{articleItemPublishRender}</>;
};

export default PreviewArticleCompo;
