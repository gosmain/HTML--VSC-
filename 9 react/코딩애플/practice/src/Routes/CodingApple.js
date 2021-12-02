import { useState } from "react";
import styles from "./CodingApple.module.css"; // module.css(독립적으로 관리)
import "./App.css"
import { Link } from "react-router-dom";

function CodingApple() {
    // React쓰는 가장 큰이유: 중괄호 이용한 데이터 바인딩 쉬움
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬독학",
  ]);
  let [따봉, 따봉변경] = useState(0); // 리엑트에선 일반 변수말고 state가 더 좋음
  // state 변수는 새로고침 없이도 페이지의 변경사항을 재 랜더링해줌 (웹 앱 만드는데 좋음) = 랜더링 필요없는건 그냥 변수선언 ok

  function ChangeTitle() {
    let newArray = [...글제목];
    newArray[0] === "남자 코트 추천"
      ? (newArray[0] = "여자 코트 추천")
      : (newArray[0] = "남자 코트 추천");
    글제목변경(newArray);
  }
  function IncreaseLikes() {
    따봉변경((current) => current + 1);
  }
  function Component() {
    // 컴포넌트
    return (
      <div className="modal">
        <p>제목</p>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ChangeTitle}>버튼</button><br/>
      <button><Link to="Nomad">Nomad</Link></button><br/>
      <button><Link to="NomadCoins">NomadCoins</Link></button>
      <div className="list">
        <h3>
          {글제목[0]} <span onClick={IncreaseLikes}>❤</span> {따봉}
        </h3>
        <h3> {글제목[1]} </h3>
        <h3 className={styles.font}> {글제목[2]} </h3>
        <hr />
      </div>

      <Component />
    </div>
  );
}

export default CodingApple;