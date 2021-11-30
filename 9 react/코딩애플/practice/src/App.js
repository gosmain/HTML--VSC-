import React, { useState } from "react";
import './App.css';

function App() {    // React쓰는 가장 큰이유: 중괄호 이용한 데이터 바인딩 쉬움
  let posts = "강남 고기 맛집";  // 일반 변수 선언
  let style = { color : "blue", fontSize : "30px" };
  let [글제목, 글제목변경] = useState(["남자 코트 추천", "강남 우동 맛집", "파이썬독학"]); 
  let [따봉, 따봉변경] = useState(0);  // 리엑트에선 일반 변수말고 state가 더 좋음
  // state 변수는 새로고침 없이도 페이지의 변경사항을 재 랜더링해줌 (웹 앱 만드는데 좋음)
  
  function 제목바꾸기() {
    let newArray = [...글제목];
    newArray[0] === "남자 코트 추천" ? newArray[0] = "여자 코트 추천" : newArray[0] = "남자 코트 추천";
    글제목변경( newArray );
  }
  function 좋아요증가() {
    따봉변경(따봉 +1)
  } 

  return (
    <div className="App">
      <div className="black-nav">
        <div style={style}>개발 Blog</div>
      </div>

      <button onClick={ 제목바꾸기 }>버튼</button>
      <div className="list">
        <h3> {posts} <span onClick={ 좋아요증가 }>❤</span> {따봉} </h3>
        <h3> {글제목[0]} </h3>
        <h3> {글제목[1]} </h3>
        <hr/>
      </div>

      <Modal /> 
    </div>
  );
}

function Modal() { // 컴포넌트
  return (
    <div className="modal">
        <h2>
          <p>제목</p>
          <p>날짜</p>
          <p>상세내용</p>
        </h2>
      </div>
  )
}

export default App;
