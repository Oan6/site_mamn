let LastScroll = 0;
const lii = document.querySelector(".li");
window.addEventListener("scroll", () => {
  if (LastScroll > window.scrollY) navv.style.top = window.scrollY + "px";
  if (LastScroll < window.scrollY) navv.style.top = window.scrollY + "px";

  LastScroll = window.scrollY;
  console.log(LastScroll);
});

window.addEventListener("scroll", function () {
  var lis = document.getElementsByTagName("li");
  for (var i = 0; i < lis.length; i++) {
    var li = lis[i];
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 100) {
      li.style.padding = "10px";
    } else {
      li.style.padding = "40px";
    }
  }
});
var today = new Date().toISOString().substr(0, 10);

document.getElementById("date").value = today;
