import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";

const DataSumZone: React.FC = () => {
  const Title = styled.div`
    ${zoneStyleTitle}
  `;
  const Wrapper = styled.div`
    ${zoneStyleWrapper}
  `;

  return (
    <Wrapper>
      <Title>数据汇总</Title>
    </Wrapper>
  );
};

export default DataSumZone;
