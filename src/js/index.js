$(".owl-carousel").owlCarousel({
    navigation : true, 
    slideSpeed : 1000,
    paginationSpeed : 1000,
    singleItem: true,
    pagination: true,
    rewindSpeed: 1000,
    autoPlay: 8000,
    dots: true,
     nav    : true,
    navText : ["<",">"]
});
$(".owl-carouse2").owlCarousel({
    navigation : false, 
    slideSpeed : 1000,
    paginationSpeed : 1000,
    singleItem: true,
    pagination: true,
    rewindSpeed: 1000,
    autoPlay: 8000,
    dots: true
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
  //  console.log(scroll);

    if (scroll >= 160) {
        $(".main-menu").parent().addClass("header-fixed");
    } else {
        $(".main-menu").parent().removeClass("header-fixed");
    }
});