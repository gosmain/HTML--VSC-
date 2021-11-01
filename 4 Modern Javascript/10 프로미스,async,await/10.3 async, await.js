// async와 await를 사용하면 프로미스를 좀 더 편리하게 사용할 수 있음(promise.then/catch 사용 할 일이 거의 없음)
/*
함수 앞에 async 키워드를 추가하면: 
1)  함수는 언제나 프로미스를 반환
2)  함수 안에서 await를 사용할 수 있음
*/
// await는 promise.then보다 좀 더 세련되게 프로미스의 result값을 얻을 수 있도록 도와주는 문법

promise.js챕터예제;

console.log("시작");
f1() // promise
    .then((res) => f2(res))
    .then((res) => f3(res))
    .then((res) => console.log(res))
    .catch(console.log) 
    .finally(() => {
        console.log("끝");
    });
// 위 프로미스 핸들러를 async와 await를 사용하여 작성하기:
console.log("시작");
async function order() {
    try {
        const result1 = await f1();           // await는 async 함수 안에서만 동작(일반함수 동작X)
        const result2 = await f2(result1);
        const result3 = await f3(result2);
        console.log(result3);
    } catch (e) {
        console.log(e);
    }
    console.log("종료");
}
order();