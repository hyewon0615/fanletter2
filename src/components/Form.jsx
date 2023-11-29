import React, { useState } from "react";
import uuid from "react-uuid";
import defaultAvarta from "assets/defaultAvarta.png";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addLetter } from "redux/modules/fanletter";

const FormStyle = styled.form`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;
const InputStyle = styled.input`
  width: 350px;
  height: 25px;
  border: 2px solid greenyellow;
  border-radius: 10px;
  padding-left: 10px;
`;
const AddButton = styled.button`
  background-color: greenyellow;
  border: greenyellow;
  border-radius: 15px;
  padding: 5px 8px 5px 8px;
  cursor: pointer;
`;
const SelectStyle = styled.select`
  height: 25px;
  border: 2px solid greenyellow;
  border-radius: 15px;
  cursor: pointer;
`;

function Form() {
  const writedToSelectList = ["아이돌", "솔로가수", "배우"];
  const [writedTo, setWritedTo] = useState("아이돌");

  const writedToHanldler = (event) => setWritedTo(event.target.value);
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");

  const nicknameHanldler = (event) => setNickname(event.target.value);
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
    if (nickname === "" || content === "") {
      alert("닉네임과 내용은 필수입니다!");
    } else {
      dispatch(
        addLetter({
          createdAt: `${years}-${month + 1}-${day} ${hours}:${minutes}`,
          nickname: nickname,
          avatar: defaultAvarta,
          content: content,
          writedTo: writedTo,
          id: uuid(),
          isEdit: false,
        }),
      );
      setContent("");
      setNickname("");
    }
  };
  return (
    <FormStyle>
      <div>
        이름 :{" "}
        <InputStyle
          value={nickname}
          onChange={nicknameHanldler}
          placeholder="이름을 20자 이내로 작성해주세요"
          maxLength={20}
        />
      </div>
      <div>
        내용 :{" "}
        <InputStyle
          value={content}
          onChange={contentHanldler}
          placeholder="주접을 100자 이내로 입력해주세요"
          maxLength={100}
        />
      </div>
      <div>
        <label for="entertainer">누구에게 보낼 실 건가요? </label>
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
        </SelectStyle>
      </div>
      <AddButton onClick={addLetterHandler}>등록</AddButton>
    </FormStyle>
  );
}

export default React.memo(Form);
