import styled from "styled-components";

const WelcomeContainer: React.FC = () => {
  const Title = styled.div`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    line-height: 200px;
  `;
  const Wrapper = styled.div`
    background: papayawhip;
    height: 200px;
    width: 100%;
  `;

  return (
    <Wrapper>
      <Title>欢迎栏</Title>
    </Wrapper>
  );
};

export default WelcomeContainer;
