import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { find } from "lodash";
import { IArticle } from "src/types/dataType";
import { useNavigate } from "react-router-dom";

const WrapperTop = styled.div`
  margin: 5px;
  height: 300px;
  overflow-wrap: break-word;
  overflow: hidden;
`;

const WrapperBottom = styled.div`
  margin: 5px;
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
  justify-content: center;
`;

const ArticleContent = styled.div``;

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

  const navigate = useNavigate();

  const tagList = (articleItem: IArticle) => {
    return articleItem.tag.map((item) => (
      <Tags
        key={item.id}
        onClick={(e) => {
          e.stopPropagation();
          navigate("/main/filterPage", { state: { name: `${item.name}` } });
        }}
      >
        {item.name}
      </Tags>
    ));
  };

  return (
    <>
      <WrapperTop
        key={articleItemPublish[0].id}
        onClick={() => {
          navigate("/article/" + articleItemPublish[0].id);
        }}
      >
        <Title>{articleItemPublish[0].title}</Title>
        <TagFilterBox>{tagList(articleItemPublish[0])}</TagFilterBox>
        <ArticleContent
          dangerouslySetInnerHTML={{ __html: articleItemPublish[0].content }}
        ></ArticleContent>
      </WrapperTop>
    </>
  );
};

export default PreviewArticleCompo;
