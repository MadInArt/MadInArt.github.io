$(document).ready(function() {

	$("form").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", 
			data: th.serialize()
		}).setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
});