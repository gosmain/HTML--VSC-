// 자바스크립트의 모든 객체엔 숨김 프로퍼티 [[Prototype]]이 있는데, 이 프로퍼티는 객체나 null을 가리킴
// [[Prototype]]이 참조하는 객체를 '프로토타입’이라고 함

let animal = {
    eats: true
};
  
let rabbit = {
    jumps: true,
    __proto__: animal // __proto__는 [[Prototype]]의 getter·setter로 쓰이는데, 요즘엔 잘 쓰지 않음. 
};
  
// Object.keys는 객체 자신의 키만 반환
alert(Object.keys(rabbit)); // jumps

// for..in은 객체 자신의 키와 상속 프로퍼티의 키 모두를 순회
for(let prop in rabbit) alert(prop); // jumps, eats

//--------------------------------------------------------------------------------------------------------------
과제예시1; // 프로토타입 이해하기

let animal = {
    jumps = null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};
alert(rabbit.jumps); // true - rabbit에서 반환
delete rabbit.jumps;
alert(rabbit.jumps); // null - animal에서 반환 (원래 객체에 .jumps가 없으니 상속된 프로토타입을 search)
delete rabbit.jumps;
alert(rabbit.jumps); // undefined - 더 이상 프로퍼티를 찾을 수 없음
delete rabbit.jumps;


과제예시2; // 검색 알고리즘

let head = {
    glasses: 1
};
let table = {
    pen: 3,
    __proto__: head
};
let bed = {
    pillow: 2,
    sheet: 1,
    __proto__: table
};
let pockets = {
    money: 2000,
    __proto__: bed
};
alert(pockets.pen); // 3
alert(bed.glasses); // 1
alert(table.money); // undefined


과제예시3; // 햄스터 두 마리

let hamster = {
    stomach: [],

    eat(food) { // this.stomach.push대신 this.stomach 할당 (push를 하면 개인 햄스터 stomach이 아닌 전체 햄스터 stomach 배열에 숫자가 할당됨)
        this.stomach = [food];
    }
}

let speedy = {
    __proto__: hamster
}
let lazy = {
    __proto__: hamster
}

speedy.eat("apple");

alert(speedy.stomach); // apple
alert(lazy.stomach);   // <nothing>