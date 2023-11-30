import Detail from "pages/Detail";
import Home from "pages/Home";
import Login from "pages/Login";
import MyProfile from "pages/MyProfile";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
