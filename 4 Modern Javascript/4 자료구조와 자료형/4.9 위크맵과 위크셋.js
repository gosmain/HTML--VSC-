위크맵 
// 맵과 위크맵의 첫번째 차이: 위크맵의 키는 반드시 객체
let weakMap = new WeakMap();
let obj = {};

weakMap.set(obj, "ok"); //정상적으로 동작(객체 키)
weakMap.set("test", "Whoops"); // Error: Invalid value used as weak map key <문자열("test")은 키로 사용할 수 없음>

// 위크맵의 키로 사용된 객체를 참조하는 것이 아무것도 없다면 해당 객체는 자동으로 삭제됨
let Gyubin = {name: "Gyubin"};

let weakMap = new WeakMap();
weakMap.set(Gyubin, "...");

Gyubin = null; // 참조를 덮어씀. Gyubin을 나타내는 객체는 이제 메모리에서 지워짐


//------------------------------------------------------------------------------------------------------------------------------------------
// 맵과 위크맵 두번째 차이: 위크맵은 반복작업과 keys(), values(), entries() 메서드를 지원하지 않음
// 위크맵이 지원하는 메서드는 아래 4:
weakMap.get(key);
weakMap.set(key, value);
weakMap.delete(key);
weakMap.has(key); // 위크맵을 지원하는 메서드가 적은이유 : 가비지 컬렉션 동작 방식 


// 유스 케이스: 추가 데이터------------------------------------------------------------------------------------------------------------------------------------------
// 위크맵은 '부차적인 데이터'를 저장할 곳이 필요할 때 진가를 발휘
// 쓸모없는 데이터를 수동으로 비워주는게 골치아플 때, 위크맵을 유용하게 사용 가능

예시 ; // 사용자의 방문 횟수를 세어 주는 코드
// 📁 visitsCount.js
let visitsCountMap = new WeakMap(); // 위크맵에 사용자의 방문 횟수를 저장

function countUser(user) { // 사용자가 방문하면 방문 횟수를 늘려줌
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
};

// 📁 main.js
let Gyubin = {name: "Gyubin"};

countUser(Gyubin); // Gyubin의 방문 횟수를 증가

Gyubin = null; // Gyubin의 방문 횟수를 셀 필요가 없어지면 Gyubin을 null로 덮어씌움


// 유스 케이스: 캐싱(caching)------------------------------------------------------------------------------------------------------------------------------------------
// 캐싱: 시간이 오래 걸리는 작업의 결과를 저장해서 연산 시간과 비용을 절약해주는 기법


//------------------------------------------------------------------------------------------------------------------------------------------
위크셋
/* 셋과 유사하나, 객체만 저장할 수 있음
*  셋과 마찬가지로 지원하는 메서드는 단출함 : add, has, delete 사용할 수 있고 size, keys()나 반복작업 관련 메서드 사용 불가
*  위크맵처럼 부차적인 데이터를 저장하는데 사용. 
*  하지만, 위크맵처럼 복잡한 데이터를 저장하지 않고 '예'나 '아니오'같은 간단한 답변을 얻는 용도로 사용*/

예시 ; // 사용자의 방문 여부 추적 코드

let visitedSet = new WeakSet();

let Gyubin = {name: "Gyubin"};
let pete = {name: "Pete"};
let mary = {name: "Mary"};

visitedSet.add(Gyubin); // Gyubin이 사이트를 방문
visitedSet.add(pete);   // 이어서 Pete가 사이트를 방문
visitedSet.add(Gyubin); // 이어서 Gyubin이 다시 사이트를 방문

// visitedSet엔 두 명의 사용자가 저장

alert(visitedSet.has(Gyubin)); // true // Gyubin의 방문 여부를 확인


alert(visitedSet.has(mary)); // false // Mary의 방문 여부를 확인

Gyubin = null; // visitedSet에서 Gyubin을 나타내는 객체가 자동으로 삭제


// 위크셋과 위크맵의 가장 큰 단점: 반복 작업 불가능: 위크맵과 위크셋은 객체와 함께 ‘추가’ 데이터를 저장하는 용도로 쓸 수 있음