import Button from "@mui/material/Button";
import { INavButton } from "../../types/reactType";
import { useNavigate } from "react-router-dom";

const TransparentTextButton: React.FC<INavButton> = (props) => {
  const linkToPage = (to: string) => {
    const navigate = useNavigate();
    to ? navigate(to) : console.log(to);
  };
  return (
    <Button variant="text" onClick={() => linkToPage(props.to)}>
      {props.text ? props.text : "暂时为空"}
    </Button>
  );
};

export default TransparentTextButton;
