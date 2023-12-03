import { useDispatch, useSelector } from "react-redux";
import { __isLogin } from "redux/modules/authSlice";
import Router from "./shared/Router";
function App() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => {
    return state.login;
  });

  if (user.length === 0) {
    dispatch(__isLogin(false));
  }

  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    dispatch(__isLogin(true));
  }
  return <Router />;
}

export default App;
