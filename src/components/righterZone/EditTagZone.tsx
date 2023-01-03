import * as React from "react";
import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";
import SvgTitleCompo from "../commomComponents/SvgTitleCompo";
import ManageLeftButtonCompo from "../commomComponents/ViviButtonCompo";
import Switch from "@mui/material/Switch";
import { useAppSelector } from "../../store/hooks";
import { useAppDispatch } from "../../store/hooks";
import { changeTagCheck } from "../../store/tagReducer";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

const Wrapper = styled.div`
  ${zoneStyleWrapper}
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: right;
`;

const TagBox = styled.div`
  display: flex;
`;

const EditTagZone: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // dispatch(changeTagCheck(event.target.name));
  };

  const tagItem = useAppSelector((state) => state.tag.value);
  const tagItemRender = tagItem.map((tag) => (
    <TagBox key={tag.name}>
      <Switch checked={tag.check} onChange={handleChange} name={tag.name} />
      <div>{tag.name}</div>
    </TagBox>
  ));

  return (
    <>
      <Wrapper>
        <SvgTitleCompo text="Tag" />
        <TagBox>{tagItemRender}</TagBox>
        <ButtonBox>
          <ManageLeftButtonCompo
            onClick={handleClickOpen}
            text="编辑"
            color="#000000"
          />
        </ButtonBox>
      </Wrapper>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>修改Tag</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={handleClose}>提交</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditTagZone;
