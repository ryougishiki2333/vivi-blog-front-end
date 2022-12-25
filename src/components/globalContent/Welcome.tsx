import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.div`
  font-size: 1.8em;
  color: #ffffff;
`;
const Wrapper = styled.div`
  background: linear-gradient(
    87deg,
    #0062be -14.19%,
    rgba(146, 86, 150, 0.979167) 24.76%,
    #9b2e51 95.87%,
    #8c062b 125.1%
  );
  width: 100%;
  height: 300px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Welcome: React.FC = () => {
  return (
    // <Link to={"/"}>
    <Wrapper>
      <Title>欢迎来到Vivi的小站</Title>
    </Wrapper>
    // </Link>
  );
};

export default Welcome;
