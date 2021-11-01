// JS는 다중상속을 지원하지 않는데, 믹스인을 사용하면 메서드를 복사해 프로토타입에 구현 가능

// 믹스인
let sayHiMixin = {
    sayHi() {
        console.log(`Hello ${this.name}`);
    },
    sayBye() {
        console.log(`Bye ${this.name}`);
    }
};
  
// 사용법:
class User extends Person{ // 믹스인을 활용하면 이렇게 다른 클래스를 상속받는 동시에, 믹스인에 구현된 추가 메서드도 사용 가능 
    constructor(name) {
        this.name = name;
    }
}

// 상속없이 메서드만 간단히 복사
Object.assign(User.prototype, sayHiMixin);

// 이제 User가 인사를 할 수 있음
let user = new User("Dude"); 
user.sayHi(); // Hello Dude!

or

new User("Dude").sayHi(); // Hello Dude!
 
