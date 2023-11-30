import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SelectBtn from "./SelectBtn";
const HeaderSt = styled.div`
  background-color: #e0ffbd;
  height: 250px;
  padding: 20px;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 70px;
`;
const H1 = styled.h1`
  font-size: 40px;
  font-weight: 800;
`;
const Nav = styled.div`
  display: flex;
  justify-content: right;
  gap: 20px;
  cursor: pointer;
`;

function Header() {
  const navigate = useNavigate();
  return (
    <HeaderSt>
      <Nav>
        <div
          onClick={() => {
            navigate(`/Login`);
          }}
        >
          Login
        </div>
        <div
          onClick={() => {
            navigate(`/Myprofile`);
          }}
        >
          MyProfile
        </div>
      </Nav>

      <Title>
        <H1>팬명록</H1>

        <SelectBtn />
      </Title>
    </HeaderSt>
  );
}

export default React.memo(Header);
