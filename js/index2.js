/* <div class="thumb">
	<img src="../img/p1.jpg" alt="썸네일" class="img thumb-img">
</div> */

/*************** 사전지식 ***************/
// $(html).appendTo(".thumbs") 	// return $(".thumb")
// $(".thumbs").append(html)		// return $(".thumbs")


/*************** 전역변수 ***************/
var data = [{
	
		src: "../img/br818.jpg",
		title: "그림1"
	},
	{
		src: "../img/coffee8170.jpg",
		title: "그림2"
	},
	{
		src: "../img/gym819.jpg",
		title: "그림3"
	},
	{
		src: "../img/kit8174.jpg",
		title: "그림4"
	},
	{
		src: "../img/pax8171.jpg",
		title: "그림5"
	},
	{
		src: "../img/site8173.jpg",
		title: "그림6"
	},
	{
		src: "../img/band817.jpg",
		title: "그림7"
	},
	{
		src: "../img/we8177.jpg",
		title: "그림8"
},
];
var last = data.length;
var thumbWidth = 100 / last - 1 + "%"; // 11.5%
init();


var now = 0;
var depth = 11;
var interval = setInterval(intervalFn, 3000);
function intervalFn() {
	now = (now == 3) ? 0 : now + 1;
	$(".slide").eq(now).css({"opacity": 0, "z-index": depth++}).stop().animate({"opacity": 1}, 300);
}



/*************** 사용자 지정 ***************/
function init() {
for (var i = 0, html; i < last; i++) {
	html = '<div class="thumb" style="width: ' + thumbWidth + ';">';
	html += '<img src="' + data[i].src + '" class="img thumb-img">';
	html += '</div>';
	$(html).appendTo(".thumbs").click(onThumbClick);
}
$(".thumb").eq(0).trigger("click");
}

/*************** 이벤트 콜백 ***************/
function onThumbClick() {
var $thumb=$(this);
$(".thumb").removeClass("active");
$thumb.addClass("active");
$(".big-img").stop().fadeOut(200, function () {
	$(this).attr("src", $thumb.find("img").attr("src")).fadeIn(400);
});
}
function onBigClick() {
	$(".modals-img").attr("src", $(this).attr("src"));
	$(".modals-wrap").stop().fadeIn(300);
}

function onModalClose() {
$(".modal-wrap").stop().fadeOut(300);
}

var pressStart = $(".press-wrap").offset().top;
	var pressHei = $(".press-wrap").innerHeight();
	var pressEnd = pressStart + pressHei + hei;
	var pressGap = 0;
	var pressSpeed = 200;
	if(scTop + hei > pressStart && scTop + hei < pressEnd) {
		pressGap = (pressSpeed/2) - Math.round((scTop + hei - pressStart) / (pressEnd - pressStart) * pressSpeed);
		$(".press-wrap").css("background-position-y", pressGap + "%");
	}var pressStart = $(".press-wrap").offset().top;
	var pressHei = $(".press-wrap").innerHeight();
	var pressEnd = pressStart + pressHei + hei;
	var pressGap = 0;
	var pressSpeed = 200;
	if(scTop + hei > pressStart && scTop + hei < pressEnd) {
		pressGap = (pressSpeed/2) - Math.round((scTop + hei - pressStart) / (pressEnd - pressStart) * pressSpeed);
		$(".press-wrap").css("background-position-y", pressGap + "%");
	}
	// .bt-top show/hide
	(scTop > hei) ? $(".bt-top").show() : $(".bt-top").hide();


function onTop() {
	$("html, body").stop().animate({"scrollTop": 0}, 500);
}

function onNaviShow() {
	$(".navi-mo").css("display", "block");
	setTimeout(function(){
		$(".header .bt-close").css("opacity", 1);
		$(".navi-mo").css("background-color", "rgba(0,0,0,0.8)");
		$(".navi-mo").find(".navi-wing").css("right", 0);
	}, 0);
}

function onNaviHide() {
	$(".navi-mo").css("background-color", "transparent");
	$(this).stop().animate({"opacity": 0}, 500, function(){
		$(".navi-mo").find(".navi-wing").css("right", "-320px");
		setTimeout(function(){
			$(".navi-mo").css("display", "none");
		}, 500);
	});
}

function onNaviClick() {
	var tar = $(".page").eq($(this).index()).offset().top + 1;
	$("html, body").stop().animate({"scrollTop": tar}, 500);
}

function onLogoClick() {
	$("html, body").stop().animate({"scrollTop": 0}, 500);
}

/******************* 이벤트 설정 ********************/
$(window).resize(onResize).trigger("resize");
$(window).scroll(onScroll).trigger("scroll");
$(".bt-top").click(onTop);
$(".header .navi-bars").click(onNaviShow);
$(".header .bt-close").click(onNaviHide);
$(".header > .navi").click(onNaviClick);
$(".header > .navi-mo .navi").click(onNaviClick);
$(".header > .logo").click(onLogoClick);
