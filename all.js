$('.loadBox , .adminName').fadeOut(0)

let mainAccount = 'admin'
let mainPassword = 'Admin&8181'


$('#check').click((e) => {
    e.preventDefault();
    $('.loadBox').fadeIn(0)
    let account = $('#account').val();
    let password = $('#password').val();
    if (account === mainAccount && password === mainPassword) {
        $('.load-wrapp').fadeOut(500)
        setTimeout(() => {
            $('.loadBox h1').fadeIn(500)
            setTimeout(() => {
                document.cookie = 'username=' + account + '; max-age=2592000; path=/';
                location.href = 'index.html'

            }, 1000)
        }, 700)

    } else {
        $('.loadBox').fadeOut(500)
        console.log('error');
        $('.error').fadeIn(0)
    }
})


function parseCookie() {
    var cookieObj = {};
    var cookieAry = document.cookie.split(';');
    var cookie;

    for (var i = 0, l = cookieAry.length; i < l; ++i) {
        cookie = jQuery.trim(cookieAry[i]);
        cookie = cookie.split('=');
        cookieObj[cookie[0]] = cookie[1];
    }

    return cookieObj;
}


function getCookieByName(name) {
    var value = parseCookie()[name];
    if (value) {
        value = decodeURIComponent(value);
    }

    return value;
}

showName()
function showName() {
    let mainName = getCookieByName('username')
    console.log(mainName);
    if (mainName === 'admin') {
        $('#name').text(mainName)
        $('.loginBtn').fadeOut(0)
        $('.adminName').fadeIn(0)
    }

}