import ArticleZone from "../righterZone/ArticleZone";
import ReplyZone from "../righterZone/ReplyZone";
import CommentZone from "../righterZone/CommentZone";
import { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ViviButtonCompo from "../commomComponents/ViviButtonCompo";

const ArticlePageDetail: React.FC = () => {
  const [replyBeforeModalOpen, setReplyBeforeModalOpen] = useState(false);
  // const user = useAppSelector((state) => {
  //   return state.user.value;
  // });
  const handleNoTokenSubmit = () => {
    setReplyBeforeModalOpen(true);
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
        <DialogTitle>{"注册登录"}</DialogTitle>
        <DialogContent
          sx={{
            "& > :not(style)": { width: "60ch" },
          }}
        ></DialogContent>
        <DialogActions>
          <ViviButtonCompo
            text="Submit"
            color="#000000"
            onClick={() => {
              setReplyBeforeModalOpen(false);
            }}
          />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ArticlePageDetail;
