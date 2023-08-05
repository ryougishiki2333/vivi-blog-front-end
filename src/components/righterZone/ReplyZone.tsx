import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";
import SvgTitleCompo from "../commomComponents/SvgTitleCompo";
import ViviButtonCompo from "../commomComponents/ViviButtonCompo";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import AddCommentIcon from "@mui/icons-material/AddComment";
import { useAppSelector } from "../../store/hooks";

const Wrapper = styled.div`
  ${zoneStyleWrapper}
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: right;
`;

const ReplyBox = styled.div`
  width: 100%;
  margin-left: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const ReplyZone: React.FC<{ handleNoTokenSubmit: () => void }> = (props) => {
  const [reply, setReply] = useState("");
  const user = useAppSelector((state) => {
    return state.user.value;
  });

  return (
    <Wrapper>
      <SvgTitleCompo icon={<AddCommentIcon />} text="Reply" />
      <ReplyBox>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "90%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            value={reply}
            onChange={(event) => {
              setReply(event.target.value);
            }}
            multiline={true}
            minRows={"5"}
            id="reply"
            variant="outlined"
          />
        </Box>
      </ReplyBox>
      <ButtonBox>
        <ViviButtonCompo
          text="Submit"
          color="#000000"
          onClick={() => {
            if (user.id) {
            } else {
              props.handleNoTokenSubmit();
            }
          }}
        />
      </ButtonBox>
    </Wrapper>
  );
};

export default ReplyZone;
