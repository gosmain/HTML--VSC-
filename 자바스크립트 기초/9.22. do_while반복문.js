예시 1

var cond = false;

while (cond) { // while 반복문
    console.log("이 구문은 실행되지 않습니다."); //while 반복문이 false이므로 실행 x
}

do {           // do-while 반복문
    console.log("이 구문은 한번은 실행됩니다."); //일단 do반복문을 한번 실행한 다음 이후 반복-
} while (cond);                              //-할 지 조건식을 보고 결졍하는 원리

do {
    var ans = parseInt(prompt("1+1=?"));
} while (ans != 2); 
console.log("맞혔습니다!");