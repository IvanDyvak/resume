$(document).ready(function(){

$("a[href^='#tab']").click(function(){
    $('body, html').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1500)
  });


function moveClass() {
    $('.arrow').toggleClass('arrowActive');
}
setInterval(moveClass, 1500);



$(".btn").click(function () {
                $.ajax({
                    type: "GET",
                    url: "more.html",
                    success: function (data) {
						$(".btn").attr("disabled", "disabled")
                    	$(".work").append(data);
                    }
                });
            });


})