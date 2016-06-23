document.addEventListener("keydown",keyDownTextField,false);

function keyDownTextField(e){
	var direction="";
	var f1_Position = $("#f1").position();
	var keyCode = e.keyCode;
	//$("#f1").offset({top: 200, left: 200});
	switch(keyCode){
		case 37: // left
			setTimeout(function(){$("#f1").attr("src","assets/image/person/L2.png");},0);
			setTimeout(function(){$("#f1").attr("src","assets/image/person/L3.png");
			$("#f1").offset({left: f1_Position.left-=50});
			},200);
			setTimeout(function(){$("#f1").attr("src","assets/image/person/L4.png");
				$("#f1").offset({left: f1_Position.left-=50});
			},400);
			
			setTimeout(function(){$("#f1").attr("src","assets/image/person/L1.png");},500);
			setTimeout(function(){allTouch();},600);
          break;
        case 38: // up
			setTimeout(function(){$("#f1").attr("src","assets/image/person/R2.png");},0);
			setTimeout(function(){$("#f1").attr("src","assets/image/person/R3.png");
			$("#f1").offset({top: f1_Position.top-=50});
			},200);
			setTimeout(function(){$("#f1").attr("src","assets/image/person/R4.png");
				$("#f1").offset({top: f1_Position.top-=50});
			},400);
			
			setTimeout(function(){$("#f1").attr("src","assets/image/person/R1.png");},500);
			setTimeout(function(){allTouch();},600);
			
			break;
        case 39: // right
		setTimeout(function(){$("#f1").attr("src","assets/image/person/R2.png");},0);
			setTimeout(function(){$("#f1").attr("src","assets/image/person/R3.png");
			$("#f1").offset({left: f1_Position.left+=50});
			},200);
			setTimeout(function(){$("#f1").attr("src","assets/image/person/R4.png");
				$("#f1").offset({left: f1_Position.left+=50});
			},400);
			
			setTimeout(function(){$("#f1").attr("src","assets/image/person/R1.png");},500);
			setTimeout(function(){allTouch();},600);
			break;
        case 40: // down
			setTimeout(function(){$("#f1").attr("src","assets/image/person/L2.png");},0);
			setTimeout(function(){$("#f1").attr("src","assets/image/person/L3.png");
			$("#f1").offset({top: f1_Position.top+=50});
			},200);
			setTimeout(function(){$("#f1").attr("src","assets/image/person/L4.png");
				$("#f1").offset({top: f1_Position.top+=50});
			},400);
			
			setTimeout(function(){$("#f1").attr("src","assets/image/person/L1.png");},500);
			setTimeout(function(){allTouch();},600);
			
			break;
	}
	//setTimeout(function(){$("#f1").attr("src","assets/image/person/d1.png");},200);
	
	
}

