import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";
import PictureTitleArticleCompo from "../commomComponents/PictureTitleArticleCompo";

const FilterResultZone: React.FC = () => {
  const Title = styled.div`
    ${zoneStyleTitle}
  `;
  const Wrapper = styled.div`
    ${zoneStyleWrapper}
  `;

  return (
    <Wrapper>
      <PictureTitleArticleCompo />
      <PictureTitleArticleCompo />
      <PictureTitleArticleCompo />
    </Wrapper>
  );
};

export default FilterResultZone;
