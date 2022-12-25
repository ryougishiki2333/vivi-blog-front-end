import Button from "@mui/material/Button";
import { INavButton } from "../../types/reactType";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

const TransparentTextButtonCompo: React.FC<INavButton> = (props) => {
  const TextButton = styled(Button)({
    color: "#ffffff",
    textTransform: "none",
    fontSize: props.fontSize ? props.fontSize : 16,
  });
  const navigate = useNavigate();

  return (
    <TextButton variant="text" onClick={() => navigate(props.to)}>
      {props.text ? props.text : "暂时为空"}
    </TextButton>
  );
};

export default TransparentTextButtonCompo;
