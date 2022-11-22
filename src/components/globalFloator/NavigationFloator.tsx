import styled from "styled-components";

const NavigationFloator: React.FC = () => {
  const Title = styled.div`
    font-size: 1.5em;
    text-align: center;
    line-height: 40px;
  `;
  const Wrapper = styled.div`
    background: white;
    height: 40px;
    width: 100%;
    position: sticky;
    top: 0px;
  `;

  return (
    <Wrapper>
      <Title>导航栏</Title>
    </Wrapper>
  );
};

export default NavigationFloator;
