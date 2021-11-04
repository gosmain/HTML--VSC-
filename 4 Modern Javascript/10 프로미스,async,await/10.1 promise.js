비동기처리 //(요청과 결과가 동시에 일어나지 않음) // 콜백함수(x) or 프로미스(o)
// (동기방식은 설계가 간단하고 직관적이지만 결과가 주어질 때까지 아무것도 할 수 없다는 단점이 있음)
// (비동기방식은 동기보다 복잡하지만 결과가 주어지는데 시간이 걸리더라도 그 시간동안 다른 작업을 할 수 있음:효율적)
//(스크립트 로딩에 사용되는 함수 loadScript)
function loadScript(src, callback) { // 콜백 함수로 작성
    let script = document.createElement("script");
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`${src}를 불러오는 도중에 에러가 발생함`));
  
    document.head.append(script);
}

function loadScript(src) {   // 프로미스로 작성
    return new Promise(function(resolve, reject) {
        let script = document.createElement("script");
        script.src = src;
    
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`${src}를 불러오는 도중에 에러가 발생함`));
    
        document.head.append(script);
    });
}

//사용법:
let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(  // .then을 이용해 핸들러(구독함수)를 추가
    script => console.log(`${script.src}을 불러왔습니다!`),
    error => console.log(`Error: ${error.message}`)
);

promise.then(script => console.log("또다른 핸들러..."));


//--------------------------------------------------------------------------------------------------------------------
콜백함수와프로미스비교예시2;

콜백함수2;
const f1 = (callback) => {
    setTimeout(function () {
        console.log("1번 주문 완료");
        callback();
    }, 1000);
}
const f2 = (callback) => {
    setTimeout(function () {
        console.log("2번 주문 완료");
        callback();
    }, 3000);
}
const f3 = (callback) => {
    setTimeout(function () {
        console.log("3번 주문 완료");
        callback();
    }, 2000);
}

console.log("시작");
f1(function () {     // 콜백 hell, 콜백 지옥
    f2(function () {
        f3(function () {
            console.log("끝");
        });
    });
});


프로미스2;
const f1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("1번 주문 완료");
        }, 1000);
    });
};
const f2 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("2번 주문 완료");
            // rej("xxx"); : 실패 예시
        }, 3000);
    });
};
const f3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => { 
        setTimeout(() => {
            res("3번 주문 완료");
        }, 2000);
    });
};

console.log("시작");
f1()                     // 프로미스의 연결 = 프로미스 체이닝
    .then((res) => f2(res))
    .then((res) => f3(res))
    .then((res) => console.log(res))
    .catch(console.log)  // 캐치는 프로미스에서 발생한 모든 에러를 다룸: reject()가 호출되거나 에러가 발생하면 .catch가 처리
    .finally(() => {
        console.log("끝");
    }); // 위 프로미스 핸들러 .then, .catch, .finally는 항상 비동기적으로 실행됨


// Promise클래스의 메서드들--------------------------------------------------------------------------------------------------------------------
Promise.all /* (한꺼번에 시작하여 시간을 줄이기도 가능: 다 보여주거나 아예 안보여 줄때 사용)(결괏값을 담은 배열을 반환)
                프로미스가 하나라도 거절되면 전체를 거절하고 나머지 프로미스의 결과가 무시되기에, 
                프로미스 결과가 모두 필요할 때같이 "도 아니면 모"일때 유용 */
Promise.all([f1(), f2(), f3()]).then((res) => {
    console.log(res);
})

Promise.allSettled /* Promise.all과 동일한 역할, 하지만 모든 프로미스가 처리될 때까지 기다고 그 결과를 담은 배열을 반환
    fetch를 사용해 여러사람의 정보를 가져올 경우, 여러 요청 중 하나가 실패해도 다른 요청 결과는 여전히 있어야함: 이럴때 유용 */
let urls = [
    "https://api.github.com/users/iliakan",
    "https://api.github.com/users/remy",
    "https://no-such-url"
];
Promise.allSettled(urls.map(url => fetch(url)))
    .then(results => { 
        results.forEach((result, num) => {
        if (result.status == "fulfilled") {
            console.log(`${urls[num]}: ${result.value.status}`);
        }
        if (result.status == "rejected") {
            console.log(`${urls[num]}: ${result.reason}`);
        }
    });
});
// 각 프로미스의 상태와 값/에러를 받을 수 있음 상태:(fulfilled 또는 rejected) 값:(value(성공) 또는  reason(실패))

Promise.race // Promise.all과 비슷하지만 가장 먼저 처리되는 프로미스의 결과(혹은 에러)를 반환

//--------------------------------------------------------------------------------------------------------------------
// fetch와 프로미스 체이닝 응용 

function loadJson(url) {
    return fetch(url)
        .then(response => response.json());
}
  
function loadGithubUser(name) {
    return fetch(`https://api.github.com/users/${name}`)
        .then(response => response.json());
}

function showAvatar(githubUser) {
    return new Promise(function(resolve, reject) { // 이행 프로미스를 반환해 줘야 아바타가 사라질 때 체인을 확장할 수 있음
        let img = document.createElement("img");
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => {
            img.remove();
            resolve(githubUser);
        }, 3000);
    });
}
  
// 함수를 이용하여 다시 동일 작업 수행
loadJson("/article/promise-chaining/user.json")
    .then(user => loadGithubUser(user.name))
    .then(showAvatar)
    .then(githubUser => console.log(`Finished showing ${githubUser.name}`));
    // ...

