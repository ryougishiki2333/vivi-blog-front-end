import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";
import PictureTitleArticleCompo from "../commomComponents/PictureTitleArticleCompo";
import PreviewArticleCompo from "../commomComponents/PreviewArticleCompo";

const OverviewZone: React.FC = () => {
  const Title = styled.div`
    ${zoneStyleTitle}
  `;
  const Wrapper = styled.div`
    ${zoneStyleWrapper}
  `;

  return (
    <Wrapper>
      <PreviewArticleCompo />
      <PictureTitleArticleCompo />
      <PictureTitleArticleCompo />
    </Wrapper>
  );
};

export default OverviewZone;