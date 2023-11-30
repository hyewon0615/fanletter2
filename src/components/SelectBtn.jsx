import { useDispatch, useSelector } from "react-redux";
import { __writeToSelect } from "redux/modules/filteredLetter";
import styled, { css } from "styled-components";
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

function SelectBtn() {
  const selectBtn = ["전체", "아이돌", "배우", "솔로가수"];
  const select = useSelector((state) => state.filteredLetter.select);

  const dispatch = useDispatch();

  const onSelect = (e) => {
    if (e.target === e.currentTarget) return;
    dispatch(__writeToSelect(e.target.textContent));
  };
  return (
    <div>
      <ButtonBoxStyle onClick={onSelect}>
        {selectBtn.map((b) => {
          return (
            <CategoryBtnStyle key={b} $select={select}>
              {b}
            </CategoryBtnStyle>
          );
        })}
      </ButtonBoxStyle>
    </div>
  );
}

export default SelectBtn;
