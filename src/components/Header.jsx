import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { writeToSelect } from "redux/modules/filteredLetter";

const HeaderStyle = styled.header`
  background-color: #e0ffbd;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-size: 40px;
  font-weight: 800;
  padding-top: 100px;
`;
const ButtonBoxStyle = styled.div`
  border: 3px solid greenyellow;
  border-radius: 20px;
  width: 400px;
  display: flex;
  justify-content: center;
  background-color: white;
`;
const CategoryBtnStyle = styled.button`
  ${(props) => {
    if (props.$selectBtn === props.children) {
      return css`
        background-color: greenyellow;
      `;
    } else {
      return css`
        background-color: white;
      `;
    }
  }}

  border: 2px solid greenyellow;
  border-radius: 10px;
  padding: 5px 10px 5px 10px;
  margin: 8px;
  cursor: pointer;
`;

function Header() {
  const [selectBtn, setSelectBtn] = useState("전체");

  const dispatch = useDispatch();
  const allBtnClickColorhandler = () => {
    setSelectBtn("전체");
    dispatch(writeToSelect("아이돌 솔로가수 배우"));
  };
  const IdolBtnClickColorhandler = () => {
    setSelectBtn("아이돌");
    dispatch(writeToSelect("아이돌"));
  };
  const ActorBtnClickColorhandler = () => {
    setSelectBtn("배우");
    dispatch(writeToSelect("배우"));
  };
  const SingerBtnClickColorhandler = () => {
    setSelectBtn("솔로가수");
    dispatch(writeToSelect("솔로가수"));
  };
  return (
    <HeaderStyle>
      <h1>팬명록</h1>

      <ButtonBoxStyle>
        <CategoryBtnStyle
          $selectBtn={selectBtn}
          onClick={allBtnClickColorhandler}
        >
          전체
        </CategoryBtnStyle>
        <CategoryBtnStyle
          $selectBtn={selectBtn}
          onClick={IdolBtnClickColorhandler}
        >
          아이돌
        </CategoryBtnStyle>
        <CategoryBtnStyle
          $selectBtn={selectBtn}
          onClick={SingerBtnClickColorhandler}
        >
          솔로가수
        </CategoryBtnStyle>
        <CategoryBtnStyle
          $selectBtn={selectBtn}
          onClick={ActorBtnClickColorhandler}
        >
          배우
        </CategoryBtnStyle>
      </ButtonBoxStyle>
    </HeaderStyle>
  );
}

export default React.memo(Header);
