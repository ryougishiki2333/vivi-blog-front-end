import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { find } from "lodash";
import { IArticle } from "src/types/dataType";

const Wrapper = styled.div`
  margin: 5px;
  height: 300px;
`;

const Content = styled.div`
  display: flex;
  justify-content: left;
`;

const Title = styled.div`
  font-size: 1.5em;
  text-align: center;
`;

const Tags = styled.div`
  margin-left: 5px;
`;

const TagFilterBox = styled.div`
  display: flex;
  justify-content: left;
`;

type IFilter = {
  tag?: string;
  keyWord?: string;
};

const PreviewArticleCompo: React.FC<IFilter> = (props) => {
  const articleItem = useAppSelector((state) => state.article.value);
  const articleItemPublish = articleItem.filter((item) => {
    if (props.tag) {
      return item.articleState === 1 && find(item.tag, ["name", props.tag]);
    } else {
      return item.articleState === 1;
    }
  });

  const tagList = (articleItem: IArticle) => {
    return articleItem.tag.map((item) => (
      <Tags key={item.id}>{item.name}</Tags>
    ));
  };

  return (
    <>
      <Link
        key={articleItemPublish[0].id}
        to={"/article/" + articleItemPublish[0].id}
      >
        <Wrapper>
          <Title>{articleItemPublish[0].title}</Title>
          <div
            dangerouslySetInnerHTML={{ __html: articleItemPublish[0].content }}
          ></div>
        </Wrapper>
      </Link>
      <TagFilterBox>{tagList(articleItemPublish[0])}</TagFilterBox>
    </>
  );
};

export default PreviewArticleCompo;
