import styled from "styled-components";
import { Link } from "react-router-dom";

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

const Welcome: React.FC = () => {
  return (
    <Link to={"/"}>
      <Wrapper>
        <Title>欢迎栏</Title>
      </Wrapper>
    </Link>
  );
};

export default Welcome;
