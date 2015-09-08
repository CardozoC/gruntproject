$(document).ready(function(){
	$('.meowmix').mixItUp();
    // Target your .container, .wrapper, .post, etc.
    $("#meow-container").fitVids();

	$(".fancy_feast").lettering();

	$("#meowtext").fitText();


	$('a[href^="#"]').click(function(e) {
	    // Prevent the jump and the #hash from appearing on the address bar
	    e.preventDefault();
	    // Scroll the window, stop any previous animation, stop on user manual scroll
	    // Check https://github.com/flesler/jquery.scrollTo for more customizability
	    console.log(this.hash);
	    $(window).stop(true).scrollTo(this.hash, {duration:1000, interrupt:true,easing:'easeInBack'});
	});


});




