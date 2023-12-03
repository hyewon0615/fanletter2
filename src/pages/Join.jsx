import useInput from "hooks/useInput";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { __addUser, __loginUser } from "redux/modules/login";
// import { useSelector } from "react-redux";
import axios from "axios";
import { __isLogin } from "redux/modules/authSlice";
import styled from "styled-components";
const StLoginBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 3px solid var(--maincolor);
  width: 300px;
  height: 500px;
  border-radius: 20px;
  padding-top: 100px;
`;
const StContainer = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StButton = styled.button`
  background-color: var(--maincolor);
  border: var(--maincolor);
  border-radius: 15px;
  padding: 5px 8px 5px 8px;
  cursor: pointer;
  margin-top: 50px;
`;
const StH1 = styled.h1`
  color: #262758;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 80px;
`;
const InputStyle = styled.input`
  height: 25px;
  border: 2px solid var(--maincolor);
  border-radius: 10px;
  padding-left: 10px;
`;
const StLink = styled.p`
  color: var(--maincolor);
  font-size: 10px;
  cursor: pointer;
`;
function Join() {
  const [join, setJoin] = useState(false);
  const [id, onChangeIdHandler] = useInput();
  const [password, onChangePasswordHandler] = useInput();
  const [nickname, onChangeNicknameHandler] = useInput();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const idLength = id.length > 3 && id.length < 10;
  const nicknameLength = password.length > 3 && password.length < 15;
  const passwordLength = nickname.length > 0 && nickname.length < 10;

  const addUserHandler = function (event) {
    event.preventDefault();

    if (idLength && nicknameLength && passwordLength) {
      const userInfo = { id, password, nickname };

      const toJoin = async () => {
        try {
          const response = await axios.post(
            "https://moneyfulpublicpolicy.co.kr/register",
            userInfo,
          );

          alert(response.data.message);
          setJoin(false);
        } catch (error) {
          alert(error.response.data.message);
        }
      };
      toJoin();
    } else {
      alert("아이디는 4~10자 비밀번호는 4~15자 닉네임은 1~10자 입력해주세요");
    }
  };
  const loginHandler = function (event) {
    event.preventDefault();

    const userInfo = { id, password };
    const toLogin = async () => {
      try {
        const response = await axios.post(
          "https://moneyfulpublicpolicy.co.kr/login?expiresIn=1m",

          userInfo,
        );

        const accessToken = response.data.accessToken;

        localStorage.setItem("accessToken", accessToken);
        alert("로그인 완료!");
        dispatch(__isLogin(true));
        navigate(`/home`);
      } catch (error) {
        alert(error.response.data.message);
      }
    };
    toLogin();
  };

  return (
    <StContainer>
      <StLoginBox>
        <StH1>{join ? "회원가입" : "로그인"}</StH1>
        <InputStyle
          value={id}
          onChange={onChangeIdHandler}
          placeholder="아이디를 입력하세요"
        />
        <InputStyle
          value={password}
          onChange={onChangePasswordHandler}
          placeholder="비밀번호를 입력하세요"
        />
        {join ? (
          <InputStyle
            value={nickname}
            onChange={onChangeNicknameHandler}
            placeholder="닉네임을 입력하세요"
          />
        ) : (
          ""
        )}
        {join ? (
          <StButton onClick={addUserHandler}> 회원가입</StButton>
        ) : (
          <StButton onClick={loginHandler}> 로그인하기</StButton>
        )}

        <StLink
          onClick={() => {
            setJoin(!join);
          }}
        >
          {join ? "로그인" : "회원가입"}
        </StLink>
      </StLoginBox>
    </StContainer>
  );
}

export default Join;
