// "..." : 나머지 매개변수와 전개문법에 사용
// 인수 목록의 나머지를 배열로 모아주는 '나머지 매개변수’
// 배열을 인수 목록으로 확장해주는 '전개 문법’
// 둘을 함께 사용하면 매개변수 목록과 배열 간 전환을 쉽게 할 수 있음


// 나머지 매개변수 (사용 패턴: 인수 개수에 제한이 없는 함수를 만들 때 나머지 매개변수를 사용)
function showName(firstName, lastName, ...titles) { // ... = 나머지 매개변수들을 titles배열에 집어넣어라
    alert(firstName + ' ' + lastName); // Julius Caesar
  
    // 나머지 인수들은 배열 titles의 요소가 됩니다.
    // titles = ["Consul", "Imperator"]
    alert(titles[0]); // Consul
    alert(titles[1]); // Imperator
    alert(titles.length); // 2
  };
  showName("Julius", "Caesar", "Consul", "Imperator");

//--------------------------------------------------------------------------------------------------------------
// spread 문법 (전개 문법) <나머지 매개변수와 반대 역할 = 배열을 매개변수로>
// 사용패턴: 다수의 인수를 받는 함수에 배열을 전달할 때 전개 문법을 사용

// 1) 배열에서: 
let arr = [3, 5, 1];
alert( Math.max(...arr) ); // 5 // 전개 문법이 배열을 인수 목록으로 바꿔줌

// 전개 문법으로 배열 합치기:
let arr = [3, 5, 1];
let arr2 = [8, 9, 15];

let merged = [0, ...arr, 2, ...arr2];

alert(merged); // 0,3,5,1,2,8,9,15 (0, arr, 2, arr2 순서로 합쳐집니다.)


// 2) Iterable 객체에서 또한 사용 가능하지만...:
let str = "Hello"; // 전개 문법으로 문자열을 문자 배열로 변환
alert([...str]); // H,e,l,l,o

let str = "Hello";
alert(Array.from(str)); // H,e,l,l,o // Array.from은 이터러블을 배열로 바꿔줌

// 그러나, Array.from은 유사 배열 객체와 이터러블 객체 둘 다 사용 가능하고, 전개 문법은 iterable만 객체만 되서 Array.from이 보편적으로 더 많이 사용됨


//--------------------------------------------------------------------------------------------------------------
// 객체, 배열 복사하기

let objCopy = Object.assign({}, obj);  // 객체 복사
let arrCopy = Object.assign([], arr);  // 배열 복사

// 하지만 전개 문법을 사용해 위 방법보다 쉽게 배열과 객체를 새로운 배열과 객체에 복사 가능

let arr = [1, 2, 3];
let arrCopy = [...arr]; // arr배열을 전개 후 arrCopy 배열에 복사

// 두 배열이 같은 content를 가지고 있는가?
alert(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true

// 두 배열이 같은가?
alert(arr === arrCopy); // false (not same reference)

// .push로 차이 확인하기
arr.push(4);
alert(arr); // 1, 2, 3, 4
alert(arrCopy); // 1, 2, 3


