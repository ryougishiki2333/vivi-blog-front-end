import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";
import SvgTitleCompo from "../commomComponents/SvgTitleCompo";
import ManageLeftButtonCompo from "../commomComponents/ViviButtonCompo";

const EditTagZone: React.FC = () => {
  const Wrapper = styled.div`
    ${zoneStyleWrapper}
  `;
  const ButtonBox = styled.div`
    display: flex;
    justify-content: right;
  `;

  return (
    <Wrapper>
      <SvgTitleCompo text="Tag" />
      <ButtonBox>
        <ManageLeftButtonCompo text="编辑" color="#000000" />
      </ButtonBox>
    </Wrapper>
  );
};

export default EditTagZone;
