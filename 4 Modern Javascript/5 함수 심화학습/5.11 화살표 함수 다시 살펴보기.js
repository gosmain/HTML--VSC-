// 화살표 함수가 일반 함수와 다른 점:
// 1) this를 가지지 않음
// 2) arguments를 지원하지 않음
// 3) new와 함께 호출할 수 없음 (this가 없기 때문에 화살표 함수는 생성자 함수로 사용할 수 없다는 제약이 있음)

let group = {
    title: "1모둠",
    students: ["영민", "규빈", "서진"],
  
    showList() {
      this.students.forEach(
        student => alert(this.title + ': ' + student) // this.title = group.title // 화살표 함수엔 this가 없기에 외부에서 값을 가져옴 
      );         // 화살표 함수가 아닌 일반함수 .this를 사용하면 this가 undefined라 TypeError발생
    }
};
group.showList();

// 화살표 함수는 컨텍스트가 있는 긴 코드보다는 자체 '컨텍스트’가 없는 짧은 코드를 담을 용도로 만들어졌음. 그리고 이 목적에 잘 들어맞는 특징을 보여줌.