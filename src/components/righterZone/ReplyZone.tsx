import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";
import SvgTitleCompo from "../commomComponents/SvgTitleCompo";
import ViviButtonCompo from "../commomComponents/ViviButtonCompo";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import AddCommentIcon from "@mui/icons-material/AddComment";

const Title = styled.div`
  ${zoneStyleTitle}
`;
const Wrapper = styled.div`
  ${zoneStyleWrapper}
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: right;
`;

const ReplyZone: React.FC = () => {
  const [reply, setReply] = useState("");
  return (
    <Wrapper>
      <SvgTitleCompo icon={<AddCommentIcon />} text="Reply" />
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "75ch" },
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
          label="reply"
          variant="outlined"
        />
      </Box>
      <ButtonBox>
        <ViviButtonCompo text="发布" color="#000000" onClick={() => {}} />
      </ButtonBox>
    </Wrapper>
  );
};

export default ReplyZone;
