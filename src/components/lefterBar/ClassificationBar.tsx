import styled from "styled-components";

const WelcomeContainer: React.FC = () => {
  const Title = styled.div`
    font-size: 1.5em;
    text-align: center;
    line-height: 150px;
  `;
  const Wrapper = styled.div`
    background: papayawhip;
    height: 150px;
    width: 70%;
    margin: 10px;
  `;

  return (
    <Wrapper>
      <Title>分类信息</Title>
    </Wrapper>
  );
};

export default WelcomeContainer;
