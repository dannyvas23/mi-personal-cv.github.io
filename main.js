const navLink = document.querySelectorAll('.nav-item');

function linkAction(){


    //active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

}

function home(){
    console.log("ENTRO");

    //active link
    navLink.forEach(n => n.classList.remove('active'))
    navLink[0].classList.add('active');

}

navLink.forEach(n => n.addEventListener('click', linkAction))


jQuery(document).ready(function( $ ) {

    // Back to top button
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });
    $('.back-to-top').click(function(){
      $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
      return false;
    });
});