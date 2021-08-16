예시:

console.log("Menu");
console.log(" 1. Ice Americano");
console.log(" 2. Cafe Latte");
console.log(" 3. Cappuccino");
console.log(" 4. Tea");

var choice = parseInt(prompt("메뉴를 선택해 주세요."));

console.log(choice + "번 메뉴를 선택하셨습니다. ");

switch (choice) {
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
 
// *switch 조건문은 break 키워드를 만나면 switch case 조건문의 마지막 중괄호를 빠져나옴
// break 키워드를 사용하지 않을 시 다음 case에 해당되는 코드까지 실행됨
