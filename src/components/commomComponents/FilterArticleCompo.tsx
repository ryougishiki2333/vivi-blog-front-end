import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { find } from "lodash";
import img from "../../assets/img/SharedScreenshot.jpg";
import { IArticle } from "src/types/dataType";
import { useNavigate } from "react-router-dom";
import UpdateIcon from "@mui/icons-material/Update";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { Divider, Space, Tag } from "antd";
import ViviButtonCompo from "../commomComponents/ViviButtonCompo";
import moment from "moment";
import { useEffect } from "react";
import { articleFindAll } from "../../api/article";
import { tagFindAll } from "../../api/tag";

const Wrapper = styled.div`
  border-radius: 10px;
  border-width: thin;
  margin-bottom: 20px;
  margin-top: 20px;
`;

// const PictureWrapper = styled.div`
//   width: 30%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 200px;
// `;

const TextWrapper = styled.div`
  width: 100%;
  box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.07);
  border-radius: 10px;
  padding-top: 5px;
  padding-bottom: 10px;
`;

const TopperWrapper = styled.div`
  overflow-wrap: break-word;
  overflow: hidden;
`;

const Title = styled.div`
  font-size: 1.7em;
  text-align: left;
  margin-left: 20px;
  margin-top: 5px;
  /* margin-botton: 10px; */
`;

const Introduction = styled.div`
  font-size: 1em;
  text-align: left;
  margin-left: 20px;
  margin-top: 5px;
  /* margin-botton: 10px; */
`;

const TagAndOthersFilterBox = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-left: 20px;
  margin-top: 10px;
`;

const Tags = styled.div`
  margin-right: 5px;
  cursor: pointer;
`;

const Others = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  color: #717171;
  font-size: 0.95em;
`;

type IFilter = {
  tag?: string;
  keyWord?: string;
};

const FilterArticleCompo: React.FC<IFilter> = (props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getArticle = async () => {
      const articleList = await articleFindAll();
      dispatch({ type: `article/getArticles`, payload: articleList });
      const tagList = await tagFindAll();
      dispatch({ type: `tag/getTags`, payload: tagList });
    };
    getArticle();
  }, []);

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
        onClick={(e) => {
          e.stopPropagation();
          navigate("/main/filterPage", { state: { name: `${item.name}` } });
        }}
        key={item.id}
      >
        <Tag>{item.name}</Tag>
      </Tags>
    ));
  };
  const articleItemPublishRender = articleItemPublish.map((article) => (
    <Wrapper key={article.id}>
      {/* <PictureWrapper>
        <Link to={"/article/" + article.id}>
          <img height={140} width={180} src={img} alt={"2123"} loading="lazy" />
        </Link>
      </PictureWrapper> */}
      <TextWrapper>
        <TagAndOthersFilterBox>
          <DateRangeIcon />
          <Others>
            {"created at " +
              moment(article.createdAt.valueOf()).format("YYYY/MM/DD hh:mm:ss")}
          </Others>
          <UpdateIcon />
          <Others>
            {"updated at " +
              moment(article.updatedAt.valueOf()).format("YYYY/MM/DD hh:mm:ss")}
          </Others>
        </TagAndOthersFilterBox>
        <TopperWrapper>
          <Link to={"/article/" + article.id}>
            <Title>{article.title}</Title>
            <Introduction>{article.synopsis}</Introduction>
          </Link>
          {/* <div dangerouslySetInnerHTML={{ __html: article.content }}></div> */}
        </TopperWrapper>

        <TagAndOthersFilterBox>{tagList(article)}</TagAndOthersFilterBox>
      </TextWrapper>
    </Wrapper>
  ));

  return <>{articleItemPublishRender}</>;
};

export default FilterArticleCompo;
