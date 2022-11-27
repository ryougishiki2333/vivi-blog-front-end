import styled from "styled-components";

const ContentContainer: React.FC = () => {
  const Title = styled.div`
    font-size: 1.5em;
    text-align: center;
  `;
  const Wrapper = styled.div`
    background: #d6aefb;
    height: 200px;
    width: 70%;
    margin: 20px;
    display: inline-block;
  `;

  return (
    <Wrapper>
      <Title>文章概览</Title>
    </Wrapper>
  );
};

export default ContentContainer;
