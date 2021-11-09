/*
커링은 f(a,b,c)를 f(a)(b)(c)와 같이 다중 callable 프로세스 형태로 변환하는 기술
커링되어진 함수는 평소처럼 호출도 하고 만약에 인수들이 충분하지 않을 경우 partial을 반환
커링은 partial을 쉽게 적용시켜줌 -->
커링을 적용하면 인수 세 개의 함수 log(a,b,c)를 log(a)혹은 log(a,b)처럼 인수가 하나 혹은 두 개인 형태로 호출할 수 있음
*/

함수;
function curry(func) {

    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };
}

사용예시;
function sum(a, b, c) {
    return a + b + c;
}

let curriedSum = curry(sum);
console.log(curriedSum(1, 2, 3)); // 6 (평소처럼 단일 callable 형식으로 호출하기)
console.log(curriedSum(1)(2, 3)); // 6 (첫번째 인수를 커링하기)
console.log(curriedSum(1)(2)(3)); // 6 (모두 커링하기)
