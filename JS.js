let lastKnownScrollPosition = 0;
let ticking = false;

$(document).ready(function() {
    $(".wrapper").on("click", "a", function(event) {
      event.preventDefault();
      //забираем идентификатор бока с атрибута href
      var id = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top - document.documentElement.clientHeight/3;
      //анимируем переход на расстояние - top за 1000 мс
      $('body,html').animate({
        scrollTop: top
      }, 1000);
    });
  });

function scrollfunction(scrollPos) {

    for(var i = 0; i < document.getElementsByClassName("spanline").length; i++)
    {
        if(document.getElementsByClassName("spanline")[i].style.opacity = "0" && document.getElementsByClassName("spanline")[i].getBoundingClientRect().top < 4 / 5 * document.documentElement.clientHeight)
        document.getElementsByClassName("spanline")[i].style.opacity = "1"
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
