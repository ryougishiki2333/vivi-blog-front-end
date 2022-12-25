import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";
import WangEditor from "../commomComponents/WangEditorCompo";
import SvgTitleCompo from "../commomComponents/SvgTitleCompo";

const Wrapper = styled.div`
  ${zoneStyleWrapper}
`;

const EditArticleZone: React.FC = () => {
  return (
    <Wrapper>
      <SvgTitleCompo text="Editing" />
      <WangEditor />
    </Wrapper>
  );
};

export default EditArticleZone;
