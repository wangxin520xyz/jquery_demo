$(function () {
  waterFall()
})

function waterFall () {
  const _img = $('.box')
  // 图片宽度
  const imgWidth = _img.outerWidth()
  // 屏幕宽度
  const screenWidth = $(window).width()
  // 求出列数
  const cols = parseInt(screenWidth/imgWidth)
  // 定义一个数组 目的放图片的高度
  let heightArr = []
  // 循环图片， 图片位置定位
  $.each(_img, function (index, item) {
    let imgHeight = $(item).outerHeight()
    // 判断是否是第一行
    if (index < cols) {
      heightArr[index] = imgHeight
    } else {
      // 获取最小高度
      let minImgH = Math.min(...heightArr)
      // 最小高度的索引 $.inArray(值, 数组)
      let minImgI = $.inArray(minImgH, heightArr) // 用于查找数组中确定值的索引
      $(item).css({
        position: 'absolute',
        left: minImgI*imgWidth + 'px', // 索引*宽度
        top: minImgH + 'px' // 最小高度
      })
      // 高度累加
      heightArr[minImgI] += imgHeight
    }
  })
}