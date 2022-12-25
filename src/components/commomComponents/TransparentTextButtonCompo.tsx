import Button from "@mui/material/Button";
import { IViviButton } from "../../types/reactType";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

const TransparentTextButtonCompo: React.FC<IViviButton> = (props) => {
  const TextButton = styled(Button)({
    color: props.color ? props.color : "#ffffff",
    backgroundColor: props.backgroundColor ? props.backgroundColor : "",
    borderRadius: 25,
    textTransform: "none",
    fontSize: props.fontSize ? props.fontSize : 16,
  });
  const navigate = useNavigate();

  return (
    <TextButton variant="text" onClick={() => props.to && navigate(props.to)}>
      {props.text ? props.text : "暂时为空"}
    </TextButton>
  );
};

export default TransparentTextButtonCompo;
