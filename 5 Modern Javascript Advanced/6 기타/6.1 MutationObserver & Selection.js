MutationObserver 
// DOM 변화를 감지: 이를 이용하여 코드의 도입된 변경사항을 추적하고 타사 스크립트와 통합할 수 있음


Selection
// 사용자가 마우스를 통해 드래그하거나 키보드를 통해 선택한 텍스트의 범위를 나타냄
// 브라우저에서 사용자가 선택한 텍스트에 대한 처리를 지원하기 위해 Selection API를 지원


// Getting the selection:
let selection = document.getSelection();
let cloned = n // n: 선택한 노드를 복제할 대상 요소;

for (let i = 0; i < selection.rangeCount; i++) { // 범위 메서드를 selection.getRangeAt(0)에 적용
    cloned.append(selection.getRangeAt(i).cloneContents());
}


// Setting the selection:
let selection = document.getSelection();

1. // 직접적으로
selection.setBaseAndExtent(...from.to); // (...from...to);
2. // range를 생성하고:
selection.removeAllRanges();
selection.addRange();