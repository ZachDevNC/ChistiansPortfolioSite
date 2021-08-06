const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    // Toggle Nav

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s` ;
            
            }
        });
        // burger animation
        burger.classList.toggle('toggle');
    });
 
}
    

navSlide();

$('.carousel').carousel({
    interval: 4000
  })


  $("#contactButton").on('click', function() {
    $('#contactModal').modal('show');
});


$('body').click(function(){
    if($(this).is('[class*="modal-open"]' && $('#contactModal:visible'))) {
        $('#contactModal').modal('hide');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        $('#contactModal').removeClass('fade');
        
    } 
  });