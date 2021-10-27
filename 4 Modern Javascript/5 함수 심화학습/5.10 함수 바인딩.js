// bind메서드: 함수의 this 값을 영구히 바꿀 수 있음

사라진this;
let user = {
    firstName: "Gyubin",
    sayHi() {
        alert(`Hello, ${this.firstName}!`);
    }
};

setTimeout(user.sayHi, 1000); // Hello, undefined! // user.sayHi만 전달되고 user context를 잃어버림
setTimeout(user.sayHi.bind(user), 1000); // = bind로 문제해결

//--------------------------------------------------------------------------------------------------------------
// this를 수정하게 해주는 내장 매서드, bind
// f.bind(...)가 반환한 특수 객체인 묶인 함수(bound function)는 함수 생성 시점의 컨텍스트만 기억. 인수가 제공되었다면 그 인수 또한 기억.
예시1;
let user = {
    firstName: "Gyubin",
    sayHi() {
        alert(`Hello, ${this.firstName}!`);
    }
};
  
let sayHi = user.sayHi.bind(user);

sayHi(); // Hello, Gyubin! // 이제 객체 없이도 객체 메서드를 호출할 수 있음
  
setTimeout(sayHi, 1000); // Hello, Gyubin!
  

예시2; // 인수는 '그대로' 전달하고 this만 bind로 고정시키기
const user = {
    firstName: "Gyubin",
    say(phrase) {
        alert(`${phrase}, ${this.firstName}!`)
    }
};
  
const say = user.say.bind(user); 
  
say("Hello"); // Hello, Gyubin (인수 "Hello"가 say로 전달)
say("Bye");   // Bye, Gyubin (인수 "Bye"가 say로 전달)


과제예시1; // 로그인에 부분 적용하기

function askPassword(ok, fail) {
    let password = prompt("비밀번호를 입력해주세요.", '');
    if (password == "rockstar") ok();
    else fail();
}
let user = {
    name: 'Gyubin',
    login(result) {
      alert(this.name + (result ? ' 로그인 성공' : ' 로그인 실패'));
    }
};

askPassword(() => user.login(true), () => user.login(false)); // askPassword는 외부 변수에서 user를 가져오기 때문에 원하는 결과를 얻을 수 있음
let login = login.bind(user);
askPassword(user.login.bind(user, true), user.login.bind(user, false)); // 부분 적용 함수를 통해 구현

