import styled from "styled-components";
import { Link } from "react-router-dom";

const WelcomePage: React.FC = () => {
  const Title = styled.div`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;
  const Wrapper = styled.div`
    background: papayawhip;
    height: 100%;
    width: 100%;
    position: absolute;
  `;

  return (
    <Link to={"main/"}>
      <Wrapper>
        <Title>Vivi小站（欢迎页）</Title>
      </Wrapper>
    </Link>
  );
};

export default WelcomePage;
