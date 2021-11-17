// 파일과 함께 폼 전송하기
<form id="formElem">
    <input type="text" name="firstName" value="John"></input>
    <input type="file" name="picture" accept="image/*"></input>
    <input type="submit"></input>
</form>

formElem.onsubmit = async (e) => { // script
    e.preventDefault();

    let response = await fetch('/article/formdata/post/user-avatar', {
        method: 'POST', // upload이니 post에서만 가능
        body: new FormData(formElem)
    });

    let result = await response.json();

    alert(result.message);
};
