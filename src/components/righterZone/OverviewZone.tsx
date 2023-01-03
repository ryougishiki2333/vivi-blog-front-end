import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";
import PictureTitleArticleCompo from "../commomComponents/PictureTitleArticleCompo";
import PreviewArticleCompo from "../commomComponents/PreviewArticleCompo";

const Title = styled.div`
  ${zoneStyleTitle}
`;
const Wrapper = styled.div`
  ${zoneStyleWrapper}
`;

const OverviewZone: React.FC = () => {
  return (
    <Wrapper>
      <PreviewArticleCompo />
      <PictureTitleArticleCompo />
      <PictureTitleArticleCompo />
    </Wrapper>
  );
};

export default OverviewZone;
