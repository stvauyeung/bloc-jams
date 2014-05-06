
if (document.URL.match(/\/user/)) {
  $(document).ready(function() {
    $('.tab').click(function(){
      $(this).removeClass('active');
      $(this).parent().siblings().children().addClass('active');
      $('.tab-contents-container > .tab-contents.tab-contents-active').removeClass('tab-contents-active');
      $(this.rel).addClass('tab-contents-active');
    });
  });
}
