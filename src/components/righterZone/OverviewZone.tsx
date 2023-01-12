import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";
import PreviewArticleCompo from "../commomComponents/PreviewArticleCompo";
import FilterArticleCompo from "../commomComponents/FilterArticleCompo";
import SvgTitleCompo from "../commomComponents/SvgTitleCompo";

const Title = styled.div`
  ${zoneStyleTitle}
`;
const Wrapper = styled.div`
  ${zoneStyleWrapper}
`;

const OverviewZone: React.FC = () => {
  return (
    <>
      <Wrapper>
        <SvgTitleCompo text="Preview" />
        <PreviewArticleCompo />
      </Wrapper>
      <Wrapper>
        <SvgTitleCompo text="Newest" />
        <FilterArticleCompo />
      </Wrapper>
    </>
  );
};

export default OverviewZone;
