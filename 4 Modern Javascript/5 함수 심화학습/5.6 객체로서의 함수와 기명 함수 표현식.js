// JS에서 함수는 호출이 가능한 행동 객체: (호출뿐만 아니라 객체처럼 함수에 프로퍼티를 추가,제거하거나 참조를 통해 전달 할 수 있음)

sayHi.name-이름프로퍼티; // sayHi함수에 name프로퍼티로 함수 이름을 호출

length-프로퍼티; 
function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

alert(f1.length); // 1
alert(f2.length); // 2
alert(many.length); // 2 // 나머지 매개변수는 length에 포함하지 않음


//--------------------------------------------------------------------------------------------------------------
기명함수-표현식(NamedFunctionExpression); // 함수 표현식에 내부 이름 지정 (함수 선언문에 사용 불가)
// 이름을 사용해 함수 표현식 내부에서 자기자신을 참조: 기명함수 표현식의 이름은 재귀 호출과 같이 함수 내부에서 자기 자신을 호출하고자 할때 사용

1.
  let sayHi = function(who) {
    if (who) {
      alert(`Hello, ${who}`);
    } else {
      sayHi("Gyubin");   // 대부분의 개발자는 NFE없이 앞 함수명으로 중첩 호출함 (하지만, 외부 코드에 의해 sayHi가 변경 될 위험이 있음)
    }                   
  };
  
  let welcome = sayHi;
  sayHi = null;         // 외부 코드에 의해 sayHi 변경
  

  welcome(); // TypeError: sayHi is not a function (중첩 sayHi 호출은 더 이상 불가능)

2.
  let sayHi = function func(who) { // func = NFE
    if (who) {
      alert(`Hello, ${who}`);
    } else {
      func("Gyubin"); // (NFE)를 사용하면 외부에서 sayHi가 변경되어도 원하는 값이 제대로 출력
    }
  };
  
  let welcome = sayHi;
  sayHi = null;      // 외부 코드에 의해 sayHi가 변경되어도 func는 정상적으로 동작
  
  welcome(); // Hello, Gyubin (중첩 호출이 제대로 동작)