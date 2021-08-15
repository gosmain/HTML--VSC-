변수 가림 현상 (shadowing)

function shadowing_example() {
    console.log("F", val);
    val++;
}

var val = 0;
shadowing_example();
console.log("0", val);

출력결과 : F 0
          0 1
//------------------------------
function shadowing_example() {
    var val = 5;
    console.log("F", val);
    val++;
}

var val = 0;             // 순서 1번
shadowing_example();     // 순서 2번 - 함수 호출 = 함수 안으로 들어감 (즉 val = 5가 되므로 val = 0이 가려짐)
console.log("0", val);   // 다시 함수를 빠져나온 후 원래 val = 0으로 돌아오고 함수 속 val = 5가 가려짐
출력결과 : F 5
          0 0

// 따라서, 함수 안에서만 값이 유지되어야 하는 변수는 그 함수 안에서 var 키워드로 선언하고 사용
// 여러 함수에서 값을 유지하면서 사용해야 하는 변수는 여러 함수를 포괄하는 곳(바깥)에 선언 후 사용