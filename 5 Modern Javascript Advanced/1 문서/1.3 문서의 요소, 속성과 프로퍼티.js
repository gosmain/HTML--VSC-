요소얻기;
let elem = document.getElementById("elem");
elem.style.background = "red";

querySelector // querySelectorAll은 CSS선택자를 활용할 수 있다는 점에서 유용
let elements = document.querySelectorAll("ul > li:last-child");
for (let elem of elements) {
    console.log(elem.innerHTML);
}

비표준속성접근;
elem.hasAttribute(name)        // 속성 존재 여부 확인
elem.getAttribute(name)        // 속성값을 가져옴
elem.setAttribute(name, value) // 속성값을 변경함
elem.removeAttribute(name)     // 속성값을 지움

// <body something = "non-standard"></body>
console.log(document.body.getAttribute("something"));


//문서 수정하기------------------------------------------------------------------------------------------------------------------------------------------
<ol id="ol">
    <li id = "zero">0</li>
    <li>1</li>
    <li>2</li>
</ol>
ol.before('before'); // <ol> 앞에 문자열 'before'를 추가
ol.after('after'); // <ol> 뒤에 문자열 'after를 추가

let liFirst = document.createElement('li');
liFirst.innerHTML = 'prepend';
ol.prepend(liFirst); // <ol>의 첫 항목으로 liFirst를 추가  <li>prepend</li>

let liLast = document.createElement('li');
liLast.innerHTML = 'append';
ol.append(liLast); // <ol>의 마지막 항목으로 liLast를 추가 <li>append</li>

zero.insertAdjacentHTML("afterend", "<li>0.5</li>"); // 직접 코드 타이핑해서 HTML을 추가하기

// ‘구식’ 메서드(더이상 사용 X)<이 메서드들은 전부 node를 반환>:
parent.appendChild(node);
parent.insertBefore(node, nextSibling);
parent.removeChild(node);
parent.replaceChild(newElem, node);

// 노드삽입, 삭제 메서드(위 구식 메서드보다 유연함):
node.append(노드or문자열)  // node 끝에 노드를 삽입
node.prepend(노드or문자열) // node 맨 앞에 노드를 삽입
node.before(노드or문자열)  // node 이전에 노드를 삽입
node.after(노드or문자열)   // node 다음에 노드를 삽입
node.replaceWith(노드or문자열) // node를 대체
node.remove()             // node를 제거
// 문자열을 삽입, 삭제할 땐 문자열을 ‘그대로’ 넣으면 됨


//Class------------------------------------------------------------------------------------------------------------------------------------------
classList;
elem.classList.add/remove("class") // elem에 클래스를 추가하거나 제거
elem.classList.toggle("class")     // 클래스가 존재할 경우 클래스를 제거하고, 그렇지 않은 경우엔 추가
elem.classList.contains("class")   // 존재 여부에 따라 true/false 반환

// classList는 클래스 하나를 관리할 수 있는 메서드 
// className은 클래스 전체를 문자열 형태로 반환해주는 프로퍼티 (클래스 전체를 관리할 때 유용)


//스크롤 관련 프로퍼티------------------------------------------------------------------------------------------------------------------------------------------
window.pageYOffset/pageXOffset // 현재 스크롤 정보 읽기

// 스크롤 상태 변경시키기:
window.scrollTo(pageX, pageY); // 절대 좌표
window.scrollBy(x, y); // 현재 스크롤 상태를 기준으로 상대적으로 스크롤 정보 변경


//좌표------------------------------------------------------------------------------------------------------------------------------------------
1. // 창 기준좌표 : elem.getBoundingClientRect();
2. // 문서 기준좌표 : elem.getBoundingClientRect()와 현재 스크롤 상태
// 창 좌표는 position:fixed에 해당하고 문서 좌표는 position absolute과 비슷
// 예시: 문서 내 특정 좌표에 위치시키고자 할때: position:absolute와 top,left를 사용

pageY = clientY + n//문서에서 세로 방향 스크롤에 의해 밀려난 부분의 높이;
pageX = clientX + n//문서에서 가로 방향 스크롤에 의해 밀려난 부분의 너비

function getCoords(elem) {
    let box = elem.getBoundingClientRect();
    
    return {
        top: box.top + window.pageYOffset,
        bottom: box.bottom + window.pageYOffset,
        left: box.left + window.pageXOffset,
        right: box.right + window.pageXOffset
    };
}

function createMessageUnder(elem, html) {
    let message = document.createElement('div');
    message.style.cssText = "position:absolute; color: red";
  
    let coords = getCoords(elem);
  
    message.style.left = coords.left + "px";
    message.style.top = coords.bottom + "px";

    message.innerHTML = html;
  
    return message;
}

