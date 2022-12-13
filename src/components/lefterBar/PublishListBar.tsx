import styled from "styled-components";
import { barStyleTitle, barStyleWrapper } from "./barStyle";

const Title = styled.div`
  ${barStyleTitle}
`;
const Wrapper = styled.div`
  ${barStyleWrapper}
`;

const PublishListBar: React.FC = () => {
  return (
    <Wrapper>
      <Title>已发布列表</Title>
    </Wrapper>
  );
};

export default PublishListBar;
