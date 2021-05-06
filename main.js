'use strict';

// Featured work scrolls down
$(document).on('scroll', function() {
    $('#scrollDown').css("left", Math.max(1340 - 1.20*window.scrollY, -675) + "px");
});
// Featured work scrolls up
$(document).on('scroll', function() {
    $('#scrollUp').css("left", Math.max(-1550 + 1.05*window.scrollY) + "px");
});