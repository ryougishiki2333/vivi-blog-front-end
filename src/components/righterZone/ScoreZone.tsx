import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";

const ScoreZone: React.FC = () => {
  const Title = styled.div`
    ${zoneStyleTitle}
  `;
  const Wrapper = styled.div`
    ${zoneStyleWrapper}
  `;

  return (
    <Wrapper>
      <Title>打分显示组件</Title>
    </Wrapper>
  );
};

export default ScoreZone;
