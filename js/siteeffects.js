const headerText = $( ".introduction" );
const show = $( ".show-element" );

headerText.fadeIn( 4000 );

$(document).ready( function () {
    $(window).scroll( function() {
        show.each( function() {
            const bottom_of_object = $(this).offset().top + $(this).outerHeight();
            const bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ) {
                $(this).animate({rotate:'360deg', opacity:'1'},500);
            }
        });
    });
});