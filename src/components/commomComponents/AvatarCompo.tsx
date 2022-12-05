import Avatar from "@mui/material/Avatar";
import { IAvatar } from "../../types/reactType";
import { useNavigate } from "react-router-dom";

const AvatarCompo: React.FC<IAvatar> = (props) => {
  const navigate = useNavigate();

  return (
    <Avatar onClick={() => navigate("/manage")}>
      {props.text ? props.text : "暂时为空"}
    </Avatar>
  );
};

export default AvatarCompo;
