// 이벤트 종류:

마우스이벤트;
click              // 요소 위에서 마우스 왼쪽 버튼을 눌렀을 때
contextmenu        // 요소 위에서 마우스 오른쪽 버튼을 눌렀을 때
mouseover/mouseout // 마우스 커서를 요소 위/밖으로 움직였을 때
mousedown/mouseup  // 요소 위에서 마우스 왼쪽 버튼을 누르고 있을때, 마우스 버튼을 뗄 때
mousemove          // 마우스를 움직일 때

폼요소이벤트;
submit  // 사용자가 <form>을 제출할 때 발생
focus   // 사용자가 <input>과 같은 요소에 포커스 할 때 발생

키보드이벤트;
keydown/keyup // 사용자가 키보드 버튼을 누르거나 뗄 때 발생


//이벤트 핸들러------------------------------------------------------------------------------------------------------------------------------------------
// 선호도: 3 > 2 > 1

1. 
HTML속성;    // HTML만 사용 (onclick)
<input type = "button" onclick = "alert('클릭!')" value = "클릭해 주세요."></input>

2.
DOM프로퍼티; // HTML과 JS 둘다 사용
<input type = "button" id = "button" value = "클릭해 주세요"></input>
button.onclick = function() {
    alert('클릭!');
};

3./ // addEventListener
// 위 두 방식은 하나의 이벤트에 복수의 핸들러를 할당할 수 없음 (예: 버튼 클릭시 강조하면서 메세지도 출력)
// ddEventListener를 사용하여 여러개의 핸들러를 할당할 수 있음

<input type = "button" id = "button" value = "클릭해 주세요"></input>

function handler1() {
alert('감사합니다!');
};
function handler2() {
alert('다시 한번 감사합니다!');
}

button.onclick = () => alert("안녕하세요.");
button.addEventListener("click", handler1); // 감사합니다!
button.addEventListener("click", handler2); // 다시 한번 감사합니다!


// addEventListener를 이용하면 함수뿐만 아니라 객체와 클래스를 이벤트 핸들러로 할당할 수 있음

<button id = "elem">클릭해 주세요.</button>

class Menu {
    handleEvent(event) { // mousedown -> onMousedown
      let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
      this[method](event);
    }
    onMousedown() {
      elem.innerHTML = "마우스 버튼을 눌렀습니다.";
    }
    onMouseup() {
      elem.innerHTML += " 그리고 버튼을 뗐습니다.";
    }
}

let menu = new Menu();
elem.addEventListener('mousedown', menu);
elem.addEventListener('mouseup', menu);