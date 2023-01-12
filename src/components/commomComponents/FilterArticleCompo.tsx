import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { find } from "lodash";

const Wrapper = styled.div`
  background: #d6aefb;
  margin: 20px;
  height: 200px;
`;

type IFilter = {
  tag?: string;
  keyWord?: string;
};

const FilterArticleCompo: React.FC<IFilter> = (props) => {
  const articleItem = useAppSelector((state) => state.article.value);
  const articleItemPublish = articleItem.filter((item) => {
    if (props.tag) {
      return item.articleState === 1 && find(item.tag, ["name", props.tag]);
    } else {
      return item.articleState === 1;
    }
  });
  const articleItemPublishRender = articleItemPublish.map((article) => (
    <Link key={article.id} to={"/article/" + article.id}>
      <Wrapper>{article.title}</Wrapper>
    </Link>
  ));

  return <>{articleItemPublishRender}</>;
};

export default FilterArticleCompo;
