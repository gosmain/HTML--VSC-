// <input>과 같이 폼(form) 조작에 사용되는 요소에는 특별한 프로퍼티와 이벤트가 많음

폼탐색하기

1.
document.forms
// document.forms[name/index]로 폼에 접근 가능

2. 
form.elements
// 폼 요소는 form.element[name/index] 또는 form[name/index]로 접근
// elemens 프로퍼티는 <fieldset>에도 똑같이 작동

3.
element.form
// element(요소)는 form 프로퍼티에서 자신이 속한 폼을 참조함


// 각 요소의 값은 input.value, textarea.value, select.value등으로 접근 가능. 체크박스/라디오버튼에서는 input.checked 사용가능

// <select>에서는 인덱스 select.selectedIndex나 option 컬렉션 select.options을 통해 값을 구할 수도 있음
