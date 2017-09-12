/*
*/

var slide = true;
var body = "<div class = 'menu' id = 'menu'>" + 
				"<div class = 'link' id = 'home'></div>" + 
				"<div class = 'link' id = 'task'></div>" + 
				"<div class = 'link' id = 'download'></div>" + 
				"<div class = 'link' id = 'empty'></div>" + 
			"</div>" + 
			" <div class = 'menu' id = 'menuButton'></div>";
$(function() {
  $('body').append(body);
  $('#menuButton').click(function(){
  	if(slide){
    	$('.menu').animate({"left": "+=20%"}, "slow");
    	slide = false;
	}else{
		$('.menu').animate({"left": "-=20%"}, "slow");
    	slide = true;
	}
  });


  $('.link').click(function(){
  	console.log(this.id);
  		if(this.id === 'download'){	
  			window.location.href = "../html/download.htm";
  		}else if(this.id === 'task'){	
  			window.location.href = "../html/task.html";
  		}else if(this.id === 'home'){	
  			window.location.href = "../html/index.html";
  		}
  });
});