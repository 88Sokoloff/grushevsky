$(document).ready(function(){

$(".owl-carousel").owlCarousel({
    navigation : false, 
    slideSpeed : 1000,
    paginationSpeed : 1000,
    singleItem: true,
    pagination: true,
    rewindSpeed: 1000,
    autoPlay: 6000,
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
    autoPlay: 8000,
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
var t;
function up() {
    var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
    if(top > 0) {
        window.scrollBy(0,-100);
        t = setTimeout('up()',20);
    } else clearTimeout(t);
    return false;
}

$('#scrolltotop').on('click', function(){
    up();
    return false;
})

