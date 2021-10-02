// 재귀 알고리즘 (재귀적으로 정의된 자료구조인 재귀적 자료 구조는 자기 자신의 일부를 복제하는 형태의 자료 구조)


let company = { // 동일한 객체(간결성을 위해 약간 압축함)
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
};

  function sumSalaries(department) { // 급여 합계를 구해주는 함수
    if (Array.isArray(department)) { // 첫 번째 경우
      return department.reduce((prev, current) => prev + current.salary, 0); // arr.reduce = 배열의 요소를 합함
    } else { // 두 번째 경우
      let sum = 0;
      for (let subdep of Object.values(department)) {
        sum += sumSalaries(subdep); // 재귀 호출로 각 하위 부서 임직원의 급여 총합을 구함
      }
      return sum;
    }
  }
  
  alert(sumSalaries(company)); // 7700 (하위 부서와 상관없이 원하는 값을 구할 수 있음)



// 연결 리스트 (Linked list) <요소를 쉽게 재배열 가능함>
// 보통 객체를 정렬하여 저장하고 싶다면 가장 먼저 떠오르는 자료구조는 배열 (하지만 배열은 요소 '삽입'과 '삭제'가 쉽지않고 시간이 오래걸림)
// 따라서, 빠르게 '삽입' 또는 '삭제'를 해야할때 Linked list 자료구조가 도움됨

let list = {value: 1};
list.next = {value: 2};
list.next.next = {value: 3};
list.next.next.next = {value: 4};
list.next.next.next.next = null;

// 합치기:
list.next.next = secondList;
// 나누기:
let secondList = list.next.next;
// 요소 추가
list = {value: "new item", next: list}; // list 이전 맨 앞에 새로운 값 추가
// 요소 제거 
list.next = list.next.next; // list.next를 list.next.next로 덮어씀 :따라서, list.next 제거

//모든 재귀 함수는 반복문을 사용한 함수로 다시 작성할 수 있음. 그러나 상당수 작업은 재귀를 사용해도 만족할 만큼 빠르게 동작함. 재귀를 사용하면 구현과 유지보수가 쉽다는 장점도 있습니다.

