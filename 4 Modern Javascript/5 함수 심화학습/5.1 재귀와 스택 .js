// 재귀: 함수 내부에서 자기 자신을 호출하는 것을 나타내는 프로그래밍 용어
// 재귀는 재귀적 순회를 구현할때 사용하기 용이
// 재귀적 구조: 재귀적으로 정의된 자료구조인 재귀적 자료 구조는 자기 자신의 일부를 복제하는 형태의 자료 구조
// 재귀적 호출: 재귀적 호출(Recursive call)란 일정 조건을 만족할 경우 자기 자신을 호출하는 것

예1; // if 대신 조건부 연산자 ?를 사용한 제곱 함수
function pow(x, n) {
  return (n == 1) ? x : (x * pow(x, n - 1));
}

예2;
let company = { // 구조가 복잡하여 함수에 너무 많은 중첩 반복문이 필요함. 따라서, 재귀적 구조 사용
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

//모든 재귀 함수는 반복문을 사용한 함수로 다시 작성할 수 있음. 그러나 상당수 작업은 재귀를 사용해도 만족할 만큼 빠르게 동작함. 재귀를 사용하면 구현과 유지보수가 쉽다는 장점도 있음.


//------------------------------------------------------------------------------------------------------------------------------------------
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


//------------------------------------------------------------------------------------------------------------------------------------------
과제예시1; // 주어진 숫자까지의 모든 숫자 더하기

// 등차수열의 합공식 sumTo(n) = n*(n+1)/2 사용하기: (가장빠름: 수학의 힘!)
function sumTo(n) {
  return n * (n + 1) / 2;
}
alert( sumTo(100) );

// 반복문 사용하기:        (두번째로 빠름)
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
alert( sumTo(100) );

// 재귀 사용하기:          (가장 느림: 중첩 호출과 실행 스택 관리가 추가로 필요)
function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}
alert( sumTo(100) );


과제예시2; // 파보나치 수 계산하기 (황금 비율 등 수많은 자연 현상과 관련이 있음)

function fib(n) { // 재귀를 사용할 시 n이 너무 커지면 서브호출이 늘어나 연산 속도가 느려짐
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) { // 따라서, 반복문이 용이
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
alert(fib(3));  // 2
alert(fib(7));  // 13
alert(fib(77)); // 5527939700884757


과제예시3; // 단일 Linked List 출력하기

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  let tmp = list; // 임시 변수: tmp (매개변수 list는 함수를 확장할 때 다른 용도로 사용될 수 있기 때문에)

  while (tmp) {
    alert(tmp.value);
    tmp = tmp.next;
  }
}
printList(list);

// 위와 같은 함수. 하지만 반복문이 아닌 재귀를 사용
function printList(list) {
  alert(list.value); // 현재 요소를 출력합니다.

  if (list.next) {
    printList(list.next); // 같은 방법을 사용해 나머지 요소를 출력합니다.
  }
}
printList(list);
// 결국, 반복문은 중첩함수가 없기에 리소스를 더욱 효율적으로 사용하며 재귀는 코드길이가 짧고 이해하기가 쉬움


과제예시4; // 단일 linked list 역순(reverse)로 출력하기

let list = { /* 과제예시 3의 linked list */ };

// 재귀를 이용한 방법
function printReverseList(list) { 

  if (list.next) {
    printReverseList(list.next); // 리스트의 나머지 요소들을 먼저 출력
  }
  alert(list.value);
}

printReverseList(list); // 현재 요소를 마지막에 출력

// 반복문을 이용한 방법
function printReverseList(list) {
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    alert(arr[i]);
  }
}
printReverseList(list);

// 두 방법 모두 리스트를 앞에서부터 따라가면서 각 요소를 실행 컨텍스트 스택에 저장해 놓았다가 스택 맨 뒤에서부터 요소를 차례대로 출력 (마지막 값을 바로 구할 방법이 없음)
