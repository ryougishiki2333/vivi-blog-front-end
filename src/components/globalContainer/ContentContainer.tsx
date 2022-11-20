import styled from "styled-components";

const ContentContainer: React.FC = () => {
  const Title = styled.div`
    font-size: 1.5em;
    text-align: center;
    line-height: 200px;
  `;
  const Wrapper = styled.div`
    background: #d6aefb;
    height: 200px;
    width: 100%;
  `;

  return <Wrapper></Wrapper>;
};

export default ContentContainer;
