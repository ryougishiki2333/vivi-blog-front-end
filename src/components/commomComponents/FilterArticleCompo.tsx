import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { find } from "lodash";
import img from "../../assets/img/img.jpg";
import { IArticle } from "src/types/dataType";

const Wrapper = styled.div`
  border-style: solid;
  border-radius: 10px;
  height: 200px;
  border-width: thin;
  margin-bottom: 10px;
  display: flex;
`;

const PictureWrapper = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
`;

const TextWrapper = styled.div`
  width: 70%;
  height: 200px;
`;

const TopperWrapper = styled.div`
  height: 160px;
`;

const Title = styled.div`
  font-size: 1.5em;
  text-align: center;
`;

const TagFilterBox = styled.div`
  display: flex;
  justify-content: left;
`;

const Tags = styled.div`
  margin-left: 5px;
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

  const tagList = (articleItem: IArticle) => {
    return articleItem.tag.map((item) => (
      <Tags key={item.id}>{item.name}</Tags>
    ));
  };
  const articleItemPublishRender = articleItemPublish.map((article) => (
    <Wrapper>
      <PictureWrapper>
        <Link key={article.id} to={"/article/" + article.id}>
          <img height={180} width={180} src={img} alt={"2123"} loading="lazy" />
        </Link>
      </PictureWrapper>
      <TextWrapper>
        <TopperWrapper>
          <Title>{article.title}</Title>
          <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
        </TopperWrapper>
        <TagFilterBox>{tagList(article)}</TagFilterBox>
      </TextWrapper>
    </Wrapper>
  ));

  return <>{articleItemPublishRender}</>;
};

export default FilterArticleCompo;
