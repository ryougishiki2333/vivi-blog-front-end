import { Link } from "react-router-dom";
import styled from "styled-components";
import { Wrapper } from "./barStyle";
import AvatarCompo from "../commomComponents/AvatarCompo";
import img from "../../assets/img/SharedScreenshot.jpg";
import SvgTitleCompo from "../commomComponents/SvgTitleCompo";
import { useAppSelector } from "../../store/hooks";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import { RootState } from "src/store/store";

const DataFlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const DataOutsideBox = styled.div`
  cursor: pointer;
`;

const DataName = styled.div`
  font-weight: 500;
  font-size: 1.2em;
  color: #4c4948;
  text-align: center;
`;

const DataNumber = styled.div`
  font-weight: 500;
  font-size: 1.4em;
  color: #4c4948;
  text-align: center;
`;

const DataBar: React.FC = () => {
  const selectTag = (state: RootState) => state.tag.value;
  const selectArticle = (state: RootState) => state.article.value;
  const article = useAppSelector(selectArticle);
  const tag = useAppSelector(selectTag);

  return (
    <DataFlexBox>
      <DataOutsideBox>
        <DataName>Article</DataName>
        <DataNumber>
          {article.filter((item) => item.articleState === 1).length}
        </DataNumber>
      </DataOutsideBox>
      <DataOutsideBox>
        <DataName>Tag</DataName>
        <DataNumber>{tag.length}</DataNumber>
      </DataOutsideBox>
    </DataFlexBox>
  );
};

const Name = styled.div`
  font-weight: 500;
  font-size: 1.6em;
  color: #4c4948;
`;

const Bio = styled.div`
  font-size: 0.8em;
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
      <DataBar />
      <FlexBox>
        <IconBox>
          <a href="https://twitter.com/allhellshiki">
            <TwitterIcon />
          </a>
        </IconBox>
        <IconBox>
          <a href="https://t.me/miaomiaomiao2333">
            <TelegramIcon />
          </a>
        </IconBox>
        <IconBox>
          <a href="ryougishiki23333@gmail.com">
            <EmailIcon />
          </a>
        </IconBox>
      </FlexBox>
    </Wrapper>
  );
};

export default InfoBar;
