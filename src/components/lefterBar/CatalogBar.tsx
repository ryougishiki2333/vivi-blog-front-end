import styled from "styled-components";
import { Title, Wrapper } from "./barStyle";

// const Title = styled.div`
//   ${barStyleTitle}
// `;
// const Wrapper = styled.div`
//   ${barStyleWrapper}
// `;
const CatalogBar: React.FC = () => {
  return (
    <Wrapper>
      <Title>目录栏</Title>
    </Wrapper>
  );
};

export default CatalogBar;
