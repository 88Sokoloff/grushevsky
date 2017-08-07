$(document).ready(function(){

        var owl = $('.owl-carousel');
        owl.owlCarousel({
            items:1,
            loop:true,
            autoplay:true,
            autoplayTimeout:7000,
            autoplayHoverPause:true
        });

        var owl = $('.owl-carouse2');
        owl.owlCarousel({
            items:1,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true
        });

        var owl = $('.owl-carouse3');
        owl.owlCarousel({
            items:1,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:2500,
            autoplayHoverPause:true
        });

        var owl = $('.owl-carouse4');
        owl.owlCarousel({
            items:1,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:3500,
            autoplayHoverPause:true
        });

$('.owl-carouse5').owlCarousel({
            autoplay:true,
            autoWidth:true,
            autoplayTimeout:1000,
            loop:true,
            pagination: false,
            margin:10,
            nav:false,
            dots: false,

        })

$( "#datepicker" ).datepicker({ dateFormat: 'dd-mm-yy' });
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
  //  console.log(scroll);

    if (scroll >= 135) {
        $(".main-menu").parent().addClass("header-fixed");
    } else {
        $(".main-menu").parent().removeClass("header-fixed");
    }
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

$('#scrolltotop').click(function(){
$("html, body").animate({ scrollTop: 0 }, 500);
return false;
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 300) {
        $('#scrolltotop').fadeIn();
    } else {
        $('#scrolltotop').fadeOut();
    }
});

});
$(function() {

    var marquee = $("#marquee"); 
    marquee.css({"overflow": "hidden", "width": "100%"});

    // оболочка для текста ввиде span (IE не любит дивы с inline-block)
    marquee.wrapInner("<span>");
    marquee.find("span").css({ "width": "100%", "display": "inline-block", "text-align":"left" }); 
    marquee.append(marquee.find("span")); // тут у нас два span с текстом

    marquee.wrapInner("<div>");
    marquee.find("div").css("width", "250%");

    var reset = function() {
        $(this).css("margin-left", "30%");
        $(this).animate({ "margin-left": "-50%" }, 30000, 'linear', reset);
    };

    reset.call(marquee.find("div"));
});


$('.parent').on('click tap', function(){
    if($(this).parent().hasClass('opened')){
        $(this).parent().removeClass('opened');
    }
    else{
        $(this).parent().addClass('opened');
    }
     return false;
 });
                // скрипт для значка меню
function myFunction(x) {
    x.classList.toggle("change");
    $(".main-menu-mob").toggle()
    }

