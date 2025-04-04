// JavaScript Document
var typed = new Typed('.element', {
               	strings: ["Graphic Designer.", "Illustrator.","Branding."],
       	 	typeSpeed:50,
        		backSpeed:50,
        		loop:true,
        		});
/**********************Scroll Animation "START"************************************/
$(document).ready(function(){
var $animation_elements = $('.anim');
var $window = $(window);

function check_if_in_view() {
var window_height = $window.height();
var window_top_position = $window.scrollTop();
var window_bottom_position = (window_top_position + window_height);

$.each($animation_elements, function() {
var $element = $(this);
var element_height = $element.outerHeight();
var element_top_position = $element.offset().top;
var element_bottom_position = (element_top_position + element_height);

//check to see if this current container is within viewport
if ((element_bottom_position >= window_top_position) &&
(element_top_position <= window_bottom_position)) {
$element.addClass('animated');
} else {
$element.removeClass('animated');
}
});
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
});
/**********************Scroll Animation "END"************************************/

/**********************Change color of center aligned animated content small Circle  "START"************************************/
$(document).ready(function(){
    $(" .debits").hover(function(){
        $(" .center-right").css("background-color", "#4997cd");
        }, function(){
        $(" .center-right").css("background-color", "#fff");
    }); 
});
$(document).ready(function(){
    $(".credits").hover(function(){
        $(".center-left").css("background-color", "#4997cd");
        }, function(){
        $(".center-left").css("background-color", "#fff");
    }); 
});
/**********************Change color of center aligned animated content small Circle  "END"************************************/
/*phan book*/
document.addEventListener('DOMContentLoaded', function() {
            // Book button toggle contact form
            const bookBtn = document.getElementById('bookBtn');
            const contactForm = document.getElementById('contactForm');
            
            bookBtn.addEventListener('click', function() {
                contactForm.classList.toggle('show');
                if (contactForm.classList.contains('show')) {
                    // Scroll to the form
                    contactForm.scrollIntoView({behavior: 'smooth', block: 'center'});
                }
            });
            
            // Service modal
            const serviceModal = document.getElementById('serviceModal');
            if (serviceModal) {
                serviceModal.addEventListener('show.bs.modal', function(event) {
                    const button = event.relatedTarget;
                    const service = button.getAttribute('data-service');
                    const serviceNameInput = document.getElementById('serviceName');
                    
                    let serviceName = '';
                    if (service === 'brand') {
                        serviceName = 'Nhận diện thương hiệu';
                    } else if (service === 'illustration') {
                        serviceName = 'Minh họa';
                    } else if (service === 'social') {
                        serviceName = 'Thiết kế poster social';
                    }
                    
                    serviceNameInput.value = serviceName;
                });
            }
            
            // Form submission handlers
            const serviceForm = document.getElementById('serviceForm');
            if (serviceForm) {
                serviceForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    alert('Thông tin của bạn đã được gửi thành công! Mako Chan sẽ liên lạc sớm với bạn!');
                    const modal = bootstrap.Modal.getInstance(document.getElementById('serviceModal'));
                    modal.hide();
                    serviceForm.reset();
                });
            }
            
            const bookingForm = document.getElementById('bookingForm');
            if (bookingForm) {
                bookingForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    alert('Thông tin của bạn đã được gửi thành công! Mako Chan sẽ liên lạc sớm với bạn!');
                    bookingForm.reset();
                    contactForm.classList.remove('show');
                });
            }
        });
// Form submission handlers
            const submitForm = document.getElementById('submitForm');
            if (submitForm) {
                submitForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    alert('Thông tin của bạn đã được gửi thành công! Mako Chan sẽ liên lạc sớm với bạn!');
                    const submitForm = document.getElementById('submitForm');
                    submitForm.hide();
                    submitForm.reset();
                });
            }
