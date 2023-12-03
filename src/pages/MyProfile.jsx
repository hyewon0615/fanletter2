import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __userData } from "redux/modules/login";
import styled from "styled-components";
import defaultAvarta from "../assets/defaultAvarta.png";
const StBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 3px solid greenyellow;
  width: 500px;
  height: 350px;
  border-radius: 20px;
  padding-top: 50px;
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
`;
const Avarta = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

function MyProfile() {
  const { isloading, error, user } = useSelector((state) => {
    return state.login;
  });
  useEffect(() => {
    dispatch(__userData());
  }, []);

  console.log(user);
  const dispatch = useDispatch();

  if (isloading) {
    <div>유저데이터 불러오는 중</div>;
  }
  if (error) {
    <div>{error.message}</div>;
  }
  const data = [user.data];
  return (
    <StContainer>
      <StBox>
        <StH1>MY PROFILE</StH1>
        {/* {data?.map((u) => {
          return (
            <>
              <Avarta src={defaultAvarta} />
              <p>{u.nickname}</p>
              <p>{u.id}</p>
            </>
          );
        })} */}
        <Avarta src={defaultAvarta} />
        <p>nickname</p>
        <p>id</p>

        <StButton> 수정하기</StButton>
      </StBox>
    </StContainer>
  );
}

export default MyProfile;
