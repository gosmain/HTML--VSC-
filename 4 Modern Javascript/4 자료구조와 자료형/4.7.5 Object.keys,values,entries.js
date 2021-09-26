반복(iteration)
// 1) 주요 메서드 : .keys(), .values(), .entries()

// 위 세 메서드를 쓸 수 있는 자료구조 :
map.keys(), set.values(), array.entries(); // 모두 iterable 객체 반환

// 2) 일반 객체용 반복 메서드 (for..in처럼 키가 심볼형인 프로퍼티 무시):
Object.keys(obj);    // 객체의 키만 담은 배열을 반환
Object.values(obj);  // 객체의 값만 담은 배열을 반환
Object.entries(obj); // [키, 값] 쌍을 담은 배열을 반환

차이점 ;  
// 1. obj.key()호출, Object.keys(obj)호출
// 2. Object.~~ 로 이루어진 일반객체용 반복 메서드는 iterable 객체가 아닌 배열을 반환


과제예시1; // 프로퍼티 값 더하기
let salaries = {
    "Kim": 100,
    "Ko": 300,
    "Park": 250
};

function sumSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }
  
    return sum;
};
  
alert( sumSalaries(salaries) ); // 650


과제예시2; // 프로퍼티 개수 세기
let user = {
    name: 'Gyubin',
    age: 21
};

function count(obj) {
    return Object.keys(obj).length;
};

alert(count(user)); // 2

