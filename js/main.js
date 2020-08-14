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



function flash(){
    $(".lang").eq(index).animate({
        scale:1
    }, 1500)
};




// $('.lang').toggle(function () {
//     $('.lang', this).animate({
//         fontSize: '30px'
//     });
// }, function () {
//     $('.lang', this).animate({
//          fontSize: '15px'
//     });
// });




    $('.full-text').hide();
    $('.view-btn').click(function (event) {
        event.preventDefault();
        $(this).parent().find('.full-text').slideToggle('slow');
        $(this).text($(this).text() == '<<<' ? '>>>' : '<<<');
    });



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



$(".btn-rounded").click(function () {
    $.ajax({
        type: "GET",
        url: "../more_en.html",
        success: function (data) {
            $(".btn-rounded").attr("disabled", "disabled")
            $(".work").append(data);
        }
    });
});


})
