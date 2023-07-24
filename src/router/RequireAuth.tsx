import { useLocation, Navigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

export default function RequireAuth({ children }: { children: JSX.Element }) {
  const user = useAppSelector((state) => {
    return state.user.value;
  });
  const location = useLocation();

  if (!user.token) {
    // 重定向至login页面，但是保存用户试图访问的location，这样我们可以把登陆后的用户重定向至那个页面
    return <Navigate to="/visitor/signUp" state={{ from: location }} replace />;
  } else {
    return children;
  }
}
