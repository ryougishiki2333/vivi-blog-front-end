import Button from "@mui/material/Button";
import { IViviButton } from "../../types/reactType";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

const ViviButtonCompo: React.FC<IViviButton> = (props) => {
  const TextButton = styled(Button)({
    color: props.color ? props.color : "#ffffff",
    backgroundColor: props.backgroundColor ? props.backgroundColor : "",
    // borderRadius: 25,
    textTransform: "none",
    fontSize: props.fontSize ? props.fontSize : 16,
  });
  const navigate = useNavigate();

  const handleOnClick = () => {
    props.onClick && props.onClick();
    if (props.to) {
      props.state
        ? navigate(props.to, { state: props.state })
        : navigate(props.to);
    }
  };

  return (
    <TextButton variant="text" onClick={handleOnClick}>
      {props.text ? props.text : "暂时为空"}
    </TextButton>
  );
};

export default ViviButtonCompo;
