/* 모듈 = 하나의 파일 
브라우저에서 import, export같은 지시자를 사용하려면 <script type = "module"></script> 같은 속성이 필요
모듈: 지연실행되고, 인라인 모듈 스크립트도 비동기 처리가 가능하고, 중복된 외부 스크립트는 무시하고, 자신만의 스코프를 갖고있고, 
항상 엄격 모드로 실행되고, 모듈 내 코드는 단 한번만 실행됨. */

// 모듈 최상위 레벨의 this는 undefined (일반 스크립트의 this는 전역 객체)
// <script>
    console.log(this); // window
// </script>
// <script type = "module">
    console.log(this); // undefined
// </script>


//--------------------------------------------------------------------------------------------------------------------
모듈내보내기; //(정적인 방식)

export let months = ["Jan", "Feb", "Mar", "Apr", "...months"]; // 배열 내보내기
export const MODULES_BECAME_STANDARD_YEAR = 2015; // 상수 내보내기
export class User {     // 클래스 내보내기
    constructor(name) {
        this.name = name;
    }
}

function sayHi(user) { // say.js에 저장된 함수
    console.log(`Hello, ${user}`);
}
export {sayHi}; // 선언부와 떨어진곳에서도 export 가능

모듈가져오기;

import {sayHi} from "./say.js";
sayHi("Park"); // Hello, Park

import {sayHi as hi} from './say.js'; // 이름 바꿔서 모듈 가져오기
hi("Ko"); // Hello, Ko


//--------------------------------------------------------------------------------------------------------------------
동적으로모듈가져오기;

// import()는 함수 호출과 문법이 비슷하지만 함수가 아니며 super()처럼 괄호를 쓰는 특별한 문법 (따라서 변수 복사, call, apply X)

// say.js
export function hi() {
    console.log(`안녕하세요.`);
}
export function bye() {
    console.log(`안녕히 가세요.`);
}
export default function() {
    console.log("export default한 모듈을 불러왔습니다!");
}

// index.html <script>
async function load() {
    let say = await import('./say.js');
    say.hi(); // 안녕하세요.
    say.bye(); // 안녕히 가세요.
    say.default(); // export default한 모듈을 불러왔습니다!
} 
<button onclick = "load()">클릭해주세요</button>