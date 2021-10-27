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

// JS의 함수는 숨김 프로퍼티인 [Environment]를 이용해 자신이 어디서 만들어졌는지를 기억
// 함수 본문에선 [Environment]를 사용해 외부 변수에 접근

/* 클로저
클로저는 외부 변수를 기억하고 이 외부 변수에 접근할 수 있는 함수를 의미
여러 언어에서 클로저를 구현하는게 불가능하지만 JS에선 모든 함수가 자연스럽게 클로저가 된다. 단 예외는 있다...
*/

//------------------------------------------------------------------------------------------------------------------------------------------
과제예시1; // 숫자 설정과 감소가 가능한 카운터 만들기

function makeCounter() {
  let count = 0; 

  function counter() {
    return count++;
  }
  // 지역변수 count를 사용하지만 set과 decrease메서드는 함수 counter에 정의하고 있음
  // 하지만 동일한 외부 렉시컬 환경을 공유하기에 함수 counter에 할당한 메서드들은 동일한 count에 접근할 수 있음
  counter.set = value => count = value;

  counter.decrease = () => count--;

  return counter;
} 
//따라서, 함수 counter는 외부 변수를 기억하고 이 외부 변수에 접근할 수 있는 함수 = 클로저


과제예시2; // counter는 독립적일까?

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // ? // 0 (함수 counter와 counter2는 각각 다른 makeCounter 호출에 의해 생성됨)
alert( counter2() ); // ? // 1 (따라서, 두 함수는 독립적인 렉시컬 환경을 갖게되므로 각 함수는 자신만의 count를 갖게됨)


과제예시3; // counter객체

function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter(); // 생성자 함수로 counter 객체 생성

alert( counter.up() ); // ? ==>   // 1
alert( counter.up() ); // ? ==>   // 2
alert( counter.down() ); // ? ==> // 1
// 생성자 함수의 두 중첩 함수는 동일한 외부 렉시컬 환경에서 만들어졌기 때문에 같은 count 변수를 공유 = 정상작동


과제예시4; // 클로저를 이용하여 합 구하기

function sum(a) {

  return function(b) {
    return a + b; // 'a'는 외부 렉시컬 환경에서 가져옵니다.
  };

}

alert( sum(1)(2) ); // 3
alert( sum(5)(-1) ); // 4


과제예시5; // 함수를 이용해 원하는 값만 걸러내기

function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6


과제예시6; // 필드를 기준으로 정렬하기 (정렬)

let users = [ // 객체가 담긴 배열
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

// 1) 일반적인 정렬 방법(1 = 순서가 바뀌고, -1 = 순서가 유지):
users.sort((a, b) => a.name > b.name ? 1 : -1); // (a의 이름이 b의이름보다 클 경우 1=바뀌게 정렬) 이름을 기준으로 정렬(Ann, John, Pete)
users.sort((a, b) => a.name.charCodeAt() - b.name.charCodeAt()); // 위와 같은 결과 실행
 
users.sort((a, b) => a.age > b.age ? 1 : -1);   // 나이를 기준으로 정렬(Pete, Ann, John)

// 2) 함수를 사용해 더 깔끔한 코드로 정렬하고 호출하기:
function byField(standard){ 
  return (a, b) => a[standard] > b[standard] ? 1 : -1;
}

users.sort(byField('name')); // 이름을 기준으로 정렬(Ann, John, Pete)
users.sort(byField('age'));  // 나이를 기준으로 정렬(Pete, Ann, John)