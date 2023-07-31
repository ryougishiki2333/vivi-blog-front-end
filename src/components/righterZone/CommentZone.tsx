import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";
import SvgTitleCompo from "../commomComponents/SvgTitleCompo";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import AvatarCompo from "../commomComponents/AvatarCompo";
import img from "../../assets/img/SharedScreenshot.jpg";
import ViviButtonCompo from "../commomComponents/ViviButtonCompo";
import { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

const Title = styled.div`
  ${zoneStyleTitle}
`;
const Wrapper = styled.div`
  ${zoneStyleWrapper}
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InfoTopWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const MarginLeftFive = styled.div`
  margin-left: 10px;
`;

type ICommentUnit = {
  displayName: string;
  email: string;
  img: string;
  replyUserId: string;
  content: string;
  timestamp: number;
};

const CommentUnit: React.FC<ICommentUnit> = (props) => {
  const [replyModalOpen, setReplyModalOpen] = useState(false);
  const [replyToSomeOne, setReplyToSomeOne] = useState("");

  const handleReply = (displayName: string) => {
    displayName && setReplyToSomeOne(`reply to ${displayName}`);
    setReplyModalOpen(!replyModalOpen);
  };
  return (
    <>
      <InfoTopWrapper>
        <AvatarCompo
          text={"CS"}
          img={props.img ? props.img : img}
          sx={{}}
          type={0}
        />
        <MarginLeftFive> {props.displayName} </MarginLeftFive>
        <MarginLeftFive>{props.email ? props.email : ""}</MarginLeftFive>
      </InfoTopWrapper>
      <InfoTopWrapper>
        {props.replyUserId ? "Reply to 由replyUserId索引的用户名" : ""}{" "}
        {props.content}
      </InfoTopWrapper>
      <InfoTopWrapper>
        <div>{props.timestamp}</div>
        <ViviButtonCompo
          text="回复"
          color="#000000"
          onClick={() => {
            handleReply(props.displayName);
          }}
        />
      </InfoTopWrapper>

      <Dialog open={replyModalOpen} onClose={handleReply}>
        <DialogContent
          sx={{
            "& > :not(style)": { width: "60ch" },
          }}
        >
          <TextField
            value={replyToSomeOne}
            onChange={(event) => {
              setReplyToSomeOne(event.target.value);
            }}
            autoFocus
            multiline={true}
            minRows={"1"}
            id="reply"
            label="reply"
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <ViviButtonCompo text="发布" color="#000000" onClick={handleReply} />
        </DialogActions>
      </Dialog>
    </>
  );
};

const CommentZone: React.FC = () => {
  const commentItem = useAppSelector((state) => state.comment.value);
  let count = commentItem.length;
  commentItem.forEach((item) => {
    item.children && (count = count + item.children.length);
  });

  const commentPlainData = [] as Array<ICommentUnit>;

  commentItem.forEach((item) => {
    commentPlainData.push({
      displayName: item.displayName,
      email: item.userId,
      img: "",
      replyUserId: "",
      content: item.content,
      timestamp: item.timestamp,
    } as ICommentUnit);
    if (item.children) {
      item.children.forEach((itemChildren) => {
        commentPlainData.push({
          displayName: itemChildren.displayName,
          email: itemChildren.userId,
          img: "",
          replyUserId: itemChildren.replyUserId ? itemChildren.replyUserId : "",
          content: itemChildren.content,
          timestamp: itemChildren.timestamp,
        } as ICommentUnit);
      });
    }
  });

  const renderComment = commentPlainData.map((item) => {
    return (
      <CommentUnit
        content={item.content}
        timestamp={item.timestamp}
        displayName={item.displayName}
        email={item.email}
        img={item.img}
        replyUserId={item.replyUserId}
      ></CommentUnit>
    );
  });

  return (
    <Wrapper>
      <FlexWrapper>
        <SvgTitleCompo text="Reply" />
        {count} comments
      </FlexWrapper>
      {renderComment}
    </Wrapper>
  );
};

export default CommentZone;
