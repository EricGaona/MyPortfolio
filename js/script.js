// ____________________   This for the slowly move to About, Work, Contact
$('a[href^="#"]').on('click', function(){	
  
	var primero =$(this).attr('href');
	
	var distancia = $(primero).offset().top;
	
  	$('body, html').animate({'scrollTop':distancia},600);	
	return false;
   
});


// ____________________   This is for the  up arrow 

$('#arrow').hide();
var altura = $('header').outerHeight();
var des = $(window).scrollTop();
$(window).on('scroll', function(){
    
     des = $(window).scrollTop();
    
    if(des > altura){
        $('#arrow').fadeIn();
    }else{
        $('#arrow').fadeOut();
    }
    
});