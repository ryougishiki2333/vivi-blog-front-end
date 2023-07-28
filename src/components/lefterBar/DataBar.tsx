import styled from "styled-components";
import { Title, Wrapper } from "./barStyle";
import { RootState } from "src/store/store";
import { useAppSelector } from "../../store/hooks";
import SvgTitleCompo from "../commomComponents/SvgTitleCompo";

// const Title = styled.div`
//   ${barStyleTitle}
// `;
// const Wrapper = styled.div`
//   ${barStyleWrapper}
// `;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const DataBar: React.FC = () => {
  const selectTag = (state: RootState) => state.tag.value;
  const selectArticle = (state: RootState) => state.article.value;
  const article = useAppSelector(selectArticle);
  const tag = useAppSelector(selectTag);

  return (
    <Wrapper>
      <SvgTitleCompo text="Data" />
      <FlexBox>
        <Title>
          Article: {article.filter((item) => item.articleState === 1).length}
        </Title>
        <Title>Tag: {tag.length}</Title>
      </FlexBox>
    </Wrapper>
  );
};

export default DataBar;
