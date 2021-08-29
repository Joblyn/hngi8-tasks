function showAfter4s() {
  let element = document.getElementById("resume");
  setTimeout(() => {
    element.style.display = "flex";
    element.style.transition = "display .5s ease-in-out";
  }, 2800);
}

document.onload = showAfter4s();

function changeHeaderBackgroundOnMobile(x) {
  if (x.matches) {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 50) {
        $(".resume-header").css({
          "background-color": "#F5F6FA",
          "box-shadow": "0px 0.1px 10px 0.5px rgb(0 0 0 / 50%)"
        });
      } else {
        $(".resume-header").css({
          "background-color": "#fff",
          "box-shadow": "none"
        });
      }
    });
  } else {
    $(".resume-header").css({
      "background-color": "transparent",
      "box-shadow": "none"
    });
  }
}

let x = window.matchMedia("(max-width: 600px)");
changeHeaderBackgroundOnMobile(x);
x.addEventListener("change", changeHeaderBackgroundOnMobile);

