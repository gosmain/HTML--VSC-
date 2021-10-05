// 호출 스케쥴링: 일정 시간이 지난 후에 원하는 함수를 예약 실행
// 호출 스케줄링 구현하는 방법 두가지: setTimeout(일정 시간이 지난 후에 함수 실행), setInterval(일정 시간 간격을 두고 함수 실행)

// setTimeout

function sayHi(who, phrase) {
    alert(who + '님, ' + phrase);
}
setTimeout(sayHi, 1000, "박규빈", "안녕하세요."); // 박규빈님, 안녕하세요.

// setTimeout 스케쥴링 취소하기
let timerId = setTimeout(sayHi, 1000, "박규빈", "안녕하세요.");
clearTimeout(timerId);


//--------------------------------------------------------------------------------------------------------------
// setInterval (setTimeout 메서드와 동일한 문법을 사용(다만 setTimeout은 한번, setInterval은 함수를 주기적으로 실행))
// 호출 중단: clearInterval(timerId);

let timerId = setInterval(() => alert('째깍'), 2000); // 2초 간격으로 메시지를 보여줌

setTimeout(() => { clearInterval(timerId); alert('정지'); }, 5000); // 5초 후에 정지


//--------------------------------------------------------------------------------------------------------------
// 중첩 setTimeout (=setInterval)
// 중첩 setTimeout을 사용하면 setInterval을 사용한 것보다 유연하게 코드를 작성할 수 있음. 여기에 더하여 지연 간격 보장이라는 장점도 있음.

// 5초 간격으로 서버에 요청을 보내 데이터를 얻는 코드(서버가 과부상태일 시 요청간격을 증가시킴):
let delay = 5000; 

let timerId = setTimeout(function request() {
  //...요청 보내기...

  if (서버-과부하로-인한-요청-실패) {
    // 요청 간격을 증가
    delay *= 2;
  }
  timerId = setTimeout(request, delay);

}, delay);

// CPU 소모가 많은 작업을 주기적으로 실행하는 경우에도 위와같이 setTimeout을 재귀 실행하는 방법이 유용. 작업에 걸리는 시간에 따라 다음 작업을 유동적으로 계획할 수 있기 때문.
// 따라서, 중첩 setTimeout을 이용하는 이유는 지연 간격을 보장하지만 setInterval은 이를 보장하지 않기때문.


//--------------------------------------------------------------------------------------------------------------
// 대기시간이 0 인 setTimeout 
// setTimeout(func, 0)이나 setTimeout(func)을 사용하면 setTimeout의 대기 시간을 0으로 설정할 수 있음.

예; // 즉시 alert창에 Hello(스크립트)를 호출하고 모든 스크립트가 종료되었으니 즉시 setTimeout의 World 출력
setTimeout(() => alert("World")); 
alert("Hello");