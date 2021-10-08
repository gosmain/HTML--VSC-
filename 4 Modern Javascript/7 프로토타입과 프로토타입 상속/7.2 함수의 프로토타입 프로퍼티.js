// F.prototype 프로퍼티는 [[Prototype]]과는 다릅니다. F.prototype은 new F()를 호출할 때 만들어지는 새로운 객체의 [[Prototype]]을 설정
// F.prototype의 값은 객체나 null만 가능. 다른 값은 무시
/* 지금까지 배운 내용은 생성자 함수에 "prototype"를 설정하고, 이 생성자 함수를 new를 사용해 호출할 때만 적용됨 ==>
일반 객체에 "prototype" 프로퍼티를 사용하면 아무런 일이 일어나지 않음 */


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
    let kim = new Person("kim",10,20,30); // new 라는 키워드를 붙이므로 위 person 함수가 객체를 찍어내는 생성자(constructor)이 됨
    let lee = new Person("lee",10,10,10);
    let ko = Person("ko",10,30,30);       //그냥 함수 호출 = 일반 함수 취급 = undefined

    document.write("kim.sum()", kim.sum()+"<br>");  
    document.write("lee.sum()", lee.sum());
    document.write("ko.sum()", ko.sum()+"<br>");  //객체 생성 X = undefined


//--------------------------------------------------------------------------------------------------------------
과제예시1; // "Prototype" 변경하기
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;           // 1
delete Rabbit.prototype.eats; // 2

alert(rabbit.eats); // ?

// 1번: true (delete 연산은 객체에 직접 적용됨. delete rabbit.eats는 rabbit에서 eats 프로퍼티를 제거하는데, rabbit엔 eats가 없음. 따라서 delete는 아무런 영향을 주지 않음)
// 2번: undefined (프로퍼티 eats가 프로토타입에서 삭제되었기 때문에 eats는 더이상 존재하지 않음)

