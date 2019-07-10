$(function(){


// 左の画像のクリックした時のfunction左の画像のクリックした時のfunction左の画像のクリックした時のfunction
$('.left-pic').click(function(){
    $(this).removeClass('left-pic');
  $(this).addClass('bigImage');
  $('#allHide').removeClass('allLight');
  $('#allHide').toggleClass('allHide');

  $('.bigImage').click(function(){
    $(this).toggleClass('bigImage');
    $(this).toggleClass('left-pic');
    $('#allHide').toggleClass('allLight');
    $('#allHIde').removeClass('allHide');
  })
});


// 右の画像のクリックした時のfunction右の画像のクリックした時のfunction
$('.right-pic').click(function(){
    $(this).removeClass('right-pic');
  $(this).addClass('bigImage');
  $('#allHide').removeClass('allLight');
  $('#allHide').toggleClass('allHide');

  $('.bigImage').click(function(){
    $(this).toggleClass('bigImage');
    $(this).toggleClass('right-pic');
    $('#allHIde').removeClass('allHide');
    $('#allHide').toggleClass('allLight');
})
});

// 左の目次の部分をアコーディオンに左の目次の部分をアコーディオンに左の目次の部分をアコーディオンに


  $('#titleOfContents').click(function(){
    $('li').slideToggle();
  })



});
