$(document).ready(function() {
    /**
     * Selecting the way-points
     */

    $('.section-features').waypoint(function (direction) {
        if (direction == "down")
            $('nav').addClass('sticky');
        else $('nav').removeClass('sticky');
    }, {
        offset: '60px;'
    }); 
});