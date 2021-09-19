// Constructor Function (생성자 함수) (객체를 찍어내는 공장을 만드는 constructor 함수)  
// 1) 생성자 함수는 함수 이름의 첫 글자가 대문자로 시작(일반 함수와 차별화)
// 2) 반드시 new 연산자를 붙여 실행
    function Person(name,first,second,third){
    this.name = name;                    // 객체의 속성들(변수들)은 생성자 함수 안에 넣는 것이 일반적
    this.first = first;
    this.second = second;
    this.third = third;
    }
    Person.prototype.sum = function(){   // 객체의 메소드들은 생성자의 prototype에 추가하는 것이 일반적 (메모리 절약)
        return this.first+this.second+this.third;
    }
    let kim = new Person('kim',10,20,30); // new 라는 키워드를 붙이므로 위 person 함수가 객체를 찍어내는 생성자(constructor)이 됨
    let lee = new Person('lee',10,10,10);
    let ko = Person('ko',10,30,30);       //그냥 함수 호출 = 일반 함수 취급 = undefined

    document.write('kim.sum()', kim.sum()+'<br>');  
    document.write('lee.sum()', lee.sum());
    document.write('ko.sum()', ko.sum()+'<br>');  //객체 생성 X = undefined


//--------------------------------------------------------------------------------------------------------------
// class 또한 객체를 만들어 내는 공장
// class를 이용해 객체 안에 소속된 함수(메소드) 생성

    class Person{
    constructor(name,first,second,third){ 
        this.name = name;
        this.first = first;
        this.second = second;
        this.third = third;
    }
    sum(){  //메소드
        return this.first+this.second+this.third;
    }
}
let kim = new Person('kim',10,20,30);
let ko = new Person('ko',10,10,10);
document.write('kim.sum()', kim.sum()+'<br>');  
document.write('ko.sum()', ko.sum()+'<br>');



//--------------------------------------------------------------------------------------------------------------
// 상속 (extends)

    class Person2{
        constructor(name,first,second,third){ 
            this.name = name;
            this.first = first;
            this.second = second;
            this.third = third;
        }
        sum(){   
            return this.first+this.second+this.third;
        } 
    }
    class PersonAvg extends Person2{    // 상속 = 유지보수 용이
        avg(){
            return (this.first+this.second+this.third)/3;
        }
    }
let kim2 = new PersonAvg('kim',10,20,30);
let ko2 = new PersonAvg('ko',10,10,10);
document.write('kim.sum()', kim2.sum()+'<br>');  
document.write('ko.sum()', ko2.avg()+'<br>');



//--------------------------------------------------------------------------------------------------------------
// 상속(super) = 자식 클래스에서 부모 클래스 호출기능

    class Person3{
        constructor(name,first,second,third){ 
            this.name = name;
            this.first = first;
            this.second = second;
            this.third = third;
        }
        sum(){   
            return this.first+this.second+this.third;
        } 
    }
    class PersonAvg2 extends Person3{           // 자식 클래스에만 새로운 인자 추가할 시 사용하는 기능 = super
        constructor(name,first,second,third,forth){
            super(name, first, second, third);  // super로 상위 클레스 Person 3의 객체 호출 
            this.forth = forth;                 // 새로운 인자 추가
        }
        sum(){
            return super.sum()+this.third;      //상위 클레스 Person 3의 sum함수 메서드 형태로 호출
        }
        avg(){
            return (this.first+this.second+this.third)/3;
        }
    }
let kim3 = new PersonAvg2('kim',10,20,30);
let ko3 = new PersonAvg2('ko',10,10,10);
document.write('kim.sum()', kim3.sum()+'<br>');  
document.write('ko.sum()', ko3.avg()+'<br>');



//--------------------------------------------------------------------------------------------------------------
// object.create() = 객체를 상속받는 객체 생성

    let superObj = {superVal:"super"}
    let subObj = Object.create(superObj); //object 객체, creat 메서드
    subObj.subVal = "sub";
    document.write("subObj.subVAl =", subObj.subVal);



    kim = {name: 'kim', first:10, second:20,
        sum:function(){
            return this.first+ this.second
        }
    }

    let ko = Object.create(kim);
    ko.__proto__ = kim;          //__proto__ 또한 object.create()과 같은 역할을 수행
    ko = {name: 'ko', first:10, second:20,
        avg = function(){
            return (this.first + this.second)/2;
        }
    }
    document.write('ko.sum()', ko.sum());  //kim의 sum 함수를 상속받아 사용
    document.write('ko.avg()', ko.avg());



//--------------------------------------------------------------------------------------------------------------
// call / bind 메서드 (객체 밖의 함수를 상속)

    var ko = {name: "ko", first:10, second:20}
    var kim = {name: "kim",first:40, second:30}
    function sum(prefix){                          //객체 밖의 함수
        return prefix+(this.first+this.second);
    }
    document.write("sum.call(kim)", sum.call(kim, ": "));

    var koSum = sum.bind(ko, "= ");
    console.log("ko sum()", koSum());
