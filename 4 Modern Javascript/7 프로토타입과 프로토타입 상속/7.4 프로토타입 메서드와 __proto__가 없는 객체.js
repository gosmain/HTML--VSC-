// 더이상 __proto__는 사용하지 않고 아래 모던 메서드들을 사용:

Object.create(proto, [descriptors]) // [[Prototype]]이 proto인 객체를 생성. 참조 값은 null일 수 있고 프로퍼티 설명자를 넘기는 것도 가능.
Object.getPrototypeOf(obj) // obj의 [[Prototype]]을 반환(__proto__ getter와 동일)
Object.setPrototypeOf(obj, proto) // obj의 [[Prototype]]을 proto로 설정(__proto__ setter와 동일)

예시1;
let animal = {
  eats: true
};

// 프로토타입이 animal인 새로운 객체를 생성합니다.
let rabbit = Object.create(animal);

alert(rabbit.eats); // true

alert(Object.getPrototypeOf(rabbit) === animal); // true

Object.setPrototypeOf(rabbit, {}); // rabbit의 프로토타입을 {}으로 바꿉니다.

예시2;
let animal = {
    eats: true
};
  
let rabbit = Object.create(animal, {
    jumps: {
        value: true
    }
});
alert(rabbit.jumps); // true


//--------------------------------------------------------------------------------------------------------------
Object.create//를 사용하면 객체의 얕은 복사본(shallow-copy)을 만들 수 있음:
Object.create//를 사용하면 for..in을 사용해 프로퍼티를 복사하는 것보다 더 효과적으로 객체를 복제할 수 있음:
let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));


Object.create(null)//을 사용하면 프로토타입이 없는 객체를 만들 수 있음. 
// 이런 객체는 '순수 사전’처럼 사용. 단, toString같은 내장 메서드는 사용 불가능


//--------------------------------------------------------------------------------------------------------------
추가메서드들;
Object.keys(obj) / Object.values(obj) / Object.entries(obj) // obj 내 열거 가능한 프로퍼티 키, 값, 키-값 쌍을 담은 배열을 반환합니다.
Object.getOwnPropertySymbols(obj) // obj 내 심볼형 키를 담은 배열을 반환.
Object.getOwnPropertyNames(obj)   // obj 내 문자형 키를 담은 배열을 반환.
Reflect.ownKeys(obj)              // obj내 키 전체를 담은 배열을 반환.
obj.hasOwnProperty(key) // 상속받지 않고 obj 자체에 구현된 키 중 이름이 key인 것이 있으면 true를 반환.
Object.keys// 를 비롯하여 객체의 프로퍼티를 반환하는 메서드들은 객체가 ‘직접 소유한’ 프로퍼티만 반환함. 상속 프로퍼티는 for..in을 사용해 얻을 수 있음


//--------------------------------------------------------------------------------------------------------------


과제예시2; // 호출 간의 차이점
function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.sayHi = function() {
    alert(this.name);
}
let rabbit = new Rabbit("Rabbit");

// this는 실제 점 앞에 있는 객체를 나타내기 때문에 첫 번째 호출에서만 this가 rabbit이고, 
// 다른 호출에서의 this는 Rabbit.prototype임:
rabbit.sayHi();                         // Rabbit
Rabbit.prototype.sayHi();               // Undefined
Object.getPrototypeOf(rabbit).sayHi();  // Undefined
rabbit.__proto__.sayHi();               // Undefined
