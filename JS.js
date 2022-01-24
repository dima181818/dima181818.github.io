let lastKnownScrollPosition = 0;
let ticking = false;

$(document).ready(function() {
    $(".wrapper").on("click", "a", function(event) {
      event.preventDefault();
      var id = $(this).attr('href'),
        top = $(id).offset().top - document.documentElement.clientHeight/3;
      $('body,html').animate({
        scrollTop: top
      }, 750);
    });
  });

function scrollfunction(scrollPos) {

    for(var i = 0; i < document.getElementsByClassName("spanline").length; i++)
    {
        if(document.getElementsByClassName("spanline")[i].style.opacity = "0" &&
         document.getElementsByClassName("spanline")[i].getBoundingClientRect().top < 4 / 5 * document.documentElement.clientHeight &&
         document.getElementsByClassName("spanline")[i].getBoundingClientRect().top > 0)
        document.getElementsByClassName("spanline")[i].style.opacity = "1"
        else if(document.getElementsByClassName("spanline")[i].style.opacity = "1" &&
         ( document.getElementsByClassName("spanline")[i].getBoundingClientRect().top > 4 / 5 * document.documentElement.clientHeight ||
         document.getElementsByClassName("spanline")[i].getBoundingClientRect().top < 0))
        document.getElementsByClassName("spanline")[i].style.opacity = "0"
    }

    if(scrollPos > 550)
    {
        document.getElementsByClassName("wrapper")[0].style.top = "0px";
    }
    else{
        document.getElementsByClassName("wrapper")[0].style.top = "-130px";
    }
}
document.addEventListener('scroll', function(e) {
lastKnownScrollPosition = window.scrollY;

if (!ticking) {
    window.requestAnimationFrame(function() {
    scrollfunction(lastKnownScrollPosition);
    ticking = false;
    });

ticking = true;
}
});
