// 객체(Object): 순서가 없는 배열 <함수와 변수가 많아지면 연관된것들을 그룹지어 정리정돈하는 도구>
// let man = {name: "홍길동", age: 20, height: 180}  객체(하나의 변수 속의 여러 복잡한 정보)
//객체는 다른 원시 자료형과 달리 다양한 데이터를 담을 수 있음

let user = new Object(); // '객체 생성자' 문법

let user = {name: "john", age: 30,};  // '객체 리터럴' 문법 --> * 주 사용 (키: 값)

user.isAdmin =true; //객체에 불린형 데이터 추가

user["rel num"] = "2" //(데이터 추가)객체에서 띄어쓰기 사용은 배열처럼 대괄호 사용

delete user.name    //객체의 데이터 삭제


//------------------------------------------------------------------------------------------------------------------------------------------
//대괄호 표기법
let fruit = prompt("어떤 과일을 구매하시겠습니까?", "apple");
let bag = {};
// 변수 fruit을 사용해 프로퍼티 이름을 만들었습니다.
bag[fruit] = 5; //대괄호 표기법은 프로퍼티 이름의 값과 제약을 없애줌 : 점 표기법보다 훨씬 강력


//------------------------------------------------------------------------------------------------------------------------------------------
//단축 property 
function makeUser(name, age) {
    return {
      name, //name: name과 같음
      age,
    };
  }
  
  let user = makeUser("ko", 22);
  alert(user.name); // ko


//------------------------------------------------------------------------------------------------------------------------------------------
//프로퍼티 존재여부 (in 연산자)
//JS 객체는 다른 언어와 달리, 존재하지 않는 property에 접근할 때 에러가 발생하지 않고 undefined를 반환= 이를 이용해 프로퍼티 존재 여부 쉽게 찾을 수 있음

let user = { name: "ko", age: 22 };

alert( "age" in user ); // user.age가 존재하므로 true가 출력됩니다.
alert( "blabla" in user ); // user.blabla는 존재하지 않기 때문에 false가 출력됩니다.


//------------------------------------------------------------------------------------------------------------------------------------------
//for반복문을 실행하면 각 배열의 element에 접근할 수 있음 / 그에 비해 객체의 속성에 접근하는 방법은 두가지가 있음-->
//객체의 속성에 접근하는 첫번째 방법 : Object.keys() 함수/ Object.keys()함수는 객체 속성의 이름을 배열로 반환


let obj = {name: "object", weight: 30, isObject: true, arr: [1, 2, 3], obj: {property: 1}};

console.log("for 구문으로 object property 반복하기");
let property_list = Object.keys(obj);            // Object.keys()함수안에 obj를 인자로 포함 = 배열로 변환

for (let i = 0; i < property_list.length; i++) {
    let propertyName = property_list[i];
    console.log("\t", propertyName, ": ", obj[propertyName]);
}

//------------------------------------------------------------------------------------------------------------------------------------------
//객체의 속성에 접근하는 두번째 방법 : for in 반복문

//for in 반복문 예제1:

let user = {name: "ko", age: 22, isAdmin: true};
  
  for (let key in user) {
    // 키
    alert( key );  // name, age, isAdmin
    // 키에 해당하는 값
    alert( user[key] ); // ko, 22, true
  }

//for in 반복문 예제2:

let obj = {name: "object", age: 10, weight: 5}

let sum = 0;
for (let prop in obj) {
    if (typeof(obj[prop]) == "number") {
        sum = sum + obj[prop];
    }
}

