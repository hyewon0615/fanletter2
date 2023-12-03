import Detail from "pages/Detail";
import Home from "pages/Home";
import Join from "pages/Join";
import MyProfile from "pages/MyProfile";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { __userData } from "redux/modules/login";
import NavLayout from "./NavLayout";
function Router() {
  const { islogin } = useSelector((state) => {
    return state.authSlice;
  });
  const { isloading, error, user } = useSelector((state) => {
    return state.login;
  });
  useEffect(() => {
    dispatch(__userData());
  }, [user]);

  console.log(user);
  const dispatch = useDispatch();

  if (isloading) {
    <div>유저데이터 불러오는 중</div>;
  }
  if (error) {
    <div>{error.message}</div>;
  }

  return (
    <BrowserRouter>
      {islogin ? (
        <Routes>
          <Route path="/" element={<NavLayout />}>
            <Route path="/home" element={<Home user={user} />} />
            <Route path="/detail/:id" element={<Detail user={user} />} />
            <Route path="/myProfile" element={<MyProfile user={user} />} />
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/join" element={<Join />} />
          <Route path="*" element={<Navigate replace to="/join" />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default Router;
