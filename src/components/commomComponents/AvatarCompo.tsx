import Avatar from "@mui/material/Avatar";
import { IAvatar } from "../../types/reactType";
import { useNavigate } from "react-router-dom";
import { deepOrange, deepPurple } from "@mui/material/colors";

const AvatarCompo: React.FC<IAvatar> = (props) => {
  const navigate = useNavigate();

  return (
    <Avatar
      sx={props.sx}
      onClick={() => {
        if (props.type === 2) {
          navigate("/manage/main");
        }
        if (props.type === 1) {
          navigate("/visitor/inner");
        }
      }}
      src={props.img ? props.img : undefined}
    >
      {props.text}
    </Avatar>
  );
};

export default AvatarCompo;
