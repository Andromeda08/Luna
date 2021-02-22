// Docs accordion menu
function openDocs(id) {
  var menu = document.getElementById(id);
  if (menu.className.indexOf("docs-show") == -1) {
    menu.className += " docs-show";
  } else {
    menu.className = menu.className.replace(" docs-show", "");
  }
}
