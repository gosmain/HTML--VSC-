// 브라우저 환경에서의 전역 객체 : window
// node 환경에서의 전역 객체 : global

// 프로젝트 전체에서 꼭 필요한 변수만 전역 객체에 저장하도록 하고, 전역 변수는 가능한 한 최소한으로 사용
// 최대한 쓰지 않아야함. (인풋 변수를 사용해야 테스트도 쉽고, 에러도 적음)



// 모든 스크립트에서 현재 사용자(current user)에 접근할 수 있게 이를 전역 객체에 추가
window.currentUser = {
    name: "John"
};
  
  // 아래와 같은 방법으로 모든 스크립트에서 currentUser에 접근할 수 있음
  alert(currentUser.name);  // John
  
  // 지역 변수 'currentUser'가 있다면, 지역 변수와 충돌 없이 전역 객체 window에서 이를 명시적으로 가져올 수 있음
  alert(window.currentUser.name); // John