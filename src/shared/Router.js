import Detail from "pages/Detail";
import Home from "pages/Home";
import Join from "pages/Join";
import MyProfile from "pages/MyProfile";
import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavLayout from "./NavLayout";
function Router() {
  const { islogin } = useSelector((state) => {
    return state.authSlice;
  });

  return (
    <BrowserRouter>
      {islogin ? (
        <Routes>
          <Route path="/" element={<NavLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/myProfile" element={<MyProfile />} />
            <Route path="*" element={<Navigate replace to="/home" />} />
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

export default React.memo(Router);
