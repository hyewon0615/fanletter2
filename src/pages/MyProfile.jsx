import styled from "styled-components";
import defaultAvarta from "../assets/defaultAvarta.png";
const StBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 3px solid var(--maincolor);
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
  background-color: var(--maincolor);
  border: var(--maincolor);
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

function MyProfile({ user }) {
  return (
    <StContainer>
      <StBox>
        <StH1>MY PROFILE</StH1>

        <Avarta src={defaultAvarta} />
        <p>{user.data.nickname}</p>
        <p>{user.data.id}</p>

        <StButton> 수정하기</StButton>
      </StBox>
    </StContainer>
  );
}

export default MyProfile;
