import React from "react";
import Letters from "components/Letters";
import styled from "styled-components";

const LetterBoxStyle = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 250px;
`;
function LetterBox() {
  return (
    <LetterBoxStyle>
      <Letters />
    </LetterBoxStyle>
  );
}

export default React.memo(LetterBox);
