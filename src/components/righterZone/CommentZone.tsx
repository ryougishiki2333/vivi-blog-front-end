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
import ForumIcon from "@mui/icons-material/Forum";
import { ICommentUnit } from "src/types/reactType";
import moment from "moment";

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
  margin-left: 20px;
  margin-top: 5px;
`;

const Name = styled.div`
  margin-left: 10px;
  font-size: 1em;
`;

const UpdatedAt = styled.div`
  margin-left: 10px;
  color: #9b9b9b;
  font-size: 0.91em;
`;

const Email = styled.div`
  margin-left: 10px;
  color: #abaaaa;
  font-size: 0.91em;
`;

const Reply = styled.div`
  margin-left: 15px;
  margin-right: -5px;
  color: #abaaaa;
  font-size: 0.91em;
`;

const Text = styled.div`
  margin-left: 15px;
`;

const ScoreWrapper = styled.div`
  margin-right: 20px;
`;

const AllCommentWrapper = styled.div`
  margin-left: 20px;
`;

const CommentWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.07);
  border-radius: 10px;
  margin-right: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-top: 5px;
  justify-content: right;
`;

const CommentUnit: React.FC<ICommentUnit> = (props) => {
  const [replyModalOpen, setReplyModalOpen] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [replyTo, setReplyTo] = useState("");
  const user = useAppSelector((state) => {
    return state.user.value;
  });

  const handleReply = (displayName: string) => {
    setReplyText("");
    setReplyTo(displayName);
    setReplyModalOpen(!replyModalOpen);
  };
  return (
    <>
      <CommentWrapper>
        <InfoTopWrapper>
          <AvatarCompo
            text={"CS"}
            img={props.img ? props.img : img}
            sx={{}}
            type={0}
          />
          <Name>{props.username}</Name>
          <Email>{props.email ? props.email : ""}</Email>
          <UpdatedAt>
            {moment(props.updatedAt.valueOf()).format("YYYY/MM/DD hh:mm:ss")}
          </UpdatedAt>
        </InfoTopWrapper>
        <InfoTopWrapper>
          {props.replyUserId ? <Reply>Reply to Vivi</Reply> : <></>}
          <Text>{props.content}</Text>
        </InfoTopWrapper>
        <ButtonWrapper>
          <ViviButtonCompo
            text="Reply"
            color="#000000"
            onClick={() => {
              if (user.id) {
                handleReply(props.username);
              } else {
                props.handleNoTokenSubmit();
              }
            }}
          />
        </ButtonWrapper>
      </CommentWrapper>

      <Dialog
        open={replyModalOpen}
        onClose={() => {
          setReplyModalOpen(!replyModalOpen);
        }}
      >
        <DialogTitle>{"Reply to " + replyTo}</DialogTitle>
        <DialogContent
          sx={{
            "& > :not(style)": { width: "60ch" },
          }}
        >
          <TextField
            value={replyText}
            onChange={(event) => {
              setReplyText(event.target.value);
            }}
            autoFocus
            multiline={true}
            minRows={"1"}
            id="reply"
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <ViviButtonCompo
            text="Submit"
            color="#000000"
            onClick={() => {
              setReplyModalOpen(!replyModalOpen);
            }}
          />
        </DialogActions>
      </Dialog>
    </>
  );
};

const CommentZone: React.FC<{ handleNoTokenSubmit: () => void }> = (props) => {
  const commentItem = useAppSelector((state) => state.comment.value);
  let count = commentItem.length;
  // commentItem.forEach((item) => {
  //   item.children && (count = count + item.children.length);
  // });

  const commentPlainData = [] as Array<ICommentUnit>;

  commentItem.forEach((item) => {
    commentPlainData.push({
      username: item.username,
      email: item.email,
      img: "",
      replyUserId: "",
      content: item.content,
      updatedAt: item.updatedAt,
      id: item.id,
    } as ICommentUnit);
    // if (item.children) {
    //   item.children.forEach((itemChildren) => {
    //     commentPlainData.push({
    //       displayName: itemChildren.displayName,
    //       email: itemChildren.userId,
    //       img: "",
    //       replyUserId: itemChildren.replyUserId ? itemChildren.replyUserId : "",
    //       content: itemChildren.content,
    //       updatedAt: itemChildren.updatedAt,
    //       id: itemChildren.id,
    //     } as ICommentUnit);
    //   });
    // }
  });

  const renderComment = commentPlainData.map((item) => {
    return (
      <CommentUnit
        id={item.id}
        key={item.id}
        content={item.content}
        updatedAt={item.updatedAt}
        username={item.username}
        email={item.email}
        img={item.img}
        replyUserId={item.replyUserId}
        handleNoTokenSubmit={props.handleNoTokenSubmit}
      ></CommentUnit>
    );
  });

  return (
    <Wrapper>
      <FlexWrapper>
        <SvgTitleCompo icon={<ForumIcon />} text="Reply" />
        <ScoreWrapper>{count} comments</ScoreWrapper>
      </FlexWrapper>
      <AllCommentWrapper>{renderComment}</AllCommentWrapper>
    </Wrapper>
  );
};

export default CommentZone;
