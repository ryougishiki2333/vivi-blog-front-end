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

const SignInZone: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();

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
            username &&
              password &&
              dispatch({
                type: "user/logIn",
                payload: {
                  token: "23333",
                  userId: username,
                  id: "233333",
                  type: 1,
                  avatar: "",
                },
              });
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

const MainPageDetail: React.FC = () => {
  return (
    <>
      <SignInZone></SignInZone>
      <SignUpZone></SignUpZone>
    </>
  );
};

export default MainPageDetail;
