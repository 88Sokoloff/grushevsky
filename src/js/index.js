$(document).ready(function(){

        var owl = $('.owl-carousel');

        owl.owlCarousel({
            items:1,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true
        });

        var owl = $('.owl-carouse2');

        owl.owlCarousel({
            items:1,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:1000,
            autoplayHoverPause:true
        });

$('.owl-carouse3').owlCarousel({
            autoplay:true,
            autoWidth:true,
            autoplayTimeout:1000,
            loop:true,
            pagination: false,
            margin:10,
            nav:false,
            dots: false,

        })

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

$(document).ready(function(){

$(window).scroll(function(){
if ($(this).scrollTop() > 200) {
$('#scrolltotop').fadeIn();
} else {
$('#scrolltotop').fadeOut();
}
});

$('#scrolltotop').click(function(){
$("html, body").animate({ scrollTop: 0 }, 600);
return false;
});

});