var init_friend_lookup = function() {
	//Display spinner before you get a response from ajax.
	$('#friend-lookup-form').on('ajax:before', function(event, data, status) {
		show_spinner();
	});
	//Hide spinner after you receive a response from ajax.
	$('#friend-lookup-form').on('ajax:after', function(event, data, status) {
		hide_spinner();
	});
	//If the ajax request is successfull, replace the friend-form-lookup div with ajax data.
	$('#friend-lookup-form').on('ajax:success', function(event, data, status) {
		$('#friend-lookup').replaceWith(data);
		console.log(data);
		init_friend_lookup();
	});
	//If the ajax request is not successfull, display an error div.
	$('#friend-lookup-form').on('ajax:error', function(event, xhr, status, error) {
		hide_spinner();
		$('#friend-lookup-results').replaceWith(' ');
		$('#friend-lookup-errors').replaceWith('person was not found.');
	});
}

//Run the friend lookup function after the document fully loads.
$(document).ready(function() {
	init_friend_lookup();
});