import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";
import PreviewArticleCompo from "../commomComponents/PreviewArticleCompo";
import FilterArticleCompo from "../commomComponents/FilterArticleCompo";
import SvgTitleCompo from "../commomComponents/SvgTitleCompo";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import UpdateIcon from "@mui/icons-material/Update";

const Wrapper = styled.div`
  ${zoneStyleWrapper}
`;

const MarginLeftWrapper = styled.div`
  margin-left: 30px;
  margin-right: 30px;
`;

const OverviewZone: React.FC = () => {
  return (
    <>
      {/* <Wrapper>
        <SvgTitleCompo icon={<FiberNewIcon />} text="Preview" />
        <MarginLeftWrapper>
          <PreviewArticleCompo />
        </MarginLeftWrapper>
      </Wrapper> */}
      <Wrapper>
        <SvgTitleCompo icon={<FiberNewIcon />} text="Newest" />
        <MarginLeftWrapper>
          <FilterArticleCompo />
        </MarginLeftWrapper>
      </Wrapper>
    </>
  );
};

export default OverviewZone;
