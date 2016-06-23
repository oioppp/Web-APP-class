var B_menu = 0;
var Y_menu = 500;
var x=0;

window.onscroll = function(){moveMenu()};
var openMenu = function openMenu(){
	
	if(B_menu==0){
		document.getElementById('menu2').style.display="block";
		B_menu=1;
	}else if(B_menu==1){
		document.getElementById('menu2').style.display="none";
		B_menu=0;
	}
}

function moveMenu(){
	var menu_Position = $(".menu").position();
	//document.getElementById ("demo").innerHTML=$(window).scrollTop();
	
	if($(window).scrollTop()> menu_Position.top){
		var a=100;
		$(".menu").offset({top: menu_Position.top=$(window).scrollTop()-100});
		while(a>0){
			setTimeout(function(){$(".menu").offset({top: menu_Position.top+=10});$(".menu2").offset({top: menu_Positions.top});},300);
			//$(".menu2").offset({top: $(".menu").position().top});
			a-=10;
		}
		//document.getElementById ("demo").innerHTML=$(window).scrollTop();
	}else if($(window).scrollTop()< menu_Position.top){
		$(".menu").offset({top: menu_Position.top-=30});
		//$(".menu2").offset({top: menu_Position.top});}
	}
}

