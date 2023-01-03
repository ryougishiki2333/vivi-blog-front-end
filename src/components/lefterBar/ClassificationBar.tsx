import styled from "styled-components";
import { barStyleTitle, barStyleWrapper } from "./barStyle";
import { Link } from "react-router-dom";

const Title = styled.div`
  ${barStyleTitle}
`;
const Wrapper = styled.div`
  ${barStyleWrapper}
`;

const ClassificationBar: React.FC = () => {
  return (
    <Link to={"/main/filterPage"}>
      <Wrapper>
        <Title>分类信息</Title>
      </Wrapper>
    </Link>
  );
};

export default ClassificationBar;
