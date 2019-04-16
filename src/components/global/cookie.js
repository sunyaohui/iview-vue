// JS操作cookies方法
// 写cookies
export let setCookie = function (cName, value, expiredays) {
    let exdate = new Date()
    exdate = new Date(exdate.getTime() + Number(expiredays) * 1000)
    document.cookie = cName + '=' + escape(value) + ((expiredays === null) ? '' : ';expires=' + exdate)
}

// 读取cookies
export let getCookie = function (name) {
    let arr = ''
    let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    arr = document.cookie.match(reg)
    if (arr) {
      return (arr[2])
    } else {
      return null
    }
}
// 删除cookies
export let delCookie = function (name) {
    var exp = new Date()
    exp.setTime(exp.getTime() - 1)
    var cval = getCookie(name)
    if (cval != null) {
      document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
    }
}