import styled from "styled-components";
import { Title, Wrapper } from "./barStyle";

// const Title = styled.div`
//   ${barStyleTitle}
// `;
// const Wrapper = styled.div`
//   ${barStyleWrapper}
// `;

const PublishListBar: React.FC = () => {
  return (
    <Wrapper>
      <Title>已发布列表</Title>
    </Wrapper>
  );
};

export default PublishListBar;
