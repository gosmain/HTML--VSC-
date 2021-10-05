// 함수는 하나의 동작을 나타냄
/*함수의 장점: 코드의 유지보수가 쉬워짐/ 코드의 길이가 짧아짐/ 함수의 이름을 통해 같은 함수를 사용하면 두 코드가 논리적으로 
같다는것을 한 번에 알 수 있으며, 적절한 이름을 통해 이 코드가 무슨 일을 하는지 한 눈에 알 수 있음(함수 이름의 중요성)*/


function 함수이름(복수의, 매개변수는, 콤마로, 구분) {
  /* 함수 본문 */
}

// 연속적인 규칙이 존재한다면 반복문으로 작성가능, 연속되지는 않지만 중복되는 내용이 있을 경우 함수가 용이:
    function two(){
        document.write('<li>2</li>');
        document.write('<li>3</li>');
        let message = "안녕하세요!";   //함수 내에서 선언한 변수(지역 변수)는 함수 안에서만 접근 가능

        alert(message);
    }
    document.write('<li>1</li>');
    two();
    document.write('<li>4</li>');   //이 줄로 인해 함수가 연속되지는 않음 하지만 위아래 중복된 함수가 사용됨
    two();                        


/* 함수는 입력과 출력으로 이루어져 있음
* 매개변수(parameter)와 인자(argument)를 이용하여 상황에 따라 더 다양하게 함수를 구현할 수 있음<둘다 입력에 해당>
* 외부변수 보다 매개변수와 지역변수가 코드가 깔끔하고 이해하기 쉬움
* 출력에 해당하는 것을 리턴(return)이라 부름 */


function sum (left, right){             //left,right = parameter
    document.write(left+right+'<br>');
}
sum(2,3);  //5                          //2,3 = argument
sum(3,4);  //7

function sum2(left, right) {            
    return left+right;   //(이미 출력받은 결과값에 추가적인 기능을 넣을때 편리/함수를 하나만 만들어 관리할 수 있기에 편리)
}
document.write(sum2(2,3)+'<br>');                                       //5
document.write('<div style="color:red">'+sum2(2,3)+'</div>');           //5(red)
document.write('<div style="font-size:3rem">'+sum2(2,3)+'</div>');      //5(big)


// 함수 이름짓기 (함수명은 동사)

showMessage()     // 메시지를 보여줌
getAge()          // 나이를 나타내는 값을 얻고 그 값을 반환함
calcSum()         // 합계를 계산하고 그 결과를 반환함
createForm()      // form을 생성하고 만들어진 form을 반환함
checkPermission() // 승인 여부를 확인하고 true나 false를 반환함


// 함수 선언과 함수 표현식
function sayHi() {   // (1) 함수 선언문 방식으로 함수 생성
  alert( "Hello" );
}
  
let func = sayHi;    // (2) 함수 복사 (sayHi옆에 괄호가 없으므로 함수 속 값이 아니라 함수 그 자체를 저장)
  
func(); // Hello     // (3) 복사한 함수를 실행(정상적으로 실행됩니다)!
sayHi(); // Hello    //     본래 함수도 정상적으로 실행됩니다.


let sayHi = function() { // 함수 표현식
  alert( "Hello" );
};
  
