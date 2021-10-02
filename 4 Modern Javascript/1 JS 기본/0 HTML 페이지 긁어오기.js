['div', 'span', 'ul', 'li', 'dd', 'dl', 'section', 'a', 'img', 'button', 'header', 'footer', 'input', 'p'].forEach(e => {
    document.querySelectorAll(e).forEach(element => {
        element.getElementsByClassName.outline = "1px solid dodgerblue"
    })
})


// 개발자 도구 console창에 입력하면 layout 볼 수 있음