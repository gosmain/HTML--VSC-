제너레이터 //(이터러블 객체 대체제)
// 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능
// 다른 작업을 하다가 다시 돌아와서 next()해주면 진행이 멈췄던 부분 부터 이어서 실행

/* 일반 함수는 하나의 값(혹은 0개의 값)만을 반환
하지만 제너레이터(generator)를 사용하면 여러 개의 값을 필요에 따라 하나씩 반환(yield)할 수 있음 */

function* fn() {
    console.log(1);
    yield 1;
    console.log(2);
    yield 2;
    console.log(3);
    console.log(4);
    yield 3;
    return "finish";
}
const a = fn();
console.log(a.next()); // 1   {value: 1, done: false} (첫 yield문에서 데이터 반환)
console.log(a.next()); // 2   {value: 2, done: false} (두번빼 yield문에서 데이터 반환)
console.log(a.next()); // 3,4 {value: 3, done: false} (세번째 yield문에서 데이터 반환)
console.log(a.next()); //     {value: "finish", done: true} (리턴문)


//제너레이터와 이터러블-------------------------------------------------------------------------------------------------------------
/* next()메서드를 보면 알 수 있듯이 제너레이터는 이터러블(반복가능)임. 따라서, for..of반복문을 사용해 값을 얻을 수 있으며
전개 문법(...)도 사용 가능 */

function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

// 1번: (for..of 반복문을 사용해 값 얻기) [X]
let generator = generateSequence();

for (let value of generator) {    
    console.log(value); // 1,2,3
}

// 2번: 전개 문법(...) 사용하기 [O]
let generator = [0, ...generateSequence()];

console.log(generator);  // 0,1,2,3


//이터러블 대신 제너레이터 사용하기--------------------------------------------------------------------------------------------------------------
// 제너레이터를 사용해 구현한 예시가 이터러블을 사용해 구현한 예시보다 훨씬 간결하고 쉬움
let range = {
    from: 1,
    to: 5,

    *[Symbol.iterator]() {  // [Symbol.iterator]: function*()를 짧게 줄인 형태
        for(let value = this.from; value <= this.to; value++) {
            yield value;
        }
    }
};
console.log([...range]); // 1,2,3,4,5


//제너레이터 컴포지션(yield*)--------------------------------------------------------------------------------------------------------------
// 제너레이터 컴포지션을 사용하면 한 제너레이터의 흐름을 다른 제너레이터에 삽입할 수 있음 (제너레이터의 특수 문법 yield* 사용)

function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
}
function* generatePassword() {
    yield* generateSequence(48, 57);  // 0..9
    
    yield* generateSequence(65, 90);  // A..Z
    
    yield* generateSequence(97, 122); // a..z
}

let str = "",

for (let code of generatePassword()) {
    str += String.fromCharCode(code);
}
console.log(str); // 0..9A..Za..z
