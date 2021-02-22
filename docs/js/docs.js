// Luna / docs / docs.js
// Animations for Documentation Page

$(document).ready(function() {
  var current = $('.docs-show').attr('id');
  $('.docs-show').prev().children().css('transform', 'rotate(90deg)');
  console.log(current);
});

function openDocs(id, arrow) {
  var menu = document.getElementById(id);
  var arrow = document.getElementsByClassName(arrow);
  if (menu.className.indexOf("docs-show") == -1) {
    menu.className += " docs-show";
    $(arrow).css('transform', 'rotate(90deg)');
  } else {
    menu.className = menu.className.replace(" docs-show", "");
    $(arrow).css('transform', 'rotate(0deg)');
  }
}
