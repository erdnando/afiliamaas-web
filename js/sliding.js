var carousel;
$(document).ready(function () {

    carousel = $("#framecarru ul");

    carousel.itemslide({
        one_item: true //Set this for proper full screen navigation
    }); //initialize itemslide

    $(window).resize(function () {
        carousel.reload();

    }); //Recalculate width and center positions and sizes when window is resized
	
	$("#next").click(function() {
        carousel.next();
    });

    $("#previous").click(function() {
        carousel.previous();
    });
});
