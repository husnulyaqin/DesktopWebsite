$( document ).ready(function() {
    console.log( "JS has been loaded" );
   
    //ICON CLICK EVENT
    $('.icon').click(function(e){


    	$('#IE').removeClass('close');
    	$('#notepad').removeClass('close');
    	$('#IE').addClass('open');
    	$('#notepad').addClass('open');

    });

    //CLOSE BTN CLICK EVENT
    $('.close-btn').click(function(e){

    	$('#IE').removeClass('open');
    	$('#notepad').removeClass('open');
    	$('#IE').addClass('close');
    	$('#notepad').addClass('close');

    });

	console.log("End of scripts.js");
});
