import styled from "styled-components";
import TransparentTextButtonCompo from "../commomComponents/TransparentTextButtonCompo";
import Stack from "@mui/material/Stack";
import AvatarCompo from "../commomComponents/AvatarCompo";
import img from "../../assets/img/img.jpg";

const Wrapper = styled.div`
  background: #fa9ab1;
  height: 40px;
  width: 100%;
  padding: 20 0 20 0;
`;

const InviteSignUpFloator: React.FC = () => {
  return (
    <Wrapper>
      <Stack direction="row" spacing={2}>
        <TransparentTextButtonCompo to={"/main/mainPage"} text={"Vivi"} />
        <TransparentTextButtonCompo to={"/article"} text={"随机"} />
        <TransparentTextButtonCompo to={"/main/filterPage"} text={"目录"} />
        <TransparentTextButtonCompo to={"/main/aboutPage"} text={"打赏"} />
        <AvatarCompo text={"CS"} sx={undefined} img={img} />
      </Stack>
    </Wrapper>
  );
};

export default InviteSignUpFloator;
