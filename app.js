"use strict"
jQuery(document).ready(function () {

	$('button').on('click',function(){
		
		//get the new search text
		var find_text = $('input').val();
		
		//clear the list
		$('ul').html("");
		
		//search twitter
		$.getJSON("http://hack-lab.herokuapp.com/find?text='"+find_text+"'",function(data){
			// success!! 
			$.each(data.statuses,function(index,value){
				//add the tweet to the ul
				$('ul').append($('<li>').text(value.text));
			});
		});
		
	})

});