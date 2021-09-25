let age = prompt('나이를 입력해주세요.', 100);
alert(`당신의 나이는 ${age}살 입니다.`); // 당신의 나이는 100살입니다.


let isBoss = confirm("당신이 주인인가요?"); // result = confirm(question);
alert( isBoss ); // 확인 버튼을 눌렀다면 true가 출력됩니다.


//-----------------------------------------------------------------------------------------------------------------------
alert( true || true );   // true (참이 하나라도 있을 시 true 반환)
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

// 첫 번째 truthy를 찾는 OR 연산자 "||" (truthy를 만나면 나머지 값들은 건드리지 않은 채 평가를 멈춤)

alert( 1 || 0 ); // 1 (1은 truthy임)
alert( null || 1 ); // 1 (1은 truthy임)
alert( null || 0 || 1 ); // 1 (1은 truthy임)
alert( undefined || null || 0 ); // 0 (모두 falsy이므로, 마지막 값을 반환함)

let firstName = "";
let lastName = "";
let nickName = "바이올렛";

alert( firstName || lastName || nickName || "익명"); // 바이올렛 (모든 변수가 falsy이면 "익명" 출력)

// 단락 평가는 연산자 왼쪽 조건이 falsy일 때만 명령어를 실행하고자 할 때 자주 쓰입니다.
true || alert("not printed");   //첫 번째 줄의 || 연산자는 true를 만나자마자 평가를 멈추기 때문에 alert가 실행되지 않습니다.
false || alert("printed");      //실행


//-----------------------------------------------------------------------------------------------------------------------
alert( true && true );   // true (모두가 참일 시 true 반환)
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

// 첫 번째 falsy를 찾는 AND 연산자 "&&"

// 첫 번째 피연산자가 truthy이면, AND는 두 번째 피연산자를 반환합니다. (truthy를 찾아 반환하는 OR연산자와 정반대)
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// 첫 번째 피연산자가 falsy이면, AND는 첫 번째 피연산자를 반환하고, 두 번째 피연산자는 무시합니다.
alert( null && 5 ); // null
alert( 0 && "아무거나 와도 상관없습니다." ); // 0

//eg:
alert( null || 2 && 3 || 4 ); //&&의 우선순위가 ||보다 높고, 2 && 3 = 3이므로, 
alert( null || 3 || 4) // 따라서, 첫 번째 truthy인 3이 출력됨

//EX:
let userName = prompt("사용자 이름을 입력해주세요.", '');

if (userName == 'Admin') {

  let pass = prompt('비밀번호:', '');

  if (pass == 'TheMaster') {
    alert( '환영합니다!' );
  } else if (pass == '' || pass == null) {
    alert( '취소되었습니다.' );
  } else {
    alert( '인증에 실패하였습니다.' );
  }

} else if (userName == '' || userName == null) {
  alert( '취소되었습니다.' );
} else {
  alert( "인증되지 않은 사용자입니다." );
}

//-----------------------------------------------------------------------------------------------------------------------

// null 병합 연산자 "??" (값이 정해져있는 변수를 빠르게 찾을 수 있음)
a ?? b // a가 null도 아니고 undefined도 아니면 a, 그 외의 경우는 b

let firstName = null;
let lastName = null;
let nickName = "바이올렛";

alert(firstName ?? lastName ?? nickName ?? "익명의 사용자"); // 바이올렛 (null이나 undefined가 아닌 첫 번째 피연산자)

/*❤    OR"||"연산자와 매우 비슷해보임 (하지만 ||는 첫번 째 truthy값을 반환, ??은 첫 번째 정의된 값을 반환)
null과 undefined, 숫자 0을 구분 지어 다뤄야 할때 이 차이점은 매우 중요한 역할을 함 */
let height = 0;
alert(height || 100); // 100 (0은 falsy)
alert(height ?? 100); // 0   (0이 첫 번째로 정의된 값)
// 이런 특징 때문에 높이처럼 0이 할당될 수 있는 변수를 사용해 기능을 개발할 땐 ||보다 ??가 적합
// 또한, 안정선 관련 이슈 때문에 ??는 &&나 ||와 함께 사용 불가(괄호로 구분지어 사용시 가능)

//ex:
height = height ?? 100; // height가 null이나 undefined인 경우, 100을 할당


//-----------------------------------------------------------------------------------------------------------------------
// ? 삼항연산자

let num = (A === true) ? B : C;  // 아래 if문과 같은 결과 출력 (괄호 조건이 참일시 B를 출력, 그렇지 않으면 C를 출력)

// if 문
let num = null;
if (A === true) {
    res =  B;
} else {
    res =  C;
}