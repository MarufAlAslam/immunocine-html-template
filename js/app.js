// selecting rdobtn using class name
var rdobtn = document.getElementsByClassName("rdobtn");

// checking click event on rdobtn

for (var i = 0; i < rdobtn.length; i++) {
  rdobtn[i].addEventListener("click", function () {
    var selected = document.querySelector(".selected");
    if (selected) {
      selected.classList.remove("selected");
    }
    this.classList.add("selected");
  });
}
