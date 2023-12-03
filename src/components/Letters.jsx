import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __getLetters } from "redux/modules/fanletter";
import styled from "styled-components";

const LetterImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
const LetterStyle = styled.li`
  display: flex;
  flex-direction: ${(props) => props.direction};
  border: 3px solid var(--maincolor);
  width: 420px;
  gap: 10px;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const ContentStyle = styled.p`
  height: 30px;
  width: 350px;
  background-color: var(--subcolor);
  line-height: 30px;
  padding-left: 8px;
  border-radius: 10px;
  font-size: 12px;
`;
const TimeStyle = styled.p`
  font-size: 10px;
  text-align: right;
  color: #626262;
`;

function Letters() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, error, letters } = useSelector((state) => {
    return state.fanletter;
  });

  useEffect(() => {
    dispatch(__getLetters());
  }, []);

  const writeToselect = useSelector((state) => {
    return state.filteredLetter.select;
  });

  const filteredLetter = letters.filter((L) => {
    if (writeToselect == "전체") {
      return letters;
    } else {
      return writeToselect === L.writedTo;
    }
  });

  //존재 의미가 무엇..?
  // if (isLoading) {
  //   return console.log("로딩중");
  // }
  // if (error) {
  //   return <div>{error.message}</div>;
  // }

  return (
    <>
      {filteredLetter.length === 0 ? (
        <LetterStyle direction="column">
          <span>🙅‍♀️</span>
          편지가 없습니다! 첫 편지를 작성해주세요!
        </LetterStyle>
      ) : (
        filteredLetter.map((letter) => (
          <LetterStyle
            direction="row"
            key={letter.id}
            onClick={() => {
              navigate(`/detail/${letter.id}`);
            }}
          >
            <div>
              <LetterImg src={letter.avatar} alt=""></LetterImg>
            </div>
            <div>
              <p>{letter.nickname}</p>
              <TimeStyle>{letter.createdAt}</TimeStyle>
              {letter.content.length < 23 ? (
                <ContentStyle>{letter.content}</ContentStyle>
              ) : (
                <ContentStyle>
                  {letter.content.slice(0, 23)}
                  ...
                </ContentStyle>
              )}
            </div>
          </LetterStyle>
        ))
      )}
    </>
  );
}

export default React.memo(Letters);
