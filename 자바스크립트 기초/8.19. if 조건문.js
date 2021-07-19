//예시 1:

var age = 25;

function is20s(age) {
    if (age < 20) {
        console.log("미성년자입니다. ");
    } else {
        console.log("성인입니다. ");  
    }
}

//--------------------------------------------------------------------------------
//예시 2:

function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    } else {
        return false;
    }
}
//--> 위의 예시는 아래처럼 더욱 효과적으로 작성 가능

function isLeapYear(year) {
    return (year%4==0);
}

/*---------------------------------------------------------------------------------------------------------
예시 3*/

var a = Math.ceil(Math.random()*10); // Math.random = 0~1사이의 실수를 생성, Math.ceil = 실수를 정수로 올림
var b = Math.ceil(Math.random()*10); // --> 0~10 사이의 실수를 생성후 정수로 변환
var solution = a * b;
var ans;
ans = parseInt(prompt(a+"*"+b+"=?"));  //입력받기
if (ans == solution) {
    console.log("맞았습니다.");
} else {
    console.log("틀렸습니다.")
}