$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 5){
            $('.nav').addClass("sticky");
        }else{
            $('.nav').removeClass("sticky");
        }
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.nav .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Passion."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});