import useInput from "hooks/useInput";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __loginUser } from "redux/modules/login";
import styled from "styled-components";
const StLoginBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 3px solid greenyellow;
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
  background-color: greenyellow;
  border: greenyellow;
  border-radius: 15px;
  padding: 5px 8px 5px 8px;
  cursor: pointer;
  margin-top: 50px;
`;
const StH1 = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 80px;
`;
const InputStyle = styled.input`
  height: 25px;
  border: 2px solid greenyellow;
  border-radius: 10px;
  padding-left: 10px;
`;
const StLink = styled.p`
  color: greenyellow;
  font-size: 10px;
  cursor: pointer;
`;
function Login() {
  const [id, onChangeIdHandler] = useInput();
  const [password, onChangePasswordHandler] = useInput();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginHandler = function (event) {
    event.preventDefault();

    dispatch(
      __loginUser({
        id,
        password,
      }),
    );
    navigate(`/Login`);
  };

  return (
    <StContainer>
      <StLoginBox>
        <StH1>로그인</StH1>
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
        <StButton onClick={loginHandler}> 로그인하기</StButton>
        <StLink
          onClick={() => {
            navigate(`/join`);
          }}
        >
          회원가입
        </StLink>
      </StLoginBox>
    </StContainer>
  );
}

export default Login;
