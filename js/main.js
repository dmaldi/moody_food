// Bxslider - change bg color on click according to mood selected

//When buttons bx-prev and bx-next are clicked, do something. 
// $(".bx-next, .bx-prev").click(function() {
// // If button clicked has a class of "slide-onion", change bg color to match mood.
// 	if ($(this).hasClass ('slide-onion').css("background-color", "rgb(180,180,180)"));
// });


// // If button clicked has a class of "onion", change bg color to match mood.
	// $('.bx-pager-link.active').ready(function() {
	// 	console.log ("!!");
	// 	active = $('.active');
	// 	console.log ("var active set");
	// 	idImage = $('#image0');
	// 	console.log("var image set");
	// 	combined = ('.active, #image0')
	// 	$('.bx-next, .bx-prev').click(function(){
	// 		console.log ("working");
	// });
	// 		if ($(idImage).hasClass(active));
	// 		console.log ("if statement set")
	// 			$('body').css("background-color", "rgb(180,180,180)"); 
	// 			console.log ('onion has background color')
		


	// $( "div" ).click(function() {
	//   var color = $( this ).css( "background-color" );
	//   $( "#result" ).html( "That div is <span style='color:" + color + ";'>" + color + "</span>." );
	// });

	// var allLinks = $("a");
		
	// allLinks.click(function() {
	// 	allLinks
	// 		.removeClass('red')
	// 		.not(this)
	// 		.addClass('red');
	// });



$(document).ready(function() {
	//Image hover effects (larger screens)
	$(document).ready(function() {
	$(".onion").hover(function() {
		console.log ("i am a hovering onion!");
		$(".onion").effect("shake");
	});

	$(".donut").hover(function() {
		console.log ("i am a hovering donut!");
		$(".donut").effect("fade");
	});

	$(".burger").hover(function() {
		console.log ("i am a hovering burger!");
		$(".burger").effect("scale");
	});

	$(".coffee").hover(function() {
		console.log ("i am a hovering coffee!");
		$(".coffee").effect( "shake", { direction: "left", times: 3, distance: 5}, 450 );
	});

	$(".candy").hover(function() {
		console.log ("i am a hovering candy!");
		$(".candy").effect( "shake", { direction: "up", times: 4, distance: 10}, 700 );
	});


function colorChange($slideElement, oldIndex, newIndex) {
	var mood = $slideElement.text();
	
		if(slideElement.text == 0) {
			$('body').css('background-color', 'rgb(51, 183, 51)');
			$(".bx-viewport").css('background', 'transparent');
		}	
		if(slideElement.text == 1) {
			$('body').css('background-color', 'rgb(180, 180, 180)');
			$(".bx-viewport").css('background', 'transparent');
		}
		if(slideElement.text== 2) {
			$('body').css('background-color', 'rgb(255, 173, 0)');
			$(".bx-viewport").css('background', 'transparent');
		}
		if(slideElement.text == 3) {
			$('body').css('background-color', 'rgb(240, 0, 0)');
			$(".bx-viewport").css('background', 'transparent');
		}
		if(slideElement.text== 4) {
			$('body').css('background-color', 'rgb(153, 204, 255)');
			$(".bx-viewport").css('background', 'transparent');
		}
		if(slideElement.text == 5) {
			$('body').css('background-color', 'rgb(255, 153, 204)');
			$(".bx-viewport").css('background', 'transparent');
		}
		// };// function reload($slideElement, oldIndex, newIndex) {
		// console.log('reload');
		// $(currentIndex).bxSlider(function(){
		// 	console.log('getreload');
			// onSliderLoad: updateColors,
			// console.log('update colors on reload');
			// onSlideNext: updateColors,
			// console.log()
			// onSlidePrev: updateColors
		// });
		// };
		// function (currentIndex) {
		// 	onSliderLoad: updateColors
		// };
		// function ($slideElement, oldIndex, newIndex) {
		// 	$('.bxslider').bxSlide({
		// 		onSlideNext: updateColors,
		// 		onSlidePrev: updateColors 
		// 	});
		// };
		function(currentIndex) {
	$('.bxslider').bxSlider({
  					onSliderLoad: updateColors,
					onSlideNext: updateColors, 
  					onSlidePrev: updateColors
 }); 
 };
 });			
 //  		});
 //  	});

// });



	