import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  __deleteLetter,
  __editLetter,
  __getLetters,
} from "redux/modules/fanletter";
import { __userData } from "redux/modules/login";
import styled from "styled-components";

const EditTextStyle = styled.textarea`
  width: 500px;
  height: 130px;
  margin-bottom: 10px;
  border: 2px solid var(--maincolor);
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
  background-color: #dcdceb;
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
  background-color: var(--maincolor);
  border: var(--maincolor);
  border-radius: 15px;
  padding: 5px 8px 5px 8px;
  margin: 10px 0px 10px 10px;
  color: white;
`;

function Detail() {
  const params = useParams();

  const { letters } = useSelector((state) => {
    return state.fanletter;
  });

  useEffect(() => {
    dispatch(__getLetters());
  }, []);

  const foundLetter = letters.find((letter) => {
    return letter.id === params.id;
  });
  const { islogin } = useSelector((state) => {
    return state.authSlice;
  });

  const { user } = useSelector((state) => {
    return state.login;
  });

  useEffect(() => {
    dispatch(__userData());
  }, [islogin]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const removeLetterHandler = (id) => {
    if (window.confirm("정말로 지우시겠습니까?")) {
      dispatch(__deleteLetter(id));
      navigate(`/home`);
    } else {
      alert("취소되었습니다");
    }
  };

  const [isEdit, setIsEdit] = useState(false);
  const [editedLetter, setEditedLetter] = useState(foundLetter.content);

  const editTextHandler = (event) => {
    setEditedLetter(event.target.value);
  };

  const finishEditHandler = () => {
    const editcontent = {
      ...foundLetter,
      content: editedLetter,
    };

    if (editedLetter === foundLetter.content) {
      alert("수정된 부분이 없습니다.");
    } else {
      dispatch(__editLetter(editcontent));
      setIsEdit(false);
    }
  };

  return (
    <Modalstyle>
      <DetailButton
        onClick={() => {
          navigate(`/home`);
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

        {user.data.id === foundLetter.userId ? (
          isEdit ? (
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
                <DetailButton
                  onClick={() => removeLetterHandler(foundLetter.id)}
                >
                  삭제
                </DetailButton>
              </div>
            </>
          )
        ) : (
          <TextStyle>{foundLetter.content}</TextStyle>
        )}
      </DetailStyle>
    </Modalstyle>
  );
}

export default Detail;
