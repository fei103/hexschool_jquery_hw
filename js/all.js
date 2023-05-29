$(document).ready(function(){
  $('.dropdown').click(function(event){
    ('.homepage').removeAttr("style","border-bottom: 3px solid #00cc99;");
    $(this).addClass('active').parent().siblings().find('.listall').removeClass('active');
  });
});