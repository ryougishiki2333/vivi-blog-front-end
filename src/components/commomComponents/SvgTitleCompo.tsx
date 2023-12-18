import styled from "styled-components";
import { ITitle } from "../../types/reactType";

const Wrapper = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
`;

const Text = styled.div`
  margin-left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-warp: wrap;
`;

const SvgTitleCompo: React.FC<ITitle> = (props) => {
  return (
    <Wrapper style={{ fontSize: (props.size ? props.size : 1) + "em" }}>
      {props.icon ? props.icon : <></>}
      <Text>{props.text}</Text>
    </Wrapper>
  );
};

export default SvgTitleCompo;
