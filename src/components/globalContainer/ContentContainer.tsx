import styled from "styled-components";

const ContentContainer: React.FC = () => {
  const Title = styled.div`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    line-height: 200px;
  `;
  const Wrapper = styled.div`
    background: yellow;
    height: 200px;
    width: 100%;
  `;

  return (
    <Wrapper>
      <Title>内容栏</Title>
    </Wrapper>
  );
};

export default ContentContainer;
