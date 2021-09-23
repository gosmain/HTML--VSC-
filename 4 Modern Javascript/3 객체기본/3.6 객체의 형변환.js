let user = {
    name: "John",
    money: 1000,
  
    // hint가 "string"인 경우
    toString() {
      return `{name: "${this.name}"}`;
    },
  
    // hint가 "number"나 "default"인 경우
    valueOf() {
      return this.money;
    }
  
};
  alert(user); // toString -> {name: "John"}
  alert(+user); // valueOf -> 1000
  alert(user + 500); // valueOf -> 1500 


// 객체-원시형 변환엔 다음 알고리즘이 적용.

// 1) 객체에 obj[Symbol.toPrimitive](hint)메서드가 있는지 찾고, 있다면 호출

// 2) 1)에 해당하지 않고 hint가 "string"이라면, obj.toString()이나 obj.valueOf()를 호출
// 3) 1)과 2)에 해당하지 않고, hint가 "number"나 "default"라면, obj.valueOf()나 obj.toString()을 호출

// obj.toString()만 사용해도 '모든 변환’을 다 다룰 수 있기 때문에, 실무에선 obj.toString()만 구현해도 충분한 경우가 대부분.
