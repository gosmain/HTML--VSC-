function a() {
    var v_a = "a";
    
    function b() {
        var v_b = "b";
        console.log("b :", typeof(v), typeof(v_a), typeof(v_b));
    }
    
    b();   // a()함수 안에서 b()함수를 호출
    
    console.log("a :", typeof(v), typeof(v_a), typeof(v_b));
}

a();   // a()함수 호출

var v = "v"; // a()함수 바깥에서 변수 v초기화

console.log("o :", typeof(v), typeof(v_a), typeof(v_b));


* 자바스크립트 변수의 유효 볌위가 함수의 유효 범위를 따름 (function scope)
= 어떠한 객체가 선언되고 나면 그 객체는 자신이 선언된 함수 안에서만 접근할 수 있음
: b()함수 안에서 변수 v_a가 선언되었기 때문에 이 함수 안에서만 접근 가능