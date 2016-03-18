function convert(){
	
    var xml = $("#xmldoc").val(),
    xmlDoc = $.parseXML( xml ),
    $xml = $( xmlDoc );
    $xml.find("rule").each(function(){
        $('#result').append(
            $(this).find("rule>match").attr('url') +
                " &nbsp;&nbsp;&nbsp; " + 
                $(this).find("rule>action").attr('url') +
                "<br>");
    });
	
}