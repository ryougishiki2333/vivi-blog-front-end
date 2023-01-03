import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";

const Title = styled.div`
  ${zoneStyleTitle}
`;
const Wrapper = styled.div`
  ${zoneStyleWrapper}
`;

const DataSumZone: React.FC = () => {
  return (
    <Wrapper>
      <Title>数据汇总</Title>
    </Wrapper>
  );
};

export default DataSumZone;
