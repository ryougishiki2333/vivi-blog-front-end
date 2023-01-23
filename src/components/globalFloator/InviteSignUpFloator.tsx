import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

const Wrapper = styled.div`
  background: #fa9ab1;
  height: 40px;
  width: 100%;
  text-align: center;
  line-height: 40px;
`;

const InviteSignUpFloator: React.FC = () => {
  return (
    <Link to={"/visitor/signUp"}>
      <Wrapper>
        游客114514您好！注册登录后可使用自定义头像等功能，快去尝试看看吧！
      </Wrapper>
    </Link>
  );
};

export default InviteSignUpFloator;
