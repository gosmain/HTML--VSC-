맵 // (key가 있는 값이 저장된 컬렉션)

new Map();           // 맵 생성
map.set(key, value); // key를 이용해 value를 저장
map.get(key);        // key의 값을 반환. 값이 없을 시 undefined 반환
map.has(key);        // key의 존재여부 true or false
map.delete(key);     // key에 해당되는 값을 삭제
map.clear();         // 맵 안의 모든 요소를 제거
map.size();          // 맵 요소의 개수를 반환

예시 ;
let map = new Map();

map.set('1', 'str1')    // 문자형 키
   .set(1, 'num1')      // 숫자형 키
   .set(true, 'bool1'); // 불린형 키

// 객체는 키를 문자형으로 변환시킴. 하지만 맵은 키의 타입을 유지시키며 아래의 코드처럼 출력되는 값이 다름 (자료형 제약이 없음)
alert(map.get(1));    // 'num1'
alert(map.get('1'));  // 'str1'

alert(map.size);      // 3


//------------------------------------------------------------------------------------------------------------------------------------------
// 맵의 요소에 반복 작업(세가지 메서드)
map.keys(); // 각 요소의 키를 모은 반복 가능한 iterable 객체를 반환
map.values(); // 각 요소의 값을 모은 iterable 객체를 반환
map.entries(); // 요소의 [키, 값]을 한 쌍으로 하는 iterable 객체를 반환(for..of반복문의 기초로 사용)

예시 ;
let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
]);

for (let vegetable of recipeMap.keys()) {   // 키(vegetable)를 대상으로 순회
    alert(vegetable); // cucumber, tomatoes, onion
}
  
for (let amount of recipeMap.values()) {   // 값(amount)을 대상으로 순회
    alert(amount); // 500, 350, 50
}

for (let entry of recipeMap) {    // [키, 값] 쌍을 대상으로 순회합니다. (recipeMap.entries()와 동일)
    alert(entry); // cucumber,500 ...
}


//------------------------------------------------------------------------------------------------------------------------------------------
Object.entries(); // 객체를 맵으로 바꾸기

let obj = {
    name: "Gyubin",
    age: 30
};

  let map = new Map(Object.entries(obj)); // 객체 obj를 배열 [["name","Gyubin"],["age", 30]]로 변환

  alert(map.get('name')); // Gyubin (위에서 생성한 배열로 맵 만들기)


//------------------------------------------------------------------------------------------------------------------------------------------
Object.fromEntries(); // 맵을 객체로 바꾸기

let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map); // 맵을 일반 객체로 변환. obj = { banana: 1, orange: 2, meat: 4 }

alert(obj.orange); // 2


//------------------------------------------------------------------------------------------------------------------------------------------
셋 // 중복이 없는 값을 저장할 때 쓰이는 컬렉션

new Set(iterable); // 셋 생성
set.add(value); // 값을 추가하고 셋 자신을 반환
set.delete(value); // 값을 제거. 제거에 성공하면 true, 셋 내에 값이 없으면 false 반환
set.has(value); // 셋 내의 값 존재여부 true or false 반환
set.clear(); // 셋을 비움
set.size(); // 셋에 몇 개의 값이 있는지 세줌

// 값을 단 한번만 기록할때 쓰이기에 적합한 자료구조가 셋 (값의 유일무이함을 확인하는데 최적화)
예시 ;
let set = new Set();

let Gyubin = {name: "Gyubin"};
let pete = {name: "Pete"};
let mary = {name: "Mary"};

set.add(Gyubin); // 어떤 고객(Gyubin, mary)은 여러 번 방문할 수 있음
set.add(pete);
set.add(mary);
set.add(Gyubin);
set.add(mary);

alert( set.size ); // 3 (셋에는 유일무이한 값만 저장)

for (let user of set) {
  alert(user.name); // Gyubin, Pete, Mary 순으로 출력됩니다.
};

// 셋의 값에 반복 작업하기 (for..of나 forEach 사용)
let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value); // 아래 forEach를 사용해도 동일하게 동작

set.forEach((value, valueAgain, set) => { 
  alert(value);
});


//------------------------------------------------------------------------------------------------------------------------------------------
과제예시1 ; // 배열에서 중복 요소 제거하기(Set)

function unique(arr) {
  return Array.from(new Set(arr));
}

function unique(Array)
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(values)); // `Hare, Krishna, :-0`