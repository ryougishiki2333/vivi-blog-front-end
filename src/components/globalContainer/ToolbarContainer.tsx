import styled from "styled-components";

const ToolbarContainer: React.FC = () => {
  const Title = styled.div`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    line-height: 200px;
  `;
  const Wrapper = styled.div`
    background: green;
    height: 200px;
    width: 100%;
  `;

  return (
    <Wrapper>
      <Title>工具栏</Title>
    </Wrapper>
  );
};

export default ToolbarContainer;
