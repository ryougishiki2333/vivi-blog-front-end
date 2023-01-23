import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";
import { useAppSelector } from "../../store/hooks";
import { useParams } from "react-router-dom";
import SvgTitleCompo from "../commomComponents/SvgTitleCompo";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const tagList = () => {
    return articleItemFilter[0].tag.map((item) => (
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
    <Wrapper>
      <SvgTitleCompo text="Article" />
      <Title>{articleItemFilter[0].title}</Title>
      <div
        dangerouslySetInnerHTML={{ __html: articleItemFilter[0].content }}
      ></div>
      <TagFilterBox>{tagList()}</TagFilterBox>
    </Wrapper>
  );
};

export default ArticleZone;
