// $(document).ready(function(){
// 	$('.btn btn-default').submit(function(event) {
//  		event.preventDefault();
//  	});
 	
//  		$('.btn btn-default').click(function() {
//  		console.log ('button clicked!')
//  		$('.submit-message').show();
//  		alert("Thank you! Your recipe has been submitted.");
// };

$(function(){

	$('.recipe-form').submit(function(event) {
		event.preventDefault();
		console.log('form!');

		$('#submit-button').click(function() {
		console.log('button was clicked!');
		$('.alert-success').show();
		}

	});
});