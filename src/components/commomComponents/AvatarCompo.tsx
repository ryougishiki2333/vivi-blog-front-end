import Avatar from "@mui/material/Avatar";
import { IAvatar } from "../../types/reactType";
import { useNavigate } from "react-router-dom";
import { deepOrange, deepPurple } from "@mui/material/colors";
import img from "./img.jpg";

const AvatarCompo: React.FC<IAvatar> = (props) => {
  const navigate = useNavigate();

  return (
    <Avatar
      // sx={{ bgcolor: deepOrange[500] }}
      onClick={() => navigate("/manage")}
      src={img}
    />
  );
};

export default AvatarCompo;
