$(document).ready(function(){

$(".owl-carousel").owlCarousel({
    navigation : false, 
    slideSpeed : 5000,
    paginationSpeed : 1000,
    singleItem: true,
    pagination: true,
    rewindSpeed: 1000,
    autoPlay: 7000,
    dots: true,
    navText : ["<",">"]
});
$(".owl-carouse2").owlCarousel({
    items:1,
    autoplayHoverPause: true,
    navigation : false, 
    slideSpeed : 1000,
    paginationSpeed : 1000,
    singleItem: true,
    pagination: true,
    rewindSpeed: 1000,
    autoPlay: 3000,
    dots: true
});
$(".owl-carouse3").owlCarousel({
    items:3,
    autoplayHoverPause: true,
    navigation : false, 
    slideSpeed : 1000,
    paginationSpeed : 1000,
    singleItem: true,
    pagination: false,
    rewindSpeed: 1000,
    autoPlay: 2000,
    dots: true
});

$( "#datepicker" ).datepicker();
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
  //  console.log(scroll);

    if (scroll >= 160) {
        $(".main-menu").parent().addClass("header-fixed");
    } else {
        $(".main-menu").parent().removeClass("header-fixed");
    }
});
});