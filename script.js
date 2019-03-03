
//　キャラクターのウインドウ表示
$('.character-show').click(function() {
  var character = $(this).attr('id');

  switch (character) {
    case 'ban':
    $('#character-modal-ban').fadeIn();
    break;
    case 'ami':
    $('#character-modal-ami').fadeIn();
    break;
    case 'kazu':
    $('#character-modal-kazu').fadeIn();
    break;
    case 'jin':
    $('#character-modal-jin').fadeIn();
    break;
    case 'gouda':
    $('#character-modal-gouda').fadeIn();
    break;
    case 'rina':
    $('#character-modal-rina').fadeIn();
    break;
    case 'hiyama':
    $('#character-modal-hiyama').fadeIn();
    break;
    case 'takuya':
    $('#character-modal-takuya').fadeIn();
    break;
    case 'yagami':
    $('#character-modal-yagami').fadeIn();
    break;
    case 'agent':
    $('#character-modal-agent').fadeIn();
    break;
    case 'yamajun':
    $('#character-modal-yamajun').fadeIn();
    break;
    case 'yosimitsu':
    $('#character-modal-yosimitsu').fadeIn();
    break;
  }
});

// キャラクターウインドウのクローズ処理
$(document).on('click touchend', function(e) {
  if (!$(e.target).closest('.modal').length && !$(e.target).closest('.character-show').length) {
    $('.character-modal-wrapper').fadeOut();
  } else {
    $('.close-modal').click(function() {
      $('.character-modal-wrapper').fadeOut();
    });
  }
});

//TOP画像
$(window).on("load", function() {
  $('body').fadeIn(400);
  $('.top-wrapper').fadeIn(800);
  $('.top-message h1,.top-btn').delay(1000).fadeIn(500);
  });

// テクノロジーのホバー処理
$('.techno-hover').hover(function() {
    $(this).find('.text-contents').fadeIn(500).addClass('text-active');
  }, function() {
    $(this).find('.text-contents').fadeOut().removeClass('text-active');
});

//READ MOREボタン
$('.read-btn').click(function() {
  var answer = $('.lbx-character-sec');

  if (answer.hasClass('open')) {
    answer.fadeOut(200).removeClass('open');
    $(this).text('READ MORE');
  } else {
    answer.fadeIn(800).addClass('open');
    $(this).text('CLOSE');
  };
});

//スクロール処理
$(window).scroll(function() {
    var lbx_syousai = $('#02272004').offset().top;
    var image_akiresu = $('#02272005').offset().top;


    if ($(this).scrollTop() > lbx_syousai - 400) {
      $('.lbx-contents').fadeIn(800);
    }

    if ($(this).scrollTop() > image_akiresu - 600) {
      $('.goods-images').fadeIn(800);
      $('.goods-title').fadeIn(1400);
    }
});

//グッズコンテンツReadボタン
$('.goods-read').click(function() {
  var answer = $('.goods-contents');

  answer.slideDown(400);
  $(this).hide();

  $('.goods-close').click(function() {
    answer.slideUp(300);
    $('.goods-read').fadeIn(300);
  });
});

//ヘッダーリンク
$('header a,footer a').click(function() {
  var id = $(this).attr('href');
  var position = $(id).offset().top;
  $('html,body').animate({
    'scrollTop': position - 100
  }, 800);
});

//ストーリーイメージのカルーセル
$(function() {
  $('.carousel-images').slick({
    dots: true,
    autoplay: true,
  });
});
