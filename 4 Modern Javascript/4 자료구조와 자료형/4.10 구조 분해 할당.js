구조분해할당 // destructing assignment (배열과 객체를 변수로 연결)

// 객체와 배열은 JS에서 가장 많이 쓰이는 자료구조
// 객체: 키를 가진 데이터 여러 개를 하나의 entity에 저장
// 배열: 컬렉션에 데이터를 순서대로 저장


//-----------------------------------------------------------------------------------------------------------------------------------
// 객체나 배열에 저장된 데이터 전체가 아닌 일부만 필요한 경우 : 구조 분해 할당 사용

// 배열 분해하기 : 

예시1 ;
let nickName = ["Mandu", "Ko"]
let [firstName, surName] = nickName; // firstName엔 nickName[0]을 surname엔 nickName[1]을 할당

alert(firstName); // Mandu
alert(surName);  // Ko

예시2 ; // 객체 프로퍼티 사용
let user = {};
[user.name, user.surname] = "Gyubin Park".split(' '); // 공백으로 구분

alert(user.name); // Gyubin

예시3 ; // .entries로 반환
let user = {
    name: "Gyubin",
    age: 21
  };
  
  // .entries()로 [키, 값]을 반환한 후, 객체의 키와 값 순회하기
  for (let [key, value] of Object.entries(user)) {
    alert(`${key}:${value}`); // name:Gyubin, age:21이 차례대로 출력
};

예시4 ; // 변수 교환 트릭
const boy = "Youngmin";
const girl = "Gyubin";

// 변수 boy엔 Gyubin, 변수 girl엔 Youngmin이 저장되도록 값을 교환함
[boy, girl] = [girl, boy];

alert(`${boy} ${girl}`); // Gyubin Youngmin

예시5 ; // '...'로 나머지 요소 가져오기
let info = ["Gyubin", "Park", "Student", "of HUFS"];
let [name1, name2, ...rest] = info;

alert(name1); // Gyubin
alert(name2); // Park

// `rest`는 배열
alert(rest[0]); // Student
alert(rest[1]); // of HUFS
alert(rest.length); // 2

예시6 ; // 기본값
let [surname = prompt('성을 입력하세요.'), firstname = prompt('이름을 입력하세요.')] = ["박"]; // name의 prompt만 실행됨

alert(surname);    // 박 (배열에서 받아온 값)
alert(firstname);  // prompt에서 받아온 값


//-----------------------------------------------------------------------------------------------------------------------------------
//객체 분해하기 : 

let options = {
  title: "Menu",
  width:  100,
  height: 200
};

let {width: w, height: h, title, length = 100} = options; // 프로퍼티가 없는 경우 '='를 사용해 기본값을 설정
alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200

예시1 ; // 나머지 패턴 '...'
let options = {
  title: "Menu",
  height: 200,
  width:  100
};

let {title, ...rest} = options; // title엔 "Menu", rest엔 {height: 200, width: 100}이 할당

alert(rest.height);  // 200 
alert(rest.width);   // 100


//-----------------------------------------------------------------------------------------------------------------------------------
// 중첩 구조 분해
let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

let { // 구조 분해
  size: { 
    width,
    height
  },
  items: [item1, item2],
  title = "Menu" 
} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
alert(item1);  // Cake
alert(item2);  // Donut

예제1 ;
let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

function showMenu({
  title = "Untitled",
  width: w = 100, 
  height: h = 200, 
  items: [item1, item2]
}) {
  alert( `${title} ${w} ${h}` ); // My Menu 100 200
  alert( item1 ); // Item1
  alert( item2 ); // Item2
}

showMenu(options);


//-----------------------------------------------------------------------------------------------------------------------------------
과제예시1 ; // 최대 급여 계산하기
let salaries = {
  "Kim": 100,
  "Ko": 300,
  "Park": 250
};

function topSalary(salaries) {

  let max = 0;
  let maxName = null;

  for(const [name, salary] of Object.entries(salaries)) { // Object.entries() = [키, 값] 쌍을 담은 배열을 반환
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }

  return maxName;
}
