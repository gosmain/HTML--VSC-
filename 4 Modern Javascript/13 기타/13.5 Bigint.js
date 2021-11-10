// 값의 범위가 너무 큰 정수는 내장객체 BingInt를 사용해 해결할 수 있다
// Js의 Number타입은 정수를 안정적으로 나타낼 수 있는 값이 한정적이기때문

생성하는두가지방법;
const bigintOne = 1234567890n;
const bigintTwo = BigInt("1234567890"); 

숫자와섞어서사용하는법;
let bigint = 1n;
let number = 2;

// 숫자를 bigint로
alert(bigint + BigInt(number)); // 3

// bigint를 숫자로
alert(Number(bigint) + number); // 3