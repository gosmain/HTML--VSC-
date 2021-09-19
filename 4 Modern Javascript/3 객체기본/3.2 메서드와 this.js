//객체는 사용자(user), 주문(order) 등과 같이 실제 존재하는 개체(entity)를 표현하고자 할 때 생성됩니다.


let Mymath = {                //객체를 사용하지 않고 개발은 불가능(Math.도 객체)
    PI : Math.PI,             //객체 속 변수 PI      
    random : function(){      //객체 속 함수(메서드)
        return Math.random();
    },
    floor:function(val){
        return Math.floor(val);
    }
}
document.write("Mymath.Pi = ", Mymath.PI + '<br>');
document.write("Mymath.random = ", Mymath.random() + '<br>');
document.write("Mymath.floor = ", Mymath.floor(3.9) + '<br>');


//--------------------------------------------------------------------------------------------------------------
//this = this가 속해있는 객체를 가르키도록 약속된 예약어

let ko = {
    name:'Ko',
    first:75,
    second:82,
    sum:function(f, s){ //함수 속 두 값을 입력받아야함. 그 후 연산
        return f+s;
    },
    sum2:function(){    
        return this.first + this.second;  // ko.first + ko.second와 같은것 (this=ko)
    }
}
document.write("ko.sum = "+ ko.sum(ko.first, ko.second)); //객체 안에 객체 호출 = 비효율적(시간)
document.write("ko.sum = "+ ko.sum2());                   //this로 효율적

