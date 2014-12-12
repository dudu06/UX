// We added in the lightbox effect for when a user clicks on an image an overlay is added. 

$(document).ready(function () {	
	var $overlay = $('<div id="overlay"></div>');
	var $image = $("<img>");
	var $caption = $("<p></p>");

	// These 3 things below are like CSS z-index. One goes on top of the other. LEAVE THEM AS IS
	
	// overlay gets the image after body gets the overlay - An image to overlay
	$overlay.append($image);

	// A caption to overlay - comes after the image
	// $overlay.append($caption);

	// Add overlay - body gets the div overlay at the end of body. It appends to image above
	$("body").append($overlay);	

	

	// Capture the click event on a  click to an image
	$("#gallery a").click(function(event) {
		event.preventDefault();

		// We get the image location from the link we just clicked on
		var imagelocation = $(this).attr("href");

		// Update overlay with the image linked in the link -- we set the src attribute for the image location
		$image.attr("src", imagelocation);

		// Show the overlay
		$overlay.fadeIn("slow").show();

		// Get child's alt attribute and set caption
		var captionText = $(this).children("img").attr("alt");
		$caption.text(captionText);
		// Above adds the text of the captionText to the caption paragraph
	});

	$overlay.click(function() {
		$overlay.fadeOut("slow");
	});


		// This function is for the jQuery nav bar
	    $('.slideout-menu-toggle').on('click', function(event){
    	event.preventDefault();
    	// create menu variables
    	var slideoutMenu = $('.slideout-menu');
    	var slideoutMenuWidth = $('.slideout-menu').width();
    	
    	// toggle open class
    	slideoutMenu.toggleClass("open");
    	
    	// slide menu
    	if (slideoutMenu.hasClass("open")) {
	    	slideoutMenu.animate({
		    	right: "0px"
	    	});	
    	} else {
	    	slideoutMenu.animate({
		    	right: -slideoutMenuWidth
	    	}, 200);	
    	}
    	});

	    // This function is to move the car left an right 
    	$('#button1').click(function() {
        	$('#car').animate({
        	'marginLeft' : "-=30px" //moves left
        	});
    	 });
    
	    $('#button2').click(function() {
	        $('#car').animate({
	        'marginLeft' : "+=30px" //moves right
	        });
	    });






	     $('a[href^="#low-rider"]').on('click',function (e) {
                e.preventDefault();

                var target = this.hash;
                $target = $(target);

                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top
                }, 500, 'swing', function () {
                    window.location.hash = target;
                });
          });         

	    
});


// The attribut "src" gets modified to imagelocation with this code above



// href is the attribute of the 'a' anchor tag we've clicked on
// body gets the div overlay and then the overlay gets the image. Great!

// We get the imagelocation from the link we click on