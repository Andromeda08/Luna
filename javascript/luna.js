const lunaVersion = 'v0.1.4';
$(document).ready(function(){
  $(".version").each(function(){
      if($(this).is(":empty")){
          $(this).text(lunaVersion);
      }
  });
});

$('.a-close').click(function(e){
  var alert = $(e.target).parent().parent();
  alert.css('transform', 'translateY(-10px)').css('opacity', '0').delay(250).fadeOut(0);
});
