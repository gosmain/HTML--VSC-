// 함수를 함수의 인수로 전달하고, 필요하다면 인수로 전달한 그 함수를 "나중에 호출(called back)"하는 것이 콜백 함수의 개념
// 아래 예시에선 사용자가 "yes"라고 대답한 경우 showOk가 콜백이 되고, "no"라고 대답한 경우 showCancel가 콜백이 됩니다.
function ask(question, yes, no) { 
    if (confirm(question)) yes()
    else no();
  }
  function showOk() {
    alert("동의하셨습니다.");
  }
  function showCancel() {
    alert("취소 버튼을 누르셨습니다.");
  }
  // 사용법: (함수 showOk와 showCancel가 ask 함수의 인수로 전달됨 = 콜백 함수)
  ask("동의하십니까?", showOk, showCancel);


  function ask(question, yes, no) { //위 예시를 함수 표현식을 사용해서 리팩토링
    if (confirm(question)) yes()
    else no();
  }
  ask(
    "동의하십니까?", 
    function() { alert("동의하셨습니다."); }, 
    function() { alert("취소 버튼을 누르셨습니다."); }
  );