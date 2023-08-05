import ArticleZone from "../righterZone/ArticleZone";
import ReplyZone from "../righterZone/ReplyZone";
import CommentZone from "../righterZone/CommentZone";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ViviButtonCompo from "../commomComponents/ViviButtonCompo";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { userRegister } from "../../api/user";
import { useAppSelector, useAppDispatch } from "../../store/hooks";

const Input = styled.div``;

const ArticlePageDetail: React.FC = () => {
  const [replyBeforeModalOpen, setReplyBeforeModalOpen] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useAppDispatch();

  const handleNoTokenSubmit = () => {
    setReplyBeforeModalOpen(true);
  };

  const handleSubmitInfomation = async () => {
    try {
      const loginResult = await userRegister(username, "password", email);
      dispatch({
        type: `user/logIn`,
        payload: {
          ...loginResult,
        },
      });
    } catch {}
  };

  return (
    <>
      <ArticleZone></ArticleZone>
      <CommentZone handleNoTokenSubmit={handleNoTokenSubmit}></CommentZone>
      <ReplyZone handleNoTokenSubmit={handleNoTokenSubmit}></ReplyZone>

      <Dialog
        open={replyBeforeModalOpen}
        onClose={() => {
          setReplyBeforeModalOpen(false);
        }}
      >
        <DialogTitle>{"Registration information"}</DialogTitle>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "500px", margin: "20px" },
          }}
          noValidate
          autoComplete="off"
        >
          <Input>
            <TextField
              id="Display Name"
              label="Display Name"
              variant="standard"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </Input>
          <Input>
            <TextField
              id="Email"
              label="Email"
              variant="standard"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </Input>
        </Box>

        <DialogContent
          sx={{
            "& > :not(style)": { width: "60ch" },
          }}
        ></DialogContent>
        <DialogActions>
          <ViviButtonCompo
            text="Submit information"
            color="#000000"
            onClick={() => {
              handleSubmitInfomation();
              setReplyBeforeModalOpen(false);
            }}
          />
          <ViviButtonCompo
            text="Keep anonymous"
            color="#000000"
            onClick={() => {
              handleSubmitInfomation();
              setReplyBeforeModalOpen(false);
            }}
          />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ArticlePageDetail;
