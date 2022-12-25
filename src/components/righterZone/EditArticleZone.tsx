import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";
import WangEditor from "../commomComponents/WangEditorCompo";
import SvgTitleCompo from "../commomComponents/SvgTitleCompo";
import ViviButtonCompo from "../commomComponents/ViviButtonCompo";

const Wrapper = styled.div`
  ${zoneStyleWrapper}
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: right;
`;

const EditArticleZone: React.FC = () => {
  return (
    <Wrapper>
      <SvgTitleCompo text="Editing" />
      <WangEditor />
      <ButtonBox>
        <ViviButtonCompo text="保存" color="#000000" />
        <ViviButtonCompo text="删除" color="#000000" />
        <ViviButtonCompo text="发布" color="#000000" />
      </ButtonBox>
    </Wrapper>
  );
};

export default EditArticleZone;
