//画像の設定
var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
    if (windowwidth > 768){
      var responsiveImage = [//PC用の画像
        { src: './assets/images/kesiki.jpg'},
        { src: './assets/images/robie.jpg'},
        { src: './assets/images/kyositu.jpg'}
      ];
    } else {
      var responsiveImage = [//タブレットサイズ（768px）以下用の画像
        { src: './assets/images/kesiki.jpg'},
        { src: './assets/images/robie.jpg'},
        { src: './assets/images/kyositu.jpg'}
      ];
    }

//Vegas全体の設定

$('#slider').vegas({
    transition: 'blur',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
    transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
    delay: 10000,//スライド間の遅延をミリ秒単位で。
    animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
    animation: 'kenburns',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
    slides: responsiveImage,//画像設定を読む
  });

// animation / wow.js
// ==================================================
window.addEventListener('DOMContentLoaded', function(){
    new WOW().init();
  });
  //スムーススクロール
  $('a[href^="#"]').click(function(){
    var adjust = 0;
    var speed = 1000;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });


$(function(){
    // alert($(window).width());
    //アコーディオン
    $('.p-faq__question').on('click',function(){
        const findElm = $(this).next('.p-faq__answer');
        $(findElm).slideToggle();

        if($(this).hasClass('close')){
            $(this).removeClass('close');
        }else{
            $(this).addClass('close');
        }
    });

    //ハンバーガーメニュー
    $('.c-menu-trigger').on('click',function(){
        $(this).toggleClass('is-active');
        $('.l-header__nav').toggleClass('is-active');
    });
    //ハンバーガーメニューから移動したら閉じる
    $('.l-header__list a[href]').on('click',function(){
      $('.c-menu-trigger').trigger('click');
    })



    //スクロールした際の動きを関数でまとめる
function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200){//上から200pxスクロールしたら
      $('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
      $('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
    }else{
      if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
        $('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
        $('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
      }
    }
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
  });
  
  // ページが読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function () {
    PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
  });
  
  // #page-topをクリックした際の設定
  $('#page-top a').click(function () {
      $('body,html').animate({
          scrollTop: 0//ページトップまでスクロール
      }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
      return false;//リンク自体の無効化
  });

});