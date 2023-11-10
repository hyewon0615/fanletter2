import React from 'react'
import "./reset.css"
const headerStyle = {
  backgroundColor: "pink",
  height: "250px",
  display: "flex",
  flexDirection: "column",
  justifyContent:"center",
  alignItems: "center",
  gap: "20px",
  fontSize: "40px",
  fontWeight: "800",
}

const buttonBoxStyle = {
  border: "1px solid yellow",
  backgroundColor: "yellow",
  width: "500px",
  display: "flex",
  justifyContent: "center"
}
const buttonStyle = {
  padding: "5px 10px 5px 10px",
  margin: "10px"

}
const formStyle = {
  backgroundColor: "skyblue",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  padding: "10px",
}
const imgStyle={
  width:"30px",
  height:"30px",
  borderRadius:"50%"

}
const fanLetterStyle={
  display: "flex",
  flexDirection: "row",
  border :"2px solid gray",
  width:"300px",
  gap:"5px",
  padding:"10px"
}

function App() {
  return (
    <div>
      <header style={headerStyle}>
        <h1>누구를 고를 수 없어 팬명록</h1>


        <div style={buttonBoxStyle}>

          <button style={buttonStyle}>아이돌</button>
          <button style={buttonStyle}>솔로가수</button>
          <button style={buttonStyle}>배우</button>
          <button style={buttonStyle}>뮤지컬배우</button>
        </div>
      </header>
      <form style={formStyle}>

        <div>닉네임 : <input /></div>
        <div>내용 : <input /></div>
        <div>
          <label for="entertainer">누구에게 보낼 실 건가요? </label>
          <select id='entertainer' required>
            <option value="아이돌">아이돌</option>
            <option value="솔로가수">솔로가수</option>
            <option value="배우">배우</option>
            <option value="뮤지컬배우">뮤지컬배우</option>

          </select>
        </div>
        <button>등록</button>
      </form>
      <div style={fanLetterStyle}>
        <div>
          <img style={imgStyle} src='https://kukka-2-media-123.s3.amazonaws.com/media/contents/event_template/9e4701fd-8d4b-41e5-bbbe-fee0a2647391.jpg'></img>
        </div>
        <div>
          <p>닉네임 들어감</p>
          <p>버튼 누르면..?날짜 getdate()할 것임</p>
          <p>주접이 들어감</p>
        </div>
      </div>


    </div>
  )
}

export default App