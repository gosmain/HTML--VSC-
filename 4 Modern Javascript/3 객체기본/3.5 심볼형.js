// '심볼(symbol)'은 원시형 데이터로, 유일무이한 식별자를 만드는 데 사용

let id = Symbol("id") // 심볼 id생성 + "id"라는 설명이 추가

// 심볼은 유일성이 보장되는 자료형이기 때문에, 설명이 동일한 심볼을 여러 개 만들어도 각 심볼값은 다름 
// 따라서, 심볼에 붙이는 설명(심볼 이름)은 어떤 것에도 영향을 주지 않는 이름표 역할만을 수행
let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false