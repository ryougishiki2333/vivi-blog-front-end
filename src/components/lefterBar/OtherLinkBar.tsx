import styled from "styled-components";

const WelcomeContainer: React.FC = () => {
  const Title = styled.div`
    font-size: 1.5em;
    text-align: center;
    line-height: 100%;
  `;
  const Wrapper = styled.div`
    background: papayawhip;
    height: 500px;
    width: 100%;
    padding: 20px;
  `;

  return (
    <Wrapper>
      <Title>个人信息</Title>
    </Wrapper>
  );
};

export default WelcomeContainer;
