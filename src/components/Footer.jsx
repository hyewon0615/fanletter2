import React from "react";
// import styled from 'styled-components'

//이거 왜 안되지? 엥... 우선 인라인으로 하자..
// 왜 안되는지 알려주세요ㅜ

// const footerStyle = styled.div`
//   display: flex;
//   justify-content: center;
// `

function Footer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80px",
        fontSize: "20px",
        marginTop: "20px",
        backgroundColor: "#e0ffbd",
      }}
    >
      덕질은 재밌지만 돈 많이 들어..{" "}
    </div>
  );
}

export default React.memo(Footer);
