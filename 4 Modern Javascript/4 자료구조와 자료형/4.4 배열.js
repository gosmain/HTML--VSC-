/*배열(특수한 형태의 객체로, 순서가 있는 컬렉션을 저장)
(객체는 속성이름과 그에 대응하는 값의 집합이고 배열은 값의 나열) --> (객체 = '속성:값', 배열 = 'index:element')
(배열은 비슷한 값을 여러개 관리해야 할 때 유용하고, 객체는 속성이 여러 개인 복잡한 데이터 타입이 필요할 때 유용함)
(객체는 순서를 고려하지 않고 만들어진 자료구조이기 때문에 배열이란 자료구조를 사용해 순서가 있는 컬렉션을 저장함)*/

// 배열을 가장 쉽게 정의하는 방법 : 대괄호 사용 
let arr =[];

// (배열또한 객체처럼 여러 값을 쉼표로 구분가능)
let fruits = ["apple","banana","mango",];

// 배열의 값에 접근하기
document.write(fruits[0]); //"apple"

// 배열의 길이
document.write(fruits.length); //3

// 배열 비우기
fruits.length = 0; //요소 0개 남기기

/*(객체에서 어떤 데이터 타입이든 속성에 저장할 수 있었듯이 배열에서도 어떤 엘리먼트든 배열안에 넣을 수 있음
(심지어 배열 혹은 객체또한 넣을 수 있음))*/
eg: 
let mixed_arr = [1, true, 3.14, "string", {name : "object"}, [1,2,3],];
mixed_arr; 
(6) [1, true, 3.14, "string", {gosmain}, Array(3)]

// 요소 더하거나 삭제----------------------------------------------------------------------------------------------------------------------------------

// 배열 속 앞,뒤 엘리먼트를 추가/삭제하는 명령 : pop(), push(), shift(), unshift(). <pop,shift=삭제, push,unshift=추가>
// 뒤에서 호출하는 pop과 push는 빠르나 앞에서 호출되는 shift와 unshift는 느림
let arr = [1, 2, 3, 4, 5,];

arr.pop();       // 맨 뒤의 엘리먼트 삭제
5                // 5를 삭제
arr;
[1,2,3,4]        // 맨 뒤 엘리먼트 5 삭제

arr.shift();     // 맨 앞의 엘리먼트 삭제
1                // 1을 삭제
arr;
[2,3,4]          // 맨 앞의 엘리먼트 1 삭제

arr.push(6);     // 맨 뒤에 엘리먼트 6 추가
4                // 길이가 4인 배열이 된다는 뜻
arr;
[2,3,4,6]        // 6이 맨뒤에 추가됨

arr.unshift(0);  // 맨 앞에 엘리먼트 0 추가
5
arr;
[0,2,3,4,6]      // 0이 맨앞으로 추가됨

// 요소 삭제 splice()
let arr = ["I", "study", "JavaScript", "right", "now",];
arr.splice(0, 3, "Let's", "dance"); // 처음(0) 세 개(3)의 요소를 지우고, 이 자리를 다른 요소로 대체

alert(arr);       // ["Let's", "dance", "right", "now"]
alert( removed ); // ["I", "study", "JavaScript"]

// 삭제없이 중간에 새로운 요소 추가 또한 가능
let arr = ["I", "study", "JavaScript",];
arr.splice(2, 0, "complex", "language"); // 인덱스 2부터 0개의 요소를 삭제. 그 후, "complex"와 "language"를 추가
alert(arr); // ["I", "study", "complex", "language", "JavaScript"]

// 배열에서도 concat() 명령으로 두 배열 합치기 가능
// concat()명령과 push()명령의 차이
let arr1 = [1,2,3]; 
let arr2 = [4,5,6];

arr1.concat(arr2);
[1,2,3,4,5,6]
arr1.push(arr2);
[1,2,3,[4,5,6]]

// 원하는 요소 탐색--------------------------------------------------------------------------------------------------------------------------------

// 배열 탐색 (indexOf = 위치)
let arr = [1, 0, false];

alert(arr.indexOf(0));     // 1
alert(arr.indexOf(false)); // 2
alert(arr.indexOf(null));  // -1 (발견하지 못할 시 -1반환)
alert(arr.includes(1));    // true (존재 여부)

// 배열에서 조건에 부합하는 객체찾기 find()
arr.find(fn);   // find메서드는 함수의 반환값을 true로 만드는 하나의 요소를 찾음,
arr.filter(fn); // 조건에 충족하는 요소가 여러개라면 filter 메서드 사용

let result = arr.find(function(item, index, array) {
    // true가 반환되면 반복이 멈추고 해당 요소를 반환합니다.
    // 조건에 해당하는 요소가 없으면 undefined를 반환합니다.
});

let users = [
  {id: 1, name: "John"}, 
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);
alert(user.name); // John

// filter()로 특정 범위에 속하는 요소 찾기 
function filterRange(arr, a, b) { // 배열 arr의 요수 a이상 b이하를 골라 새로운 배열에 넣고 해당 요소를 출력
    return arr.filter(item => (a <= item && item <= b));
};

let arr = [5, 3, 8, 1,];
let filtered = filterRange(arr, 1, 4);
alert(filtered); // 3,1 (조건에 맞는 요소)  
alert(arr); // 5,3,8,1 (기존 배열은 변경되지 않았습니다.)

// 배열 전체 순회하기--------------------------------------------------------------------------------------------------------------------------------

// forEach
arr.forEach.toString(function(item, index, array) {
    // 요소에 무언가를 할 수 있음 (for each item, ~~)
});
["Bilbo", "Gandalf", "Nazgul",].forEach(alert); // 요소 모두를 얼럿창을 통해 출력 (for each element call alert)

// 배열 변형하기-----------------------------------------------------------------------------------------------------------------------------------

// arr.map은 배열 요소 전체를 대상으로 함수를 호출하고, 함수 호출 결과를 배열로 반환
let result = arr.map(function(item, index, array) {
    // 요소 대신 새로운 값을 반환합니다.
});
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6 (새로운 배열 생성)

// reverse() 명령은 배열의 순서를 반대로 뒤집음 (다시 원상복귀시키는 명령: sort())

arr.reverse(); // 배열 뒤접어 반환
[6,4,3,2,0]
arr.sort();    // 배열 정렬 후 반환
[0,2,3,4,6]

// arr.split() 명령은 문자열을 구분자(seperator)로 나누고 나눠진 각 문자열을 배열에 넣어 반환 */
// arr.join() = split()반대 역할 메서드
// split() = 문자열을 배열로, join() = 배열을 문자열로 반환

let str = "1, 2, 3, 4, 5,";
str.split(",");           // 쉼표로 구분(구분자가 쉼표)
["1", "2", "3", "4", "5",]; 
arr.join("");
"12345";

// 쉼표로 구분되어 있지 않아도 가능:
"1-2-3-4-5".split("-");   // 쉼표없이 구분 (변수 선언 예시가 아닌 문자열 예시)
["1", "2", "3", "4", "5",]

// 기타-----------------------------------------------------------------------------------------------------------------------------------

Array.isArray(arr) // arr이 배열인지 여부를 판단