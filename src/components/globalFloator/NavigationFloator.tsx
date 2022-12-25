import styled from "styled-components";
import TransparentTextButtonCompo from "../commomComponents/TransparentTextButtonCompo";
import Stack from "@mui/material/Stack";
import AvatarCompo from "../commomComponents/AvatarCompo";
import img from "../../assets/img/img.jpg";

const Wrapper = styled.div`
  padding: 3px;
  height: 46px;
  width: 100%;
  position: sticky;
  top: 0px;
  background: linear-gradient(
    87deg,
    #0062be -14.19%,
    rgba(146, 86, 150, 0.979167) 24.76%,
    #9b2e51 95.87%,
    #8c062b 125.1%
  );
  display: flex;
  justify-content: space-between;
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const NavigationFloator: React.FC = () => {
  return (
    <Wrapper>
      <LeftWrapper>
        <Stack direction="row" spacing={2}>
          <TransparentTextButtonCompo
            fontSize={18}
            to={"/main/mainPage"}
            text={"Vivi的小站"}
          />
        </Stack>
      </LeftWrapper>
      <RightWrapper>
        <Stack direction="row" spacing={2}>
          <TransparentTextButtonCompo to={"/article"} text={"随机 | Random"} />
          <TransparentTextButtonCompo
            to={"/main/filterPage"}
            text={"目录 | Category"}
          />
          <TransparentTextButtonCompo
            to={"/main/aboutPage"}
            text={"打赏 | Support"}
          />
          <AvatarCompo text={"CS"} sx={undefined} img={img} />
        </Stack>
      </RightWrapper>
    </Wrapper>
  );
};

export default NavigationFloator;
