import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";
import SvgTitleCompo from "../commomComponents/SvgTitleCompo";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import AvatarCompo from "../commomComponents/AvatarCompo";
import img from "../../assets/img/img.jpg";
import ViviButtonCompo from "../commomComponents/ViviButtonCompo";
import Item from "antd/es/list/Item";

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

type ICommentUnit = {
  displayName: string;
  email: string;
  img: string;
  replyUserId: string;
  content: string;
  timestamp: string;
};

const CommentUnit: React.FC<ICommentUnit> = (props) => {
  return (
    <>
      <InfoTopWrapper>
        <AvatarCompo
          text={"CS"}
          img={props.img ? props.img : img}
          sx={undefined}
          type={0}
        />
        <div>{props.displayName}</div>
        <div>{props.email ? props.email : ""}</div>
      </InfoTopWrapper>
      <InfoTopWrapper>
        {props.replyUserId ? "Reply to 由replyUserId索引的用户名" : ""}{" "}
        {props.content}
      </InfoTopWrapper>
      <InfoTopWrapper>
        <div>{props.timestamp}</div>
        <ViviButtonCompo text="回复" color="#000000" onClick={() => {}} />
      </InfoTopWrapper>
    </>
  );
};

const CommentZone: React.FC = () => {
  const commentItem = useAppSelector((state) => state.comment.value);
  let count = commentItem.length;
  commentItem.forEach((item) => {
    item.children && (count = count + item.children.length);
  });

  const commentPlainData = [];

  commentItem.forEach((item) => {
    commentPlainData.push();
    if (item.children) {
      item.children.forEach(() => {});
    }
  });

  return (
    <Wrapper>
      <FlexWrapper>
        <SvgTitleCompo text="Reply" />
        {count} comments
      </FlexWrapper>
    </Wrapper>
  );
};

export default CommentZone;
