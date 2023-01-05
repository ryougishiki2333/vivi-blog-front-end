import styled from "styled-components";
import { barStyleTitle, barStyleWrapper } from "./barStyle";

const Title = styled.div`
  ${barStyleTitle}
`;
const Wrapper = styled.div`
  ${barStyleWrapper}
`;

const EditArticleBar: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Title>草稿箱</Title>
      </Wrapper>
      <Wrapper>
        <Title>已发布列表</Title>
      </Wrapper>
      <Wrapper>
        <Title>已删除列表</Title>
      </Wrapper>
      <Wrapper>
        <Title>已归档列表</Title>
      </Wrapper>
    </>
  );
};

export default EditArticleBar;
