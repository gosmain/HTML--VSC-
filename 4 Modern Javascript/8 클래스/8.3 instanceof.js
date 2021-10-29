Instanceof연산자
// 객체가 특정 클래스에 속하는지 아닌지 확인할 수 있음 (상속 관계또한 확인해줌)
// 사용예시 : instance를 사용해 인수의 타입에 따라 이를 다르게 처리하는 다형적(polymorphic)인 함수

class Rabbit {}
let rabbit = new Rabbit();

console.log(rabbit instanceof Rabbit); // true   (생성자함수<function>, Array<배열: 내장클레스> 에서도 사용 가능)


/*              (동작대상)                                          (반환값)
typeof      => 원시형                                          => 문자열
{}.toString => 원시형, 내장 객체, Symbol.toStringTag가 있는 객체 => 문자열
instanceof  => 객체                                            => true or false
*/