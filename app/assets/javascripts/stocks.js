var init_stock_lookup = function() {
	//Display spinner before you get a response from ajax.
	$('#stock-lookup-form').on('ajax:before', function(event, data, status) {
		show_spinner();
	});
	//Hide spinner after you receive a response from ajax.
	$('#stock-lookup-form').on('ajax:after', function(event, data, status) {
		hide_spinner();
	});
	//If the ajax request is successfull, replace the stock-form-lookup div with ajax data.
	$('#stock-lookup-form').on('ajax:success', function(event, data, status) {
		$('#stock-lookup').replaceWith(data);
		console.log(data);
		init_stock_lookup();
	});
	//If the ajax request is not successfull, display an error div.
	$('#stock-lookup-form').on('ajax:error', function(event, xhr, status, error) {
		hide_spinner();
		$('#stock-lookup-results').replaceWith(' ');
		$('#stock-lookup-errors').replaceWith('Stock was not found.');
	});
}

//Run the stock lookup function after the document fully loads.
$(document).ready(function() {
	init_stock_lookup();
});