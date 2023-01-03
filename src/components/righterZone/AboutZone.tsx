import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";

const Title = styled.div`
  ${zoneStyleTitle}
`;
const Wrapper = styled.div`
  ${zoneStyleWrapper}
`;

const AboutZone: React.FC = () => {
  return (
    <Wrapper>
      <Title>捐赠列表显示组件</Title>
    </Wrapper>
  );
};

export default AboutZone;
