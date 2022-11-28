import styled from "styled-components";
import { barStyleTitle, barStyleWrapper } from "./barStyle";

const CatalogBar: React.FC = () => {
  const Title = styled.div`
    ${barStyleTitle}
  `;
  const Wrapper = styled.div`
    ${barStyleWrapper}
  `;

  return (
    <Wrapper>
      <Title>目录栏</Title>
    </Wrapper>
  );
};

export default CatalogBar;
