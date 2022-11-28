import styled from "styled-components";
import { Link } from "react-router-dom";

const WelcomeWrapper: React.FC = () => {
  const Title = styled.div`
    font-size: 1.5em;
    text-align: center;
  `;
  const Wrapper = styled.div`
    background: #f9b3e4;
    width: 100%;
    height: 300px;
    padding: 10px;
    border: solid;
  `;

  return (
    <Link to={"/"}>
      <Wrapper>
        <Title>欢迎栏</Title>
      </Wrapper>
    </Link>
  );
};

export default WelcomeWrapper;
