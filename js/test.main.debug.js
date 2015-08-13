$(document).ready(function(){
	slider = $('.bxslider').bxSlider();
	var onLoad = $(window).width(function() {
	console.log ('got window width');
	windowWidth = $(window).width();
    if (windowWidth <= 768) {
    console.log('window is at least 768');
	current = slider.getCurrentSlide();
if(current == 0) {
			$('body').css('background-color', 'rgb(180,180,180)');
			$(".bx-viewport").css('background', 'transparent');			
}
		if (current == 1) {
			$('body').css('background-color', 'rgb(255, 173, 0)');
			$(".bx-viewport").css('background', 'transparent');			
}
		if (current == 2) {
			$('body').css('background-color', 'rgb(240, 0, 0)');
			$(".bx-viewport").css('background', 'transparent');			
}
		if (current == 3) {
			$('body').css('background-color', 'rgb(153, 204, 255)');
			$(".bx-viewport").css('background', 'transparent');			
}
		if (current == 4) {
			$('body').css('background-color', 'rgb(255, 153, 204)');
			$(".bx-viewport").css('background', 'transparent');			
}
		if (current == 5) {
			$('body').css('background-color', 'rgb(51, 183, 51)');
			$(".bx-viewport").css('background', 'transparent');			
}}

		
var onNext = $('.bx-next').click(function(current){
	console.log('next clicked');
	current = slider.getCurrentSlide();
	console.log('next current passed');

			if(current == 0) {
			$('body').css('background-color', 'rgb(180,180,180)');
			$(".bx-viewport").css('background', 'transparent');
			
}
		if (current == 1) {
			$('body').css('background-color', 'rgb(255, 173, 0)');
			$(".bx-viewport").css('background', 'transparent');
			
}
		if (current == 2) {
			$('body').css('background-color', 'rgb(240, 0, 0)');
			$(".bx-viewport").css('background', 'transparent');
			
}
		if (current == 3) {
			$('body').css('background-color', 'rgb(153, 204, 255)');
			$(".bx-viewport").css('background', 'transparent');
			
}
		if (current == 4) {
			$('body').css('background-color', 'rgb(255, 153, 204)');
			$(".bx-viewport").css('background', 'transparent');
			
}
		if (current == 5) {
			$('body').css('background-color', 'rgb(51, 183, 51)');
			$(".bx-viewport").css('background', 'transparent');
			
}

})
var onPrev = $('.bx-prev').click(function(current){
			console.log('prev clicked');
			current = slider.getCurrentSlide();
			console.log('prev current passed');
			if(current == 0) {
			$('body').css('background-color', 'rgb(180,180,180)');
			$(".bx-viewport").css('background', 'transparent');
			
}
		if (current == 1) {
			$('body').css('background-color', 'rgb(255, 173, 0)');
			$(".bx-viewport").css('background', 'transparent');
			
}
		if (current == 2) {
			$('body').css('background-color', 'rgb(240, 0, 0)');
			$(".bx-viewport").css('background', 'transparent');
			
}
		if (current == 3) {
			$('body').css('background-color', 'rgb(153, 204, 255)');
			$(".bx-viewport").css('background', 'transparent');
			
}
		if (current == 4) {
			$('body').css('background-color', 'rgb(255, 153, 204)');
			$(".bx-viewport").css('background', 'transparent');
			
}
		if (current == 5) {
			$('body').css('background-color', 'rgb(51, 183, 51)');
			$(".bx-viewport").css('background', 'transparent');
}
})


var onHover = $(".onion").hover(function() {
			console.log ("i am a hovering onion!");
			});
		$(".donut").hover(function() {
			console.log ("i am a hovering donut!");
			$(".donut").fadeToggle( 4000 );
		});

		$(".burger").hover(function() {
			console.log ("i am a hovering burger!");
			$(".burger").effect ( "pulsate", { times: 1 } );
			
		});

		$(".coffee").hover(function() {
			console.log ("i am a hovering coffee!");
			$(".coffee").effect( "shake", { direction: "left", times: 3, distance: 0}, 450 );
		});

		$(".candy").hover(function() {
			console.log ("i am a hovering candy!");
			$(".candy").effect( "shake", { direction: "up", times: 4, distance: 0}, 700 );
		});
		// window.onload=bxNext;
		// window.onload=bxPrev;
	});

});

	