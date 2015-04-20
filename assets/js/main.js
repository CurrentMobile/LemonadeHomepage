$(document).ready(function() {

    /* ======= jQuery Placeholder ======= */
    /* Ref: https://github.com/mathiasbynens/jquery-placeholder */

    $('input, textarea').placeholder();

	/* ======= Fixed Header animation ======= */

    $(window).on('scroll', function() {

         if ($(window).scrollTop() > 0 ) {
             $('#header').addClass('header-change');
         }
         else {
             $('#header').removeClass('header-change');
         }
    });

    /* ======= Toggle between Signup & Login Modals ======= */
    $('#signup-link').on('click', function(e) {
        $('#signup-modal').modal();
        $('#login-modal').modal('toggle');
        e.preventDefault();
    });



    $('#login-link').on('click', function(e) {
        $('#login-modal').modal();
        $('#signup-modal').modal('toggle');
        e.preventDefault();
    });

    $('#typeform-container').click(function(){
      $('#typeform-full').addClass('typeform-expanded');
      $(this).hide();
      $('#close-typeform').show();
    });

    $('#close-typeform').click(function(){
      $('#typeform-full').removeClass('typeform-expanded');
      $('#typeform-container').show();
      $(this).hide();
    });

});

$('.squeeze-btn').click(function(){
  $('#typeform-container').trigger('click');
});
