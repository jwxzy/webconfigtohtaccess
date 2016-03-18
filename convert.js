function convert(){
	
	var xml = $("#xmldoc").val(),
	xmlDoc = $.parseXML( xml ),
	$xml = $( xmlDoc );
	//$title = $xml.find( "title" );



	// $($xml).each(function(){
	// 	alert($(this).find("Page[Name]>controls>name").text());
	// });



    $xml.find("rule").each(function(){
    	$('#someElement').append($(this).find("rule>match").attr('url') + " ------ " + $(this).find("rule>action").attr('url') +"<br>");
	 	//alert($(this).attr('url'));
	
	 });
	
}