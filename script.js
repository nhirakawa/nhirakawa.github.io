/**
 * Created by Nick on 8/23/2014.
 */

$(document).ready(function(){
	$('#year').text(new Date().getFullYear());
	$('#about').click(function(){
		$('#resume-content').slideUp(300, function(){
			$('#about-content').slideDown(300);
		});
	});
	$('#resume').click(function(){
		$('#about-content').slideUp(300, function(){
			$('#resume-content').slideDown(300);
		});
	})
});