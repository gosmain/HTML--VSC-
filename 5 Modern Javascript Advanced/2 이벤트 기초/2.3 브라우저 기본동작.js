mousedown, keydown, contextmenu, submit // 등등... 각 이벤트에 대응하는 브라우저 기본 동작

// Js를 사용하면 기본동작을 명시적으로 막을 수 있음
event.preventDefault();
return false; // 이 방법은 on(event)을 통해 할당한 핸들러에서만 동작


/* 
addEventListener의 passive: true옵션은 브라우저에게 기본동작을 막지 않을 것이라는 정보를 전달
: 이 옵션은 모바일에서 발생하는 touchstart와 touchmove를 다룰 때 유용
= 브라우저가 모든 핸들러를 처리하지 않아도 스크롤링을 시작할 수 있기 때문 
*/
