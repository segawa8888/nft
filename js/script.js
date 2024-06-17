
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

      // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

      $(document).on('click', 'a[href*="#"]', function () {
        let time = 200;
        let header = $('header').innerHeight();
        let target = $(this.hash);
        if (!target.length) return;
        let targetY = target.offset().top - header;
        $('html,body').animate({ scrollTop: targetY }, time, 'swing');
        return false;
      });

  jQuery(function ($){
    $('.js-hamburger').on('click' , function(){
        if($(this).hasClass('open')){
            //ドロワーメニューが開いているときの処理
            $('.js-drawer').fadeOut();
            $(this).removeClass('open');
            //ドロワーメニューが開いているときはスクロールできない→base.scssに記述
            $('html').removeClass('fixed');
        } else {
             //ドロワーメニューが閉じているの処理
             $('.js-drawer').fadeIn();
             $(this).addClass('open');
             //ドロワーメニューが閉じているときはスクロールできる
             $('html').addClass('fixed');
        }
    });
});



});
