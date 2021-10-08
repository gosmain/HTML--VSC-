//다양한 배열 객체 메소드 : https://opentutorials.org/module/3989/26231
//확장 가능한 계산기
function Calculator() {
    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
}


// 객체 매핑하기
let users = [
  {name: "John", surname: "Smith", id: 1},
  {name: "Pete", surname: "Hunt", id: 2},
  {name: "Mary", surname: "Key", id: 3}
];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

alert(usersMapped[0].id); // 1
alert(usersMapped[0].fullName); // John Smith

