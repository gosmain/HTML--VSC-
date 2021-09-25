// for..of을 사용할 수 있는 객체 = iterable(반복가능한 객체)

// 배열과 문자열은 가장 광범위하게 쓰이는 내장 iterable
for (let char of "test") { // 메서드 Symbol.iterator가 for..of에 의해 자동으로 호출
    // 문자열의 글자 하나당 한 번 실행됩니다(4회 호출)
    alert(char); // t, e, s, t가 차례대로 출력됨
}

//----------------------------------------------------------------------------------------------------------------------------------
// iterator를 개발자가 명시적으로 호출하기 (사용하는 경우 거의 X 하지만 반복과정을 더 잘 통제할 수 있다는 장점이 있음)
let str = "Hello";

let iterator = str[Symbol.iterator](); // for..of를 사용한 것과 동일한 작업을 합니다 = for (let char of str) alert(char);

while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value); // 글자가 하나씩 출력됩니다.
}

//----------------------------------------------------------------------------------------------------------------------------------
// range를 iterator를 사용해 반복 가능한(iterable) 객체로 만들어 주는 코드 :
let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {                 // for..of는 Symbol.iterator를 호출
        this.current = this.from;         // Symbol.iterator는 iterator 객체를 반환. (이후 for..of는 반환된 iterator 객체만을 대상으로 동작)
        return this;
    },

    next() {                              // for..of 반복문에 의해 반복마다 next()가 호출
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
};

for (let num of range) {
    alert(num); // 1, then 2, 3, 4, 5
}

//----------------------------------------------------------------------------------------------------------------------------------
// iterable과 유사 배열 / Array.from

// 위에서 봤듯이 iterable은 메서드 Symbol.iterator가 구현된 객체
// 유사배열(array-like)는 index와 length property로인해 배열처럼 보이는 객체

let arrayLike = { // 인덱스와 length프로퍼티가 있음 => 유사 배열
    0: "Hello",
    1: "World",
    length: 2
  };
  for (let item of arrayLike) {}   // Symbol.iterator가 없으므로 에러 발생

// iterable과 유사배열 둘다 배열이 아니기에 push,pop 등에 메서드를 사용할 수 없음. 이는 유사 배열을 배열처럼 다루고자 할때 불편함

    Array.from(obj[mapFn, thisArg]);

    let arr = Array.from(arrayLike); // Array.from 메서드는 iterable과 유사 배열을 진짜 배열로 만들어줌
    alert(arr.pop()); // World (메서드가 제대로 동작합니다.)

