function convert(){
	
    var xml = $("#xmldoc").val(),
    xmlDoc = $.parseXML( xml ),
    $xml = $( xmlDoc );
    $xml.find("rule").each(function(){
        
        var str2   = $(this).find("rule>action").attr('url');
        var regex = /{R:(\d{1})}/;
        while (regex.test(str2)) {
		  str2 = str2.replace(regex, '\$'+ '$1' );
	    }  
        // if (str2.match(regex)) {
        //     str2 = str2.replace(regex, "$1" + "nima");
        // }

        
        $('#result').append( "RewriteRule " +
            $(this).find("rule>match").attr('url') +
                " &nbsp;&nbsp; " + 
                 str2 + 
                "<br>");
    });
	
}