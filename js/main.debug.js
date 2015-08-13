$(document).ready(function loadColorChange(){
			slider = $('.bxslider').bxSlider();
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
			
}
$('.bx-next').click(function (){
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
			
}
$('.bx-prev').click(function (){
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
}
})
})
$(".onion").hover(function() {
			console.log ("i am a hovering onion!");
		});

		$(".donut").hover(function() {
			console.log ("i am a hovering donut!");
			$(".donut").fadeToggle( 4000 );
		});

		$(".burger").hover(function() {
			console.log ("i am a hovering burger!");
			$(".burger").toggle ( "puff" ), {percent: 200};
		});

		$(".coffee").hover(function() {
			console.log ("i am a hovering coffee!");
			$(".coffee").effect( "shake", { direction: "left", times: 3, distance: 0}, 450 );
		});

		$(".candy").hover(function() {
			console.log ("i am a hovering candy!");
			$(".candy").effect( "shake", { direction: "up", times: 4, distance: 0}, 700 );
		});
	});




	$(window).width(function(){
	console.log ('get window width');

	var windowWidth = $(window).width();
    
    if (windowWidth >= 768) {
    console.log('window is at least 768');
	}	
	});
	







