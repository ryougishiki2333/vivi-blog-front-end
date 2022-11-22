import styled from "styled-components";
import { barStyleTitle, barStyleWrapper } from "./barStyle";

const ClassificationBar: React.FC = () => {
  const Title = styled.div`
    ${barStyleTitle}
  `;
  const Wrapper = styled.div`
    ${barStyleWrapper}
  `;

  return (
    <Wrapper>
      <Title>分类信息</Title>
    </Wrapper>
  );
};

export default ClassificationBar;
