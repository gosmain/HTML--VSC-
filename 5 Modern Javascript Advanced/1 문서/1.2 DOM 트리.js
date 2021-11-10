/* 
모든 HTML 태크는 객체임.
document.body는 <body>태그를 객체로 나타낸 것.
*/
document.body.style.background = "red"; // 배경 빨간색으로 변경하기
setTimeout(() => document.body.style.background = "", 3000); // 배경 원상태로 복구하기

<html></html> = document.documentElement;
<body></body> = document.body;
<head></head> = document.head;


테이블탐색하기;
<table id = "table">
    <tr>
        <td>일</td><td>이</td>
    </tr>
    <tr>
        <td>삼</td><td>사</td>
    </tr>
</table>

let td = table.rows[0].cells[1];
td.style.backgroundColor = "red";

