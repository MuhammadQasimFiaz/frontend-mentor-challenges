var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    for (var j = 0; j < acc.length; j++) {
      if (acc[j] !== this) {
        acc[j].classList.remove("active");
        var panel = acc[j].nextElementSibling;
        panel.style.maxHeight = null;
      } else if (acc[j] === this) {
        acc[j].style.border = '0px'
      }
    }
    
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.borderBottom = "1px solid #ccc"
    }
  });
}
