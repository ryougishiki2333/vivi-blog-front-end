import styled from "styled-components";
import Stack from "@mui/material/Stack";
import AvatarCompo from "../commomComponents/AvatarCompo";
import img from "../../assets/img/img.jpg";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  background: #d6aefb;
  height: 60px;
  width: 100%;
  position: sticky;
  top: 0px;
  border: solid;
  line-height: 60px;
  text-align: center;
`;

const BackToHomePageFloator: React.FC = () => {
  return (
    <Link to={"/main/mainPage"}>
      <Wrapper>返回Vivi小站</Wrapper>
    </Link>
  );
};

export default BackToHomePageFloator;
