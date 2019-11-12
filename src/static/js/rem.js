import $ from 'jquery'
window.onload = function () {
  zsy()
  window.onresize = function () {
    zsy()
  }
}
function zsy () {
  var whdef = 100 / 1920 // 表示1920的设计图,使用100PX的默认值

  // eslint-disable-next-line no-unused-vars
  var wH = window.innerHeight // 当前窗口的高度

  var wW = window.innerWidth // 当前窗口的宽度

  var rem

  if (wW <= 800) {
    rem = 800 * whdef
    // console.log(rem, '800')
  } else {
    rem = wW * whdef // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    // console.log(rem, '1920')
  }

  $('html').css('font-size', rem + 'px')

  $(window).resize(function () // 绑定到窗口的这个事件中

  // eslint-disable-next-line brace-style
  {
    var whdef = 100 / 1920 // 表示1920的设计图,使用100PX的默认值

    // eslint-disable-next-line no-unused-vars
    var wH = window.innerHeight // 当前窗口的高度

    var wW = window.innerWidth // 当前窗口的宽度

    if (wW <= 800) {
      rem = 800 * whdef
    } else {
      rem = wW * whdef // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    }

    $('html').css('font-size', rem + 'px')

    // var H = document.documentElement.scrollHeight;

  // $('html').height(H);
  })
}
