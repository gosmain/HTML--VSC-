8e3 = 8 * 1000; // (e = 10의 거듭제곱)

let num = 1e-6; // 0.000001

num.toString(base); // num.toString(base) 메서드는 base 진법으로 num을 표현한 후, 이를 문자형으로 변환해 반환
    let num = 255;
        alert(num.toString(16)); //ff (16진수 색)
        alert(num.toString(2));  //11111111 (2진법)


//소수
Math.floor() //내림 3.1 -> 3, -1.1 -> -2
Math.ceil()  //올림 3.1 -> 4, -1.1 -> -1
Math.round() //반올림 3.1 -> 3, 3.6 -> 4, -1.1 -> -1
Math.trunc() //소수점 무시 (소수점 그냥 삭제)

let num = 12.36;
alert(num.toFixed(1)); // "12.4" (MAth.round와 동일한 역할 수행)

alert(parseFloat('12.5em')); // 12.5
alert(parseInt('12.3')); // 12, 정수 부분만 반환됩니다.

Math.random() //0과 1사이의 무작위 수를 반환
Math.max(a, b, c) / Math.min(a, b, c); //인수 중 최대, 최솟값을 반환
Math.pow(x, n); //x를 n번 거듭제곱한 값을 반환

