import Button from "@mui/material/Button";
import { INavButton } from "../../types/reactType";
import { useNavigate } from "react-router-dom";

const TransparentTextButtonCompo: React.FC<INavButton> = (props) => {
  const navigate = useNavigate();

  return (
    <Button variant="text" onClick={() => navigate(props.to)}>
      {props.text ? props.text : "暂时为空"}
    </Button>
  );
};

export default TransparentTextButtonCompo;
