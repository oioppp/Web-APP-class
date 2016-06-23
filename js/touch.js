function allTouch(){
	//document.getElementById ("demo").innerHTML="h";
	for(var i=1;i<=2;i++){
		var id = "#F"+i.toString()+"L";
		var id2 = "#F"+i.toString()+"R";
		//document.getElementById ("demo").innerHTML= id+ " " +id2;
		touch(id);
		touch(id2);
	}
}

function touch(id){
	var enter_P = $(id).position();
	var a_L = enter_P.left;
	var a_R = enter_P.left + $(id).width();
	var b_U = enter_P.top;
	var b_D = enter_P.top + $(id).height();
	var f1_P = $("#f1").position();
	var x_L = f1_P.left;
	var x_R = x_L + $("#f1").width();
	var y_U = f1_P.top;
	var y_D = y_U + $("#f1").height();
	//document.getElementById ("demo").innerHTML=b_D+" "+a_L;
	if((x_R>a_L&&x_R<a_R)||(x_L>a_L&&x_L<a_R)){
		if((y_D>b_U&&y_D<b_D)||(y_U>b_U&&y_U<b_D)){
			
			var id2="q";
			//window.open("test.html","_self");
			//document.getElementById('modal_1L').style.display = "block";
			switch(id){
				case "#F1L":
					document.getElementById('modal_1L').style.display = "block";
					id2 = "modal_1L";
					document.getElementById("v2").play();
					//document.getElementById ("demo").innerHTML= id+ " " +id2;
					break;
				case "#F1R":
					document.getElementById('modal_1R').style.display = "block";
					id2 = "modal_1R";

					break;
				case "#F2L":
					document.getElementById('modal_2L').style.display = "block";
					id2 = "modal_2L";
					break;
				case "#F2R":
					document.getElementById('modal_2R').style.display = "block";
					id2 = "modal_2R";
					break;
				default:
			}
			modal_Act(id2);
		}
	}
}
function modal_Act(id){
	//document.getElementById ("demo").innerHTML= id;
	var modal = document.getElementById(id);

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
			document.getElementById("v2").pause();
		}
	}
}
	
