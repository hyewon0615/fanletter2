import React from "react";
import styled from "styled-components";

const FooterStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  font-size: 20px;
  margin-top: 20px;
  background-color: #e0ffbd;
`;

function Footer() {
  return <FooterStyle>덕질은 재밌지만 돈 많이 들어.. </FooterStyle>;
}

export default React.memo(Footer);
