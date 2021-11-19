fetch구버전;

// XMLHttpRequest로 Get request 하기

let xhr = new XMLHttpRequest();

xhr.open("GET", "/my/url");

xhr.send();

xhr.onload = function() {
    if(xhr.status !== 200) { // 오류 처리
        alert("Error: " + xhr.status);
        return;
    }
    // xhr.response에서 응답을 가져옴
};

xhr.onprogress = function(event) { // 현재 진행상황 보고
    alert(`Loaded ${event.Loaded} of ${event.total}`);
};

xhr.onerror = function() {
    // handle non-HTTP error (예: 네트워크 에러)
}