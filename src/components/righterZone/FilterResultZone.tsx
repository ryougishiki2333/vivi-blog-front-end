import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";
import PictureTitleArticleCompo from "../commomComponents/PictureTitleArticleCompo";

const Title = styled.div`
  ${zoneStyleTitle}
`;
const Wrapper = styled.div`
  ${zoneStyleWrapper}
`;
const FilterResultZone: React.FC = () => {
  return (
    <Wrapper>
      <PictureTitleArticleCompo />
      <PictureTitleArticleCompo />
      <PictureTitleArticleCompo />
    </Wrapper>
  );
};

export default FilterResultZone;
