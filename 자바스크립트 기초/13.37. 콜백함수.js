*콜백 함수를 사용하는 setTimeout()와 setInterval() 함수
(콜백 함수: 조건을 등록해 두고 그 조건이 만족될 시 호출되는 함수)
--> setTimeout() : 설정한 시간에 콜백 함수를 호출
--> setInterval() : 타이머를 설정하고 해당 시간이 지날 때마다 콜백 함수를 호출 (반복알림)
예: setInterval(callback, 5000); <시간은 밀리초 단위>

--> clearInterval(), clearTimeout() 함수들로 위 명령 취소 가능