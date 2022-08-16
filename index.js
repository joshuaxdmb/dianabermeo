// jQuery(function($) {
//     $(window).on('scroll', function() {
// 		if ($(this).scrollTop() >= 200) {
// 			$('.navbar').addClass('fixed-top');
// 		} else if ($(this).scrollTop() == 0) {
// 			$('.navbar').removeClass('fixed-top');
// 		}
// 	});
	
// 	function adjustNav() {
// 		var winWidth = $(window).width(),
// 			dropdown = $('.dropdown'),
// 			dropdownMenu = $('.dropdown-menu');
		
// 		if (winWidth >= 768) {
// 			dropdown.on('mouseenter', function() {
// 				$(this).addClass('show')
// 					.children(dropdownMenu).addClass('show');
// 			});
			
// 			dropdown.on('mouseleave', function() {
// 				$(this).removeClass('show')
// 					.children(dropdownMenu).removeClass('show');
// 			});
// 		} else {
// 			dropdown.off('mouseenter mouseleave');
// 		}
// 	}
	
// 	$(window).on('resize', adjustNav);
	
// 	adjustNav();
// });


//Contact Form in PHP
const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");
form.onsubmit = (e)=>{
  e.preventDefault();
  form.classList.add("disabled");
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "message.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState == 4 && xhr.status == 200){
      let response = xhr.response;
      if(response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1){
        statusTxt.style.color = "red";
      }else{
        form.reset();
        setTimeout(()=>{
          statusTxt.style.display = "none";
        }, 3000);
      }
      statusTxt.innerText = response;
      form.classList.remove("disabled");
    }
  }
  let formData = new FormData(form);
  xhr.send(formData);
}