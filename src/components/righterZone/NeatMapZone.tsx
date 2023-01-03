import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";

const Title = styled.div`
  ${zoneStyleTitle}
`;
const Wrapper = styled.div`
  ${zoneStyleWrapper}
`;

const NeatMapZone: React.FC = () => {
  return (
    <Wrapper>
      <Title>热力图</Title>
    </Wrapper>
  );
};

export default NeatMapZone;
