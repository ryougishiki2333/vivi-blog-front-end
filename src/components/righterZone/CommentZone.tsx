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
import { ICommentUnit } from "src/types/dataType";
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
  const [replyToSomeOne, setReplyToSomeOne] = useState("");

  const handleReply = (displayName: string) => {
    displayName && setReplyToSomeOne(`reply to ${displayName}`);
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
          <Name>{props.displayName}</Name>
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
            text="回复"
            color="#000000"
            onClick={() => {
              handleReply(props.displayName);
            }}
          />
        </ButtonWrapper>
      </CommentWrapper>

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
      updatedAt: item.updatedAt,
    } as ICommentUnit);
    if (item.children) {
      item.children.forEach((itemChildren) => {
        commentPlainData.push({
          displayName: itemChildren.displayName,
          email: itemChildren.userId,
          img: "",
          replyUserId: itemChildren.replyUserId ? itemChildren.replyUserId : "",
          content: itemChildren.content,
          updatedAt: itemChildren.updatedAt,
        } as ICommentUnit);
      });
    }
  });

  const renderComment = commentPlainData.map((item) => {
    return (
      <CommentUnit
        content={item.content}
        updatedAt={item.updatedAt}
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
        <SvgTitleCompo icon={<ForumIcon />} text="Reply" />
        <ScoreWrapper>{count} comments</ScoreWrapper>
      </FlexWrapper>
      <AllCommentWrapper>{renderComment}</AllCommentWrapper>
    </Wrapper>
  );
};

export default CommentZone;
