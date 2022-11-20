import styled from "styled-components";

const NavigationFloator: React.FC = () => {
  const Title = styled.div`
    font-size: 1.5em;
    text-align: center;
  `;
  const Wrapper = styled.div`
    background: white;
    height: 40px;
    width: 100%;
    position: absolute;
  `;

  return (
    <Wrapper>
      <Title>导航栏</Title>
    </Wrapper>
  );
};

export default NavigationFloator;
