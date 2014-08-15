//var cool = false;

$(document).ready(function() {
	var cool = false;
	var mouseenter = false;

	if (cool == false) {
		$('.ryu').mouseenter(function() {
			mouseenter = true;
			$('.ryu-still').hide();
			$('.ryu-ready').show();
		})
		.mouseleave(function() {
			mouseenter = false;
			$('.ryu-ready').hide();
			$('.ryu-still').show();
		})
		.mousedown(function() {
			playHadouken();
			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('.ryu-cool').hide();
			$('.ryu-throwing').show();
			$('.hadouken').finish().show()
				.animate(
					{'left': '300px'},
					500,
					function() {
						$(this).hide();
						$(this).css('left', '-180px');
					}
				);
		})
		.mouseup(function() {
			$('.ryu-throwing').hide();
			$('.ryu-ready').show();
			$('.ryu-cool').hide();
		});
	}

	$('html').keydown(function(event) {
		if (event.which == 88) {
			cool = true;
			$('.ryu-still').hide();
			$('.ryu-throwing').hide();
			$('.ryu-ready').hide();
			$('.hadouken').hide()
			$('.ryu-cool').show();
		}

	})
	.keyup(function(event) {
		$('.ryu-cool').hide();
		if (mouseenter == true)
			$('.ryu-ready').show();
		else
			$('.ryu-still').show();
		cool = false;
	});


});

function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.25;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}