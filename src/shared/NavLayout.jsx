// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { __isLogin } from "redux/modules/authSlice";
// import { __userData } from "redux/modules/login";
import styled from "styled-components";
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  background-color: greenyellow;
  height: 30px;
  padding-left: 10px;
  padding-right: 10px;
`;
const RightZone = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

function NavLayout() {
  const navigate = useNavigate();
  const { islogin } = useSelector((state) => {
    return state.authSlice;
  });
  const dispatch = useDispatch();
  return (
    <>
      <Nav>
        <div
          onClick={() => {
            navigate(`/home`);
          }}
        >
          Home
        </div>
        <RightZone>
          {islogin ? (
            <div
              onClick={() => {
                dispatch(__isLogin(false));
                localStorage.clear();
                navigate(`/join`);
              }}
            >
              logout
            </div>
          ) : (
            <div
              onClick={() => {
                navigate(`/join`);
              }}
            >
              Login
            </div>
          )}
          <div
            onClick={() => {
              navigate(`/myProfile`);
            }}
          >
            MyProfile
          </div>
        </RightZone>
      </Nav>
      <Outlet />
    </>
  );
}

export default NavLayout;
