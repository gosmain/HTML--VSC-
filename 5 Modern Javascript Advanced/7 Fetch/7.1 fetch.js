/* 
Js를 통해 서버에 네트워크 요청을 보내고 새로운 정보를 받아오는 일을 해야함

네트워크 요청이 실행되는 경우:
1. 주문 전송
2. 사용자 정보 읽기
3. 서버에서 최신 변경분 가져오기

위 모든 것들은 페이지 새로 고침 없이도 가능함: 
AJAX(비동기적JS와 XML) = 서버에서 추가 정보를 비동기적으로 가져올 수 있게 해주는 기술

하지만, AJAX이외에도 서버에 네트워크 요청을 보내고 정보를 받아올 수 있는 방법은 다양 (예: fetch())
*/


//------------------------------------------------------------------------------------------------------------------------------------------
let promise = fetch(url, [options]); // option이 비었을경우 요청은 자동으로 GET메서드로 진행되며 url의 콘텐츠가 다운됨

응답본문을얻기위한메서드
response.text()        // 응답을 텍스트 형태로 반환함
response.json()        // 응답을 파싱해 JSON 객체로 반환
response.formData()    // 응답을 FormData 객체 형태로 반환
response.blob()        // 응답을 Blob 형태로 반환
response.arrayBuffer() // 응답을 ArrayBuffer형태로 반환

// fetch 요청 1단계: fetch호출 시 반환받은 promise가 내장 클래스 Response의 인스턴스와 함께 이행상태가 됨
// fetch 요청 2단계: 추가 메서드를 호출해 응답 본문을 받음 (.text(), .json()...)

fetch요청첫번째방법 // (await을 사용한방법)
let url = 'https://api.github.com/repos/javascript-tutorial/ko.javascript.info/commits';
let response = await fetch(url);     // 응답 헤더와 함께 이행됨

let commits = await response.json(); // 응답 본문을 읽고 JSON 형태로 파싱함

alert(commits[0].author.login);


fetch요청두번째방법 // (await없이 promise만 사용한 방법)
fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
    .then(response => response.json())
    .then(commits => alert(commits[0].author.login));


//예시------------------------------------------------------------------------------------------------------------------------------------------
로고가져오기
let response = await fetch('/article/fetch/logo-fetch.svg');

let blob = await response.blob();

let img = document.createElement("img"); // 다운로드받은 Blob을 담을 <img>을 생성
img.style = "position:fixed;top:10px;left:10px;width:100px";
document.body.append(img);

img.src = URL.createObjectURL(blob); // 이미지를 화면에 보여줌

setTimeout(() => { // 3초 후 이미지를 숨김
    img.remove();
    URL.revokeObjectURL(img.src);
}, 3000);


//응답 헤더------------------------------------------------------------------------------------------------------------------------------------------
응답객체의프로퍼티
response.status  // 응답의 HTTP코드(예: 200)
response.ok      // 응답 상태가 200과 299 사이에 있는 경우 true (if(!response.ok) throw new Error("")로 에러처리가능)
response.headers // 맵과 유사한 메서드를 지원하는 HTTP 헤더: 헤더 일부 추출 혹은 전체 순회 가능

예시;
let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');

// 헤더 일부를 추출
alert(response.headers.get('Content-Type')); // application/json; charset=utf-8

// 헤더 전체를 순회
for (let [key, value] of response.headers) {
    alert(`${key} = ${value}`);
}


//요청 헤더------------------------------------------------------------------------------------------------------------------------------------------
headers // 요청 헤드가 담긴 객체(제약 사항 존재). headers옵션을 사용하면 fetch에 요청 헤더를 설정할 수 있음

let response = fetch(protectedURL, {
    headers: { // headers에 다양한 헤더 정보가 담긴 객체를 넘김
        Authentication: "secret" // 정보들(금지된 헤더 목록이 존재)
    }
});


//POST 요청------------------------------------------------------------------------------------------------------------------------------------------
// GET이외의 요청을 보내려면 추가 옵션을 사용해야 함
method // HTTP 메서드 (예: POST)
body   // 요청 본문이며 다음 중 하나여야 함(대부분은 JSON을 요청 본문에 실음):
    1. // 문자열(JSON string)
    2. // FormData객체 - form/multipart 형태로 데이터를 전송하기 위해 쓰임
    3. // Blob나 BufferSource - 바이너리 데이터 전송을 위해 쓰임

예시;
let user = {
    name: 'John',
    surname: 'Smith'
};
  
let response = await fetch('/article/fetch/post/user', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
});

let result = await response.json();
alert(result.message);

// POST요청을 보낼 때 본문이 문자열일 때 Content-Type 헤더가 text/plain;charset=UTR-8로 기본 설정됨
// 위 예시는 JSON을 전송하고 있기 때문에 headers에 제대로 된 Content-Type인 application/json을 설정


//과제예시(이미지 전송하기)------------------------------------------------------------------------------------------------------------------------------------------
<body style="margin:0">
    <canvas id="canvasElem" width="100" height="80" style="border:1px solid"></canvas>
    <input type="button" value="전송" onclick="submit()"></input>
</body>

canvasElem.onmousemove = function(e) { // <script>
    let ctx = canvasElem.getContext('2d');
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
};

async function submit() {
    let blob = await new Promise(resolve => canvasElem.toBlob(resolve, 'image/png')); // (2)
    let response = await fetch('/article/fetch/post/image', {
        method: 'POST',
        body: blob
    }); // (1)

    let result = await response.json(); // 전송이 잘 되었다는 응답이 오고 이미지 사이즈가 얼럿창에 출력됨
    alert(result.message);
}

// (1) Blob객체는 내장 타입을 갖기 때문에 위와같이 Content-Type헤더를 명시적으로 설정하지 않아도 됨
// (2) 예시는 이미지를 전송하기 때문에 toBlob에 의해 image/png가 자동으로 설정됨
// 이렇게 Blob 객체의 경우 객체의 타입이 Content-Type 헤더의 값이 됨