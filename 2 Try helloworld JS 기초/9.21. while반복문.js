/* while 반복문은 조건을 만족하는 동안에는 반복 실행할 코드를 계속 실행합니다
* while 반복문은 continue 키워드를 만나면 뒤 코드를 모드 건너뜁니다
* while 반복문은 break 키워드를 만나면 즉시 반복문에서 탈출합니다 */

예시:

console.log("Menu");
console.log(" 1. Ice Americano");
console.log(" 2. Cafe Latte");
console.log(" 3. Cappuccino");
console.log(" 4. Tea");

var count = 0;  // 횟수를 셀 변수를 선언 및 초기화

while (count < 3){  // while 반복문을 이용해서 count가 3 미만일 동안만 수행하도록 설정

    var choice = parseInt(prompt("메뉴를 선택해 주세요."));  //입력값

    console.log(choice + "번 메뉴를 선택하셨습니다. ");      //출력값
z
    switch (choice) {  // (swith 조건문 예시)
        case 1:
            console.log("아이스 아메리카노는 1500원입니다.");
            break;
        case 2:
            console.log("카페 라떼는 1800원입니다.");
            break;
        case 3:
            console.log("카푸치노는 2000원입니다.");
            break;
        case 4:
            console.log("홍차는 1300원입니다.");        //콘솔은 옆에 개발자창에 출력
            break;
        default:
            alert("죄송합니다. 그런 메뉴는 없습니다. ");  //alert는 화면에 바로 직접 출력
            break;
    }
    count++;  //반복문을 마치기 전에 count를 증가 (다시 시작위치로 돌아감)
}

console.log("안녕히 가십시오. ")  //반복문이 끝나면 메세지를 출력

/*---------------------------------------------------------------------------------------------------------
 예시 2 */

var count = 0;  // 틀린 개수를 저장할 count 변수 선언

while (true) {  // 조건식에 true를 입력하면 반복문이 계속 실행됨
    var ans;
        ans = parseInt(prompt("1+1=?")); // 정답 입력받기
        if (ans !=2) {                   // if 조건문을 이용해 정답을 비교   
            console.log((++count) + "번 틀렸습니다. 다시 도전하세요.");  // 정답이 틀릴시 count를 1 증가
            continue;                    // continue를 만나면 반복문의 맨 끝으로 이동(뒤 문제가 출력되지 않음)
        }
        ans = parseInt(prompt("7-3=?"));
        if (ans != 4) {
            console.log((++count) + "번 틀렸습니다. 다시 도전하세요.");
            continue;
        }
        ans = parseInt(prompt("9*7=?"));
        if (ans != 63) {
            console.log((++count) + "번 틀렸습니다. 다시 도전하세요.");
            continue;
        }   
        break;  
        // continue를 만나면 여기로 이동 (break 건너뜀=while문이 true이므로 다시 문제가 출력됨)
}          
 // 정답을 모두 맞히면 continue를 만나지 않고 break를 만나 여기로 이동하여 반복문 밖으로 빠져나옴
alert("참 잘했습니다.!")

/* ---------------------------------------------------------------------------------------------------------
예시 3 */

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