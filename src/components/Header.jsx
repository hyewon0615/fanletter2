import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { writeToSelect } from "redux/modules/filteredLetter";
import styled, { css } from "styled-components";

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
    console.log(props.$select);
    console.log(props.children);
    if (props.$select === props.children) {
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
  const selectBtn = ["전체", "아이돌", "배우", "솔로가수"];
  const select = useSelector((state) => state.filteredLetter.select);

  const dispatch = useDispatch();

  const onSelect = (e) => {
    if (e.target === e.currentTarget) return;
    dispatch(writeToSelect(e.target.textContent));
  };

  return (
    <HeaderStyle>
      <h1>팬명록</h1>

      <ButtonBoxStyle onClick={onSelect}>
        {selectBtn.map((b) => {
          return <CategoryBtnStyle $select={select}>{b}</CategoryBtnStyle>;
        })}
      </ButtonBoxStyle>
    </HeaderStyle>
  );
}

export default React.memo(Header);
