import styled from "styled-components";
import { barStyleTitle, barStyleWrapper } from "./barStyle";

const Title = styled.div`
  ${barStyleTitle}
`;
const Wrapper = styled.div`
  ${barStyleWrapper}
`;

const DeleteListBar: React.FC = () => {
  return (
    <Wrapper>
      <Title>删除列表</Title>
    </Wrapper>
  );
};

export default DeleteListBar;
