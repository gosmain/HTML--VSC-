// class 또한 객체를 만들어 내는 공장
// class를 이용해 객체 안에 소속된 함수(메소드) 생성

class Person{
    constructor(name, first, second, third){ 
        this.name = name;
        this.first = first;
        this.second = second;
        this.third = third;
    }
    sum(){  //메소드
        return this.first + this.second + this.third;
    }
}
let kim = new Person('kim', 10, 20, 30);
let ko = new Person('ko', 10, 10, 10);
kim.sum();
ko.sum();


//--------------------------------------------------------------------------------------------------------------
// 상속 (extends) <기존 클래스에 새로운 기능 추가>

class Person2{
    constructor(name, first, second, third){ 
        this.name = name;
        this.first = first;
        this.second = second;
        this.third = third;
    }
    sum(){   
        return this.first + this.second + this.third;
    } 
}
class PersonAvg extends Person2{    // 상속 = 유지보수 용이
    avg(){
        return (this.first + this.second + this.third)/3;
    }
}
let kim2 = new PersonAvg('kim2', 10, 20, 30);
let ko2 = new PersonAvg('ko2', 10, 10, 10);
kim2.sum();
ko2.avg();


//--------------------------------------------------------------------------------------------------------------
// <오버라이딩>상속(super) = 자식 클래스에서 부모 클래스 호출기능  <기존 클래스의 기능을 변경>

class Person3{
    constructor(name, first, second, third){ 
        this.name = name;
        this.first = first;
        this.second = second;
        this.third = third;
    }
    sum(){   
        return this.first + this.second + this.third;
    } 
}
class PersonAvg2 extends Person3{           // 자식 클래스에만 새로운 인자 추가할 시 사용하는 기능 = super
    constructor(name, first, second, third, forth){
        super(name, first, second, third);  // super로 상위 클레스 Person 3의 객체 호출 
        this.forth = forth;                 // 새로운 인자 추가
    }
    sum(){
        return super.sum() + this.forth;      //상위 클레스 Person 3의 sum함수 메서드 형태로 호출
    }
    avg(){
        return (this.first + this.second + this.third + this.forth) / 4;
    }
}
let kim3 = new PersonAvg2('kim3', 10, 20, 30, 40);
let ko3 = new PersonAvg2('ko3', 10, 20, 30, 40);
kim3.sum();
ko3.avg();


//--------------------------------------------------------------------------------------------------------------
// object.create() = 객체를 상속받는 객체 생성

let superObj = {superVal:"super"}
let subObj = Object.create(superObj); //object 객체, creat 메서드
subObj.subVal = "sub";
console.log("subObj.subVAl =", subObj.subVal);



kim = {name: 'kim', first:10, second:20,
    sum:function(){
        return this.first + this.second
    }
}

let ko = Object.create(kim);
ko.__proto__ = kim;          //__proto__ 또한 object.create()과 같은 역할을 수행
ko = {name: 'ko', first:10, second:20,
    avg = function(){
        return (this.first + this.second)/2;
    }
}
console.log('ko.sum()', ko.sum());  //kim의 sum 함수를 상속받아 사용
console.log('ko.avg()', ko.avg());


//--------------------------------------------------------------------------------------------------------------
// call / bind 메서드 (객체 밖의 함수를 상속)

let ko = {name: "ko", first:10, second:20}
let kim = {name: "kim",first:40, second:30}
function sum(prefix){                          //객체 밖의 함수
    return prefix+(this.first + this.second);
}
console.log("sum.call(kim)", sum.call(kim, ": "));

let koSum = sum.bind(ko, "= ");
console.log("ko sum()", koSum());