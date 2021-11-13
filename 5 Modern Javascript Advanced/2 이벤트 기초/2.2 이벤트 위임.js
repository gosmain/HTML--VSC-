// 예시: 버튼과 메서드(기능) 연결하기 ==>
// 보통은 버튼 각각에 독립된 핸들러를 할당하는 방법을 떠올림 (하지만 웹페이지에는 수많은 버튼들이 존재하며 코드가 길어짐)
// 따라서, 이벤트위임(부모 요소에 핸들러 하나 추가하고 각 버튼의 data-action 속성에 호출할 메서드 할당)이 더 우아한 해결책

// 하나의 이벤트에 여러가지 기능: addEventListener <한개의 버튼안에 여러가지 기능(add,remove,show,hide)>
// 특정 이벤트 기능을 여러곳에서 사용하려할때: 이벤트 위임 <같은 특정 기능(정렬,검색)을 웹페이지 여러곳에서 사용>

/*
이벤트 위임 동작 알고리즘:
1. 컨테이너에 하나의 핸들러를 할당
2. 핸들러의 event.target을 사용해 이벤트가 발생한 요소의 위치를 탐색
3. 윈하는 요소에서 이벤트가 발생했다고 확인되면 이벤트를 핸들링함
*/

예시1;
<div id = "menu">
    <input type = "button" value = "저장하기" data-action = "save"></input>
    <button data-action = "save">저장하기</button> // 윗줄과 같은 코드
    <button data-action = "load">불러오기</button>
    <button data-action = "search">검색하기</button>
</div>

class Menu {  // new Menu(menu) = 메뉴(부모요소에 이벤트 위임)
    constructor(elem) {
        this._elem = elem;
        elem.onclick = this.onClick.bind(this);
    }

    save() {
        alert("저장하기"); // 기능 놓는곳
    }
    load() {
        alert("불러오기"); // 기능 놓는곳
    }
    search() {
        alert("검색하기"); // 기능 놓는곳
    }

    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    };
}
new Menu(menu);


과제예시1;