import styled from "styled-components";

const ToolbarContainer: React.FC = () => {
  const Title = styled.div`
    font-size: 1.5em;
    text-align: center;
    line-height: 200px;
  `;
  const Wrapper = styled.div`
    background: #f9b3e4;
    height: 200px;
    width: 100%;
  `;

  return <Wrapper></Wrapper>;
};

export default ToolbarContainer;
