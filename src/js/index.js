$(document).ready(function(){

        var owl = $('.owl-carousel');
        owl.owlCarousel({
            items:1,
            loop:true,
            margin:10,
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

// MAP ZOOM ICON
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
img.onclick = function(){
    modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}