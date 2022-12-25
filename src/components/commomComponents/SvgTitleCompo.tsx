import CheckIcon from "@mui/icons-material/Check";
import styled from "styled-components";
import { ITitle } from "../../types/reactType";

const Wrapper = styled.div`
  margin: 5px;
  display: flex;
`;

const SvgTitleCompo: React.FC<ITitle> = (props) => {
  return (
    <Wrapper>
      <CheckIcon />
      {props.text}
    </Wrapper>
  );
};

export default SvgTitleCompo;
