import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";
import PreviewArticleCompo from "../commomComponents/PreviewArticleCompo";

const Title = styled.div`
  ${zoneStyleTitle}
`;
const Wrapper = styled.div`
  ${zoneStyleWrapper}
`;
const FilterResultZone: React.FC = () => {
  return (
    <Wrapper>
      <PreviewArticleCompo />
    </Wrapper>
  );
};

export default FilterResultZone;
