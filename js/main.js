(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:2
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

     
})(jQuery);

$('.js-example-basic-single').select2();
$('#departure_date').datetimepicker({
    //formatTime:'H:i',
    format:'d/m/Y',
    formatDate:'Y/m/d',
    minDate: 0,
    timepicker:false 
});

$('#return_date').datetimepicker({
    //formatTime:'H:i',
    format:'d/m/Y',
    formatDate:'Y/m/d',
    minDate: 0,
    timepicker:false
});

$(".revsform").revform({
    speed : 500,
    transition : 'fade',
    //progressBar : true,
    //showProgressText : true,
    validate: false
});


function validateForm(Obj){

    var validobj = Obj.validate({
        
        rules: {
        departure_city: {
            required: true
            
        },
        arrival_city: {
            required: true
        },
        departure_date: {
            required: true
        },
        return_date: {
            required: true
        },
        selectBox: {
            required: true
            
        },
        first_name2: {
            required: true
        },
        last_name2: {
            required: true
        },
        email2: {
            required: true,
            email : true
        },
        contact_no2: {
            required: true,
            number :true
        }
        },
        submitHandler: function() {
        $.ajax({
            type:'post',
            url: "private_mail.php",
            data: $("#revform").serialize(),
            success: function(result){  
            //alert(result);   
            // $("#successmessage").html(result);
                if(result==1) {
                    $("#successmessage").show().delay( 1000 );
                    //$("#successmessage").html("Thanks for flying with EAA. We will get back to you soon.");
                    $("#revform")[0].reset();
                    $("#successmessage").fadeOut(5000);   
                    window.location = 'thank-you.php';
                } else {
                    $("#successmessage").show().delay( 1000 );
                    $("#successmessage").addClass("failmessage");
                    $("#successmessage").html("Something went wrong. Please try submitting again.");            
                    $("#successmessage").fadeOut(5000);
                }
            }
            
        });
        }

        
    });
$(document).on("change", ".select2-offscreen", function () {
    if (!$.isEmptyObject(validobj.submitted)) {
        validobj.form();
    }
});
return Obj.valid();


    

} 
$(document).ready(function() {


    $('#searchfield .next-fieldset').click(function(){
    
    
    $('#departure').empty().text($('#departure_city :selected').text());
    $('#arrival').empty().text($('#arrival_city :selected').text());
    $('#date').empty().text($('#departure_date').val());
    $('#retn_date').empty().text($('#return_date').val());
    $('#select').empty().text($('#selectBox :selected').text());
    $('#first_name').empty().text($('#first_name2').val());
    $('#last_name').empty().text($('#last_name2').val());
    $('#contact').empty().text($('#contact_no2').val());
    $('#email').empty().text($('#email2').val());
    
    
    });
        
     });