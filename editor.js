afterDelay = $.Callbacks();
$(document).ready(function() {
	$('#editor').html(localStorage['content']);
	
	$('#clear').click(function() {
			$('#editor').html('');
			localStorage.clear();
			window.location = window.location;
	});
	
	$('#editor').on('keypress', function() {
		if(typeof t === 'undefined') {} else { clearTimeout(t); }
		var t = setTimeout(afterDelay.fire, 5000);
	});
});

afterDelay.add(save);
function save() {
	var content = $('#editor').html();
	if(localStorage['content'] != content) {
		localStorage['content'] = content;
		
		var saved = $('#saved');
		saved.css('opacity', 1);
		saved.animate({opacity: 0}, 'slow');
	}
}
