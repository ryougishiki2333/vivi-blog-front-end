import { Link } from "react-router-dom";
import styled from "styled-components";
import { Title, Wrapper } from "./barStyle";
import AvatarCompo from "../commomComponents/AvatarCompo";
import img from "../../assets/img/img.jpg";
import SvgTitleCompo from "../commomComponents/SvgTitleCompo";
import { useAppSelector } from "../../store/hooks";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";

const Name = styled.div`
  font-weight: 500;
  font-size: 1.57em;
  color: #4c4948;
`;

const Bio = styled.div`
  font-size: 0.7em;
  color: #4c4948;
  font-weight: 500;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
`;

const IconBox = styled.div`
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

const InfoBar: React.FC = () => {
  const user = useAppSelector((state) => {
    return state.user.value;
  });
  return (
    <Wrapper>
      {/* <SvgTitleCompo text="Vivi" /> */}
      <FlexBox>
        <AvatarCompo
          text={""}
          sx={{
            width: 100,
            height: 100,
          }}
          img={img}
          type={user.type}
        />
      </FlexBox>
      <FlexBox>
        <Name>Vivi</Name>
      </FlexBox>
      <FlexBox>
        <Bio>All work and no play make vivi a dull girl</Bio>
      </FlexBox>
      <FlexBox>
        <IconBox>
          <TwitterIcon />
        </IconBox>
        <IconBox>
          <TelegramIcon />
        </IconBox>
      </FlexBox>
    </Wrapper>
  );
};

export default InfoBar;
