1. 
Ajax
// Js를 이용해 비동기적으로 서버와 브라우저가 데이터를 교환할 수 있는 통신방식
// 페이지 일부만을 갱신하고도 화면 전체 갱신과 동일한 효과를 볼 수 있도록 하는 것이 Ajax


2.
Json
// 클라이언트와 서버 간 데이터 교환을 위한 규칙: 데이터포맷
// Js의 객체와 매우 흡사하지만 순수한 텍스트로 구성된 규칙이 있는 데이터 구조
/*{ 
    "name": "Lee",
    "gender": "male",
    "age": 20
}*/


3.
JSON.stringify(); 
// 객체를 JSON형식의 문자열로 변환

const o = {name: "Lee", gender: "male", age: 20};

const strObject = JSON.stringify(o, null, 2);
console.log(typeof strObject, strObject);
/*string {  
  "name": "Lee",
  "gender": "male",
  "age": 20
}*/


4. 
JSON.parse();
// JSON형식의 문자열을 객체로 변환(JSON.stringify의 반대)
// 서버로부터 브라우저로 전송된 JSON데이터는 문자열. 따라서 이 문자열을 객체로서 사용하려면 parse를 사용해야함

const obj = JSON.parse(strObject);
console.log(obj);




