import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";
import WangEditor from "../commomComponents/WangEditor";

const Wrapper = styled.div`
  ${zoneStyleWrapper}
`;

const EditArticleZone: React.FC = () => {
  return (
    <Wrapper>
      <WangEditor />
    </Wrapper>
  );
};

export default EditArticleZone;
