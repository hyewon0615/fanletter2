import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __isLogin } from "redux/modules/authSlice";
import Router from "./shared/Router";
function App() {
  const dispatch = useDispatch();
  const { islogin } = useSelector((state) => {
    return state.authSlice;
  });

  const { user } = useSelector((state) => {
    return state.login;
  });

  useEffect(() => {
    if (user.length === 0) {
      dispatch(__isLogin(false));
    }
  }, [islogin]);

  const accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    if (accessToken) {
      dispatch(__isLogin(true));
    }
  }, [islogin]);

  return <Router />;
}

export default App;
