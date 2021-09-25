function init_main(){
	$(window).scroll(function(){
		var y = $(this).scrollTop();
		$("#goToTop").toggleClass('slide-up', y > 400);

	});
	
	$("#goToTop").click(function(){
		$("html, body").animate({
			scrollTop: 0
		}, 900)
	})
}


function init_menu(){
	$(".tab-col:not(:first-child)").hide();
	$(".menu-tab a").click(function() {
		event.preventDefault();
		$(".menu-tab a").removeClass("tab-color");
		$(this).addClass("tab-color");

		var tab = $(this).attr("href");

		$(".tab-col").hide();

		$(tab).show();
	})


	var track = document.querySelector('.carousel_track');
	var slide = Array.from(track.children);

	var nav_indicator = document.querySelector('.carousel_nav');
	var indicator = Array.from(nav_indicator.children);
	
	nav_indicator.addEventListener('click', e =>{
		var targetIndicator = e.target.closest('.wrapper_carousel_indicator');
		if(!targetIndicator) return;
		for(var i = 0; i < nav_indicator.children.length; i++){
			indicator[i].classList.remove('current_indicator');
		}
		targetIndicator.classList.add('current_indicator');

		var targetIndex = indicator.findIndex(dot => dot === targetIndicator);
		console.log(targetIndex);


		track.style.transform = `translateX(${targetIndex * -100}%)`;
	});


}


function init_contact(){
	var contact_button = document.querySelector(".contact-button");
	contact_button.onclick = function() {
		var anoucement = true;
		var check = document.querySelectorAll(".input");
		for(var i = 0; i < check.length; i++){
			var border_Warning = true;
			if(check[i].value == ''){
				anoucement = false;
				border_Warning = false;
				check[i].style.borderColor = "rgb(210, 50, 23)";
			}
			if(border_Warning){
				check[i].style.borderColor = "rgb(230, 230, 230)";
			}
		}
		if(!anoucement){
			$(".wrapper-notify-contact").remove();
			$(".contact-button").after("<div class='wrapper-notify-contact no'><strong class='notify-contact'><i class='fas fa-times' style='margin-right: 6px;'></i>Your form hasn't filled</strong></div>");
		}
		else{
			$(".wrapper-notify-contact").remove();
			$(".contact-button").after("<div class='wrapper-notify-contact yes'><strong class='notify-contact'><i class='fas fa-check' style='margin-right: 6px;'></i>Submit Successfully</strong></div>")
		}
	}
}


function init_reservations(){
	var canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	var c = canvas.getContext('2d');

	
	for(var i = 0; i < 4; i++){
		var x = 350 * i;  // khoang cach giua cac ban
		var y = 0;
		if (i > 1){	  // xac dinh vi tri cac ban o duoi
			x = 350 * (i - 2);
			y = 330;
		}
		// wrapper chair
		c.beginPath();
		c.moveTo(130 + x, 62 + y);
		c.lineTo(70 + x, 62 + y);
		c.lineTo(65 + x, 120 + y);
		c.lineTo(70 + x, 178 + y);
		c.lineTo(130 + x, 178 + y);
		c.fillStyle = "#F1EEE8";
		c.stroke();
		c.fill();
		// chair
		c.beginPath();
		c.moveTo(135 + x, 68 + y);
		c.lineTo(80 + x, 68 + y);
		c.lineTo(75 + x, 120 + y);
		c.lineTo(80 + x, 172 + y);
		c.lineTo(135 + x, 172 + y);
	//  c.lineTo(125, 170);
		c.fillStyle = "black";
		c.stroke();
		c.fill();
	}

	for(var i = 0; i < 4; i++){
		var x = 350 * i;  // khoang cach giua cac ban
		var y = 0;
		if (i > 1){	  // xac dinh vi tri cac ban o duoi
			x = 350 * (i - 2);
			y = 330;
		}
		var z = 270;
		// wrapper chair
		c.beginPath();
		c.moveTo(z + x, 62 + y);
		c.lineTo(z + 60 + x, 62 + y);
		c.lineTo(z + 65 + x, 120 + y);
		c.lineTo(z + 60 + x, 178 + y);
		c.lineTo(z + x, 178 + y);
		c.fillStyle = "#F1EEE8";
		c.stroke();
		c.fill();
		// chair
		c.beginPath();
		c.moveTo(z + x, 68 + y);
		c.lineTo(z + 50 + x, 68 + y);
		c.lineTo(z + 55 + x, 120 + y);
		c.lineTo(z + 50 + x, 172 + y);
		c.lineTo(z + x, 172 + y);
	//  c.lineTo(125, 170);
		c.fillStyle = "black";
		c.stroke();
		c.fill();
	}

	for(var i = 0; i < 4; i++){
		var x = 200 + 350 * i;
		var y = 120;
		if(i > 1){
			x = 200 + 350 * (i - 2);
			y = 450;
		}
		c.beginPath();
		c.arc(x, y, 90, Math.PI * 2, false);
		c.fillStyle = 'rgb(211,207,193)';
		c.stroke();
		c.fill();
	}


	// 
	for(var i = 0; i < 4; i++){
		var x = 840;
		var y = 70 + 100 * i;
		c.beginPath();
		c.arc(x, y, 35, 0, Math.PI * 2, false);
		c.fillStyle = 'rgb(211,207,193)';
		c.stroke();
		c.fill();
	}
	for(var i = 0; i < 5; i++){
		var x = 940 + 100 * i;
		var y = 506;
		c.beginPath();
		c.arc(x, y, 35, 0, Math.PI * 2, false);
		c.fillStyle = 'rgb(211,207,193)';
		c.stroke();
		c.fill();
	}
	//
	c.beginPath();
	c.moveTo(900,30);
	c.quadraticCurveTo(888, 450, 900, 450);
	c.quadraticCurveTo(1400, 462, 1400, 450);
	c.quadraticCurveTo(1410, 350, 1400, 350);
	c.quadraticCurveTo(1000, 350, 1000, 350);
	c.quadraticCurveTo(1010, 32, 1000, 32);
	c.quadraticCurveTo(900, 27, 900, 32);
	c.stroke();

	// danh so
	c.fillStyle = "black";
	c.beginPath();
	c.font = "24px serif";
	c.fillText(1, 150, 80);
	c.fillText(2, 150 + 350, 80);
	c.fillText(3, 150, 80 + 330);
	c.fillText(4, 150 + 350, 80 + 330);
	c.fillText(5, 820, 65);
	c.fillText(6, 820, 165);
	c.fillText(7, 820, 265);
	c.fillText(8, 820, 365);
	c.fillText(9, 920, 501);
	c.fillText(10, 1020, 501);
	c.fillText(11, 1120, 501);
	c.fillText(12, 1220, 501);
	c.fillText(13, 1320, 501);
}