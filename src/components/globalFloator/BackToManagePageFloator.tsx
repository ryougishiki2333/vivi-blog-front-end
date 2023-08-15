import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  background: #d6aefb;
  height: 60px;
  width: 100%;

  top: 0px;
  line-height: 60px;
  text-align: center;
`;

const BackToManagePageFloator: React.FC = () => {
  return (
    <Link to={"/"}>
      <Wrapper>返回主页</Wrapper>
    </Link>
  );
};

export default BackToManagePageFloator;
