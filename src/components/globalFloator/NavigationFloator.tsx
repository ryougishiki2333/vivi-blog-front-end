import styled from "styled-components";
import TransparentTextButtonCompo from "../commomComponents/TransparentTextButtonCompo";
import Stack from "@mui/material/Stack";

const NavigationFloator: React.FC = () => {
  const Wrapper = styled.div`
    background: #d6aefb;
    height: 40px;
    width: 100%;
    position: sticky;
    top: 0px;
    border: solid;
  `;

  return (
    <Wrapper>
      <Stack direction="row" spacing={2}>
        <TransparentTextButtonCompo to={"/main/mainPage"} text={"Vivi"} />
        <TransparentTextButtonCompo to={"/article"} text={"随机"} />
        <TransparentTextButtonCompo to={"/main/filterPage"} text={"目录"} />
        <TransparentTextButtonCompo to={"/main/aboutPage"} text={"打赏"} />
      </Stack>
    </Wrapper>
  );
};

export default NavigationFloator;
