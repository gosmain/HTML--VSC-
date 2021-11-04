async(비동기적) // 요청과 결과가 동시에 일어나지 않을거라는 약속
/* 
일반적인 이터레이터와 제너레이터는 데이터를 가져오는데 시간이 걸리지 않을 때에 적합함
하지만 약간의 지연이 있어서 데이터가 비동기적으로 들어오는 경우 async 이터레이터와 async 제너레이터 그리고
for..of 대신 for await..of를 사용함

실제 사용 예시: pagination을 구현해 데이터를 전송 <깃헙 커밋 이력 페이지네이션>
(사용자 목록을 서버에 요청할 시 서버는 일정 숫자 단위로 사용자를 끊어 정보를 
'한 페이지'로 구성한 후 다음 페이지를 볼 수 있는 url과 함께 응답) 
*/


//async 이터레이터-------------------------------------------------------------------------------------------
/* 일반 이터레이터(이터러블 객체)를 비동기적(async)으로 만들려면:
1) Symbol.iterator 대신, Symbol.asyncIterator를 사용해야함
2) next()는 promise를 반환해야함 
3) 비동기 이터러블 객체를 대상으로 하는 반복작업은 for await (let item of iterable)반복문으로 처리해야함
*/

let range = {
    from: 1,
    to: 5,

    [Symbol.asyncIterator]() { // 1) Symbol.asyncIterator 메서드는 이터레이터 객체를 반환
        return {
            current: this.from,
            last: this.to,

            async next() { // 객체는 async에 의해 자동으로 promise로 감싸짐
                await new Promise(resolve => setTimeout(resolve, 1000)); //비동기 사용을 위해 await 사용

                if (this.current <= this.last) {
                    return {done: false, value: this.current++};
                } else {
                    return {done: true};
                }
            }
        };
    }
};
(async () => {
    for await (let value of range) {
        console.log(value);
    }
})();


//async 제너레이터-------------------------------------------------------------------------------------------
// 일반 제너레이터는 await을 사용할 수 없으며 모든 값은 동기적으로 생산됨. (for..of 어디에도 딜레이를 줄 곳이 없음)

// 하지만 네트워크 요청을 해야 하는 경우 제너레이터 본문에서 await을 사용해야함: 함수 앞에 async를 추가하면 해결==>

async function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // async로 인해 await 사용가능

        yield i;
    }
}
(async () => {
    let generator = generateSequence(1, 5);
    for await (let value of generator) {
        console.log(value); // 1,2,3,4,5
    }
})();