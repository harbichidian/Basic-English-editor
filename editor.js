$(document).ready(function() {
	$('#editor').html(localStorage['content']);
	
	$('#clear').click(function() {
			$('#editor').html('');
			localStorage.clear();
			window.location = window.location;
	});
	
	$('#editor').on('keypress', function() {
		if(typeof t === 'undefined') {} else { clearTimeout(t); }
		var t = setTimeout(editor_timer, 5000);
	});
});

function editor_timer() {
	var content = $('#editor').html();
	if(localStorage['content'] != content) {
		spellCheck();
		save(content);
	}
}

function save(content) {
	localStorage['content'] = content;
	
	var saved = $('#saved');
	saved.css('opacity', 1);
	saved.animate({opacity: 0}, 'slow');
}
