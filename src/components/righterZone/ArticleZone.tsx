import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { useParams } from "react-router-dom";
import SvgTitleCompo from "../commomComponents/SvgTitleCompo";
import { useNavigate } from "react-router-dom";
import InviteSignUpFloator from "../globalFloator/InviteSignUpFloator";
import ArticleIcon from "@mui/icons-material/Article";
import { Divider, Space, Tag } from "antd";
import { useEffect } from "react";
import { articleFindAll } from "../../api/article";
import { tagFindAll } from "../../api/tag";

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

const TagAndOthersFilterBox = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 40px;
`;

const MarginLeftWrapper = styled.div`
  margin-left: 30px;
  margin-right: 30px;
`;

const Tags = styled.div`
  margin-left: 5px;
  cursor: pointer;
`;

const ArticleZone: React.FC = () => {
  const { id } = useParams();
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

  const articleItemFilter = articleItem.length
    ? articleItem.filter((article) => article.id === parseInt(id || "0"))
    : [];
  const navigate = useNavigate();
  const tagList = () => {
    return articleItemFilter.length ? (
      articleItemFilter[0].tag.map((item) => (
        <Tags
          key={item.id}
          onClick={(e) => {
            e.stopPropagation();
            navigate("/main/filterPage", { state: { name: `${item.name}` } });
          }}
        >
          <Tag>{item.name}</Tag>
        </Tags>
      ))
    ) : (
      <></>
    );
  };

  return (
    <>
      {/* <InviteSignUpFloator /> */}
      <Wrapper>
        <SvgTitleCompo icon={<ArticleIcon />} text="Article" />
        <MarginLeftWrapper>
          <Title>
            {articleItemFilter.length ? articleItemFilter[0].title : ""}
          </Title>
          <div
            dangerouslySetInnerHTML={{
              __html: articleItemFilter.length
                ? articleItemFilter[0].content
                : "",
            }}
          ></div>
          <TagAndOthersFilterBox>{tagList()}</TagAndOthersFilterBox>
        </MarginLeftWrapper>
      </Wrapper>
    </>
  );
};

export default ArticleZone;
