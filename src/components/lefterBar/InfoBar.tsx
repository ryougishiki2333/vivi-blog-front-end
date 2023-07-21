import { Link } from "react-router-dom";
import styled from "styled-components";
import { barStyleTitle, barStyleWrapper } from "./barStyle";
import AvatarCompo from "../commomComponents/AvatarCompo";
import img from "../../assets/img/img.jpg";
import SvgTitleCompo from "../commomComponents/SvgTitleCompo";
import { useAppSelector } from "../../store/hooks";

const Title = styled.div`
  font-size: 1em;
  text-align: left;
`;

const Text = styled.div`
  font-size: 0.5em;
  text-align: left;
`;
const Wrapper = styled.div`
  ${barStyleWrapper}
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const JustBox = styled.div``;

const InfoBar: React.FC = () => {
  const user = useAppSelector((state) => {
    return state.user.value;
  });
  return (
    <Wrapper>
      <SvgTitleCompo text="Vivi" />
      <FlexBox>
        <AvatarCompo text={"CS"} sx={undefined} img={img} type={user.type} />
        <JustBox>
          <Title>miaomiaomiao</Title>
          <Text>All work and no play make vivi a dull girl</Text>
        </JustBox>
      </FlexBox>
      <FlexBox>
        <Title>其它平台联系方式</Title>
      </FlexBox>
    </Wrapper>
  );
};

export default InfoBar;
