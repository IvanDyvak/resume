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


    $('.full-text').hide();
    $('.view-btn').click(function (event) {
        event.preventDefault();
        $(this).parent().find('.full-text').slideToggle('slow');
        $(this).text($(this).text() == '-' ? '+' : '-');    });

// $(function(){
//     $('.selectpicker').selectpicker();
// });


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
