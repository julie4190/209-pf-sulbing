/**************** 이벤트 등록 *****************/
$(window).resize(onResize).trigger("resize");
$(window).scroll(onScroll).trigger("scroll");

$(".navi-mobile .fa-bars").click(onBarsClick);
$(".bt-up").click(onUpClick);


$(".header .navi").click(function(){
	var idx = $(this).index();
	var target = $(".page").eq(idx).offset().top;
	console.log(target);
	$("html, body").stop().animate({"scrollTop": target}, 500);
});