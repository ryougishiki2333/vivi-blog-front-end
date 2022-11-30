import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";

const ManyTagZone: React.FC = () => {
  const Title = styled.div`
    ${zoneStyleTitle}
  `;
  const Wrapper = styled.div`
    ${zoneStyleWrapper}
    height: 600px;
  `;

  return (
    <Wrapper>
      <Title>标签显示组件</Title>
    </Wrapper>
  );
};

export default ManyTagZone;
