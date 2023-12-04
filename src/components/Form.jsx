import defaultAvarta from "assets/defaultAvarta.png";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import { __addLetter } from "redux/modules/fanletter";
import { __userData } from "redux/modules/login";
import styled from "styled-components";
const FormStyle = styled.form`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 10px;
  padding: 10px;
  width: 470px;
`;
const InputStyle = styled.textarea`
  width: 407px;
  height: 50px;
  border: 2px solid var(--maincolor);
  border-radius: 10px;
  padding-left: 10px;
`;
const AddButton = styled.button`
  background-color: var(--maincolor);
  border: 1px solid var(--maincolor);
  border-radius: 15px;
  padding: 5px 8px 5px 8px;
  cursor: pointer;
  width: 100px;
  color: white;
`;
const SelectStyle = styled.select`
  padding: 5px 8px 5px 8px;
  /* height: 25px; */
  border: 2px solid var(--maincolor);
  border-radius: 15px;
  cursor: pointer;
`;
const InputArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const SelectArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Form() {
  const writedToSelectList = ["아이돌", "솔로가수", "배우"];
  const [writedTo, setWritedTo] = useState("아이돌");

  const writedToHanldler = (event) => setWritedTo(event.target.value);

  const [content, setContent] = useState("");

  const contentHanldler = (event) => setContent(event.target.value);

  const date = new Date();
  const years = date.getFullYear();
  const day = date.getDate();
  const month = date.getMonth();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const dispatch = useDispatch();

  const addLetterHandler = function (event) {
    event.preventDefault();
    if (content === "") {
      alert("내용은 필수입니다!");
    } else {
      dispatch(
        __addLetter({
          createdAt: `${years}-${month + 1}-${day} ${hours}:${minutes}`,
          nickname: user.data.nickname,
          avatar: defaultAvarta,
          content: content,
          writedTo: writedTo,
          id: uuid(),
          isEdit: false,
          userId: user.data.id,
        }),
      );
      setContent("");
    }
  };
  const { islogin } = useSelector((state) => {
    return state.authSlice;
  });

  const { user } = useSelector((state) => {
    return state.login;
  });

  useEffect(() => {
    dispatch(__userData());
  }, [islogin]);

  return (
    <FormStyle>
      <div>
        <label>이름 : </label>
        {user.length === 0 ? "유저데이터 가져오는 중" : user.data.nickname}{" "}
      </div>
      <InputArea>
        <label>내용</label>
        <InputStyle
          value={content}
          onChange={contentHanldler}
          placeholder="주접을 100자 이내로 입력해주세요"
          maxLength={100}
        />
      </InputArea>
      <SelectArea>
        <div>
          <label htmlFor="entertainer">누구에게 보낼 실 건가요? </label>
          <SelectStyle
            id="entertainer"
            value={writedTo}
            onChange={writedToHanldler}
            required
          >
            {writedToSelectList.map((writedTo) => {
              return (
                <option key={writedTo} value={writedTo}>
                  {writedTo}
                </option>
              );
            })}
          </SelectStyle>{" "}
        </div>

        <AddButton onClick={addLetterHandler}>등록</AddButton>
      </SelectArea>
    </FormStyle>
  );
}

export default React.memo(Form);
