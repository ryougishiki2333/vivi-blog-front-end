import { Link } from "react-router-dom";
import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "../righterZone/zoneStyle";
import SvgTitleCompo from "../commomComponents/SvgTitleCompo";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ViviButtonCompo from "../commomComponents/ViviButtonCompo";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { RootState } from "src/store/store";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { userLogin, userRegister } from "../../api/user";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Title = styled.div`
  ${zoneStyleTitle}
`;
const Wrapper = styled.div`
  ${zoneStyleWrapper}
`;
const Input = styled.div``;

const ButtonBox = styled.div`
  display: flex;
  justify-content: right;
`;

const SignInZone: React.FC<any> = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();

  const buttonLogin = async () => {
    const loginResult = await userLogin(username, password);
    console.log(loginResult);
    localStorage.setItem("token", loginResult.data.token);
  };

  return (
    <Wrapper>
      <SvgTitleCompo text="Sign In" />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Input>
          <TextField
            required
            id="Username/Email"
            label="Username/Email"
            variant="standard"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </Input>
        <Input>
          <TextField
            required
            id="password"
            label="Password"
            type="password"
            variant="standard"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </Input>
      </Box>
      <ButtonBox>
        <ViviButtonCompo
          text="登录"
          color="#000000"
          onClick={() => {
            if (username && password) {
              buttonLogin();
              // props.handleClickOpen();
            }
          }}
        />
      </ButtonBox>
    </Wrapper>
  );
};

const SignUpZone: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Wrapper>
      <SvgTitleCompo text="Sign Up" />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Input>
          <TextField
            required
            id="Username"
            label="Username"
            variant="standard"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </Input>
        <Input>
          <TextField
            required
            id="Password"
            label="Password"
            type="password"
            variant="standard"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </Input>
        <Input>
          <TextField
            required
            id="Email"
            label="Email"
            variant="standard"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </Input>
      </Box>
      <ButtonBox>
        <ViviButtonCompo text="注册" color="#000000" onClick={() => {}} />
      </ButtonBox>
    </Wrapper>
  );
};

const AlertDialogSlide: React.FC<any> = (props) => {
  return (
    <Dialog
      open={props.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => props.handleClose("/main/mainPage")}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"是否返回首页"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          倒计时结束将前往博客首页页面。
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.handleClose("/main/mainPage")}>
          跳转主页（5）
        </Button>
        <Button onClick={() => props.handleClose("/visitor/inner")}>
          个人信息
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const MainPageDetail: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (to: string) => {
    setOpen(false);
    navigate(to);
  };

  return (
    <>
      <SignInZone handleClickOpen={handleClickOpen}></SignInZone>
      <SignUpZone></SignUpZone>
      <AlertDialogSlide
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      ></AlertDialogSlide>
    </>
  );
};

export default MainPageDetail;
