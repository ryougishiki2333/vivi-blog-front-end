import styled from "styled-components";
import { barStyleTitle, barStyleWrapper } from "./barStyle";

const DataBar: React.FC = () => {
  const Title = styled.div`
    ${barStyleTitle}
  `;
  const Wrapper = styled.div`
    ${barStyleWrapper}
  `;

  return (
    <Wrapper>
      <Title>数据信息</Title>
    </Wrapper>
  );
};

export default DataBar;
