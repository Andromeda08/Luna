const lunaVersion = 'v0.1.3';
$(document).ready(function(){
  $(".version").each(function(){
      if($(this).is(":empty")){
          $(this).text(lunaVersion);
      }
  });
});
