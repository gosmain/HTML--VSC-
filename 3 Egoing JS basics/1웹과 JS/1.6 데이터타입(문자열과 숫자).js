/*컴퓨터 프로그래밍에서 데이터를 분류하는 일은 매우 중요함
--> JS에는 크게 6종류의 데이터 타입이 존재 (중요한 문자열(string)과 숫자(number)).

* 64비트로 실수와 정수를 모두 표현할 수 있음

* 1은 숫자형이고 "1"은 문자형*/
typeof(1);
"number"
typeof("1");
"string"
alert(1+2);
3
alert("1+2");
12

//------------------------------------------------------------------------------------------

//parseint() 명령은 문자열의 앞부분에서 정수 부분을 추출할 수 있음, 문자열을 정수로 변환
//parseFloat() 명령은 문자열의 앞부분에서 실수 부분을 추출할 수 있음, 문자열을 실수로 변환

예제;

var height = prompt("키를 입력해 주세요.");        //사용자에게 키를 입력받기
console.log(height, typeof(height));             //출력 1
var height_int = parseInt(height);               //입력받은 키 값을 정수로 변환
console.log(height_int, typeof(height_int));     //출력 2
var height_float = parseFloat(height);           //입력받은 키 값을 다시 실수로 변환
console.log(height_float, typeof(height_float)); //출력 3

/*--> 나타나는 prompt에 185.3 입력시 출력 결과:

185.3 String;    -->출력 1(프롬프트는 사용자에게 입력받은 문자열을 그대로 결과로 돌려주므로 숫자를 입력해도 문자열을 반환)
185 "number"     -->출력 2(숫자열로 )
185.3 "number";  -->출력 3

*/