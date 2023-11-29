import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteLetter, editLetter } from "redux/modules/fanletter";

const EditTextStyle = styled.textarea`
  width: 500px;
  height: 130px;
  margin-bottom: 10px;
  border: 2px solid greenyellow;
  padding: 15px;
`;
const TextStyle = styled.p`
  width: 500px;
  height: 150px;
  margin: 10px;
`;
const ProfileStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Modalstyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #bcc9a3;
`;

const DetailStyle = styled.div`
  position: relative;
  width: 600px;
  height: 300px;
  background-color: white;
  padding: 20px;
  margin: 120px auto auto auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DetailImg = styled.img`
  margin: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const TimeStyle = styled.p`
  width: 430px;
  font-size: 10px;
  text-align: right;
  color: #626262;
`;
const DetailButton = styled.button`
  background-color: greenyellow;
  border: greenyellow;
  border-radius: 15px;
  padding: 5px 8px 5px 8px;
  margin: 10px 0px 10px 10px;
`;

function Detail() {
  const fanletter = useSelector((state) => {
    return state.fanletter;
  });

  const params = useParams();

  const foundLetter = fanletter.letters.find((letter) => {
    return letter.id === params.id;
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const removeLetterHandler = (id) => {
    if (window.confirm("정말로 지우시겠습니까?")) {
      dispatch(deleteLetter(id));
      navigate(`/`);
    } else {
      alert("취소되었습니다");
    }
  };

  const [isEdit, setIsEdit] = useState(false);
  const [editedLetter, setEditedLetter] = useState(foundLetter.content);

  const editTextHandler = (event) => {
    setEditedLetter(event.target.value);
  };

  const finishEditHandler = (id) => {
    const editcontent = fanletter.letters.map((item) => ({
      ...item,
      content: item.id === id ? editedLetter : item.content,
    }));
    if (editedLetter === foundLetter.content) {
      alert("수정된 부분이 없습니다.");
    } else {
      dispatch(editLetter(editcontent));
      setIsEdit(false);
    }
  };
  return (
    <Modalstyle>
      <DetailButton
        onClick={() => {
          navigate(`/`);
        }}
      >
        Home
      </DetailButton>

      <DetailStyle key={foundLetter.id}>
        <ProfileStyle>
          <DetailImg src={foundLetter.avatar} alt=""></DetailImg>
          <div>
            <p>{foundLetter.nickname}</p>
            <TimeStyle>{foundLetter.createdAt}</TimeStyle>
          </div>
        </ProfileStyle>

        {isEdit ? (
          <>
            <EditTextStyle value={editedLetter} onChange={editTextHandler}>
              {foundLetter.content}
            </EditTextStyle>
            <DetailButton
              onClick={() => {
                finishEditHandler(foundLetter.id);
              }}
            >
              수정완료
            </DetailButton>
          </>
        ) : (
          <>
            <TextStyle>{foundLetter.content}</TextStyle>
            <div>
              <DetailButton
                onClick={() => {
                  setIsEdit(!isEdit);
                }}
              >
                수정
              </DetailButton>
              <DetailButton onClick={() => removeLetterHandler(foundLetter.id)}>
                삭제
              </DetailButton>
            </div>
          </>
        )}
      </DetailStyle>
    </Modalstyle>
  );
}

export default Detail;
