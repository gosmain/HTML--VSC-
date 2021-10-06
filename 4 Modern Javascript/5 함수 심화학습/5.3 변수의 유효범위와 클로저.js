// 코드 블록 {...} 안에서 선언한 변수는 블록 안에서만 사용 가능
for (let i = 0; i < 3; i++) {
    // 변수 i는 for 안에서만 사용할 수 있습니다.
    alert(i); // 0, 1, 2가 출력
}
alert(i); // ReferenceError: i is not defined

//--------------------------------------------------------------------------------------------------------------
// 중첩 함수
function sayHiBye(firstName, lastName) {
  function getFullName() { // 외부 변수에 접근해 이름 전체를 반환해주는 중첩 함수 getFullName()은 편의상 만든 함수
    return firstName + " " + lastName;
  }
  alert("Hello, " + getFullName());
  alert("Bye, " + getFullName());
} 
// 중첩 함수는 새로운 객체의 프로퍼티 형태나 중첩 함수 그 자체로 반환될 수 있다는 점에서 흥미로움 
// 이렇게 반환된 중첩 함수는 어디서든 호출해 사용할 수 있음


// 호출될 때마다 다음 숫자를 반환해주는 '카운터' 함수 (약간의 변형으로 "난수 생성기"같은 실용성 있는 함수 생성 가능) 
function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  
  alert( counter() ); // 0
  alert( counter() ); // 1
  alert( counter() ); // 2
// 위 함수를 살펴보면 “counter를 여러 개 만들었을 때, 이 함수들은 서로 독립적일까? 함수와 중첩 함수 내 count 변수엔 어떤 값이 할당될까?” 같은 의문이 들 수 있음
// 그리고 이 의문들을 해결 할 수 있다면 숙련도가 많이 올라감 (밑 렉시컬 환경 참고);


//--------------------------------------------------------------------------------------------------------------
// 렉시컬 환경
