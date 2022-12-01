import styled from "styled-components";
import { Link } from "react-router-dom";

const PreviewArticleCompo: React.FC = () => {
  const Title = styled.div`
    font-size: 1.5em;
    text-align: center;
  `;
  const Wrapper = styled.div`
    background: #d6aefb;
    height: 500px;
    width: 70%;
    margin: 20px;
    display: inline-block;
  `;

  return (
    <Link to={"/main/articlePage"}>
      <Wrapper>
        <Title>预览组件</Title>
      </Wrapper>
    </Link>
  );
};

export default PreviewArticleCompo;
