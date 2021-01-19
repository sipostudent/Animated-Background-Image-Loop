// Animated Background Logic

var banner = document.getElementsByClassName('banner')[0];
var blocks = document.getElementsByClassName('blocks');
for (var i = 1; i < 400; i++) {
  banner.innerHTML += "<div class='blocks'></div>";
  blocks[i].style.animationDelay = `${i * 0.05}s`;
}
