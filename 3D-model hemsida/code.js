// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {resizeFunction()};

function resizeFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "20px";
    document.getElementById("header").style.height = "30px";
    document.getElementById("header").style.fontWeight = "normal";
    document.getElementById("logo").style.width = "25px";
    document.getElementById("logo").style.height = "25px";
  } else {
    document.getElementById("header").style.fontSize = "25px";
    document.getElementById("header").style.height = "70px";
    document.getElementById("header").style.fontWeight = "bold";
    document.getElementById("logo").style.width = "50px";
    document.getElementById("logo").style.height = "50px";
  }
}