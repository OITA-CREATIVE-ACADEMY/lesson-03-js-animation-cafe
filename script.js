$(function() {
  $('.slider').slick({
    autoplay: true,
  });

  $('.animated').waypoint({
    handler: function(direction) {
      // 下方向のスクロール
      if (direction === 'down') {
        $(this.element).addClass($(this.element).attr('data-animate-name'));
        this.destroy();
      }
    },
    // 要素が画面に表示されたら実行
    offset: '100%'
  });
});
