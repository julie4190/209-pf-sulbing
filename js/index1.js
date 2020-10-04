/* <div class="thumb">
	<img src="../img/p1.jpg" alt="썸네일" class="img thumb-img">
</div> */

/*************** 사전지식 ***************/
// $(html).appendTo(".thumbs") 	// return $(".thumb")
// $(".thumbs").append(html)		// return $(".thumbs")


/*************** 전역변수 ***************/
var data = [{

	src: "../img/br818.jpg",
	title: "그림1",
    
	
	
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

/*
var now = 0;
var depth = 11;
var interval = setInterval(intervalFn, 3000);
function intervalFn() {
	now = (now == 3) ? 0 : now + 1;
	$(".slide").eq(now).css({"opacity": 0, "z-index": depth++}).stop().animate({"opacity":1}, 600);
}
*/


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
	var $thumb = $(this);
	$(".thumb").removeClass("active");
	$thumb.addClass("active");
	$(".big-img").stop().fadeOut(200, function () {
		$(this).attr("src", $thumb.find("img").attr("src")).fadeIn(400);
	});
}

$(".big-img").click(onBigClick);

function onBigClick() {
	$(".modal-img").attr("src", $(this).attr("src"));
	$(".modal-wrap").stop().fadeIn(300);
}

function onModalClose() {
	$(".modal-wrap").stop().fadeOut(300);
}

function prdInit() {
	prdArr = [];
	prdArr[1] = prdNow;
	prdArr[0] = (prdNow == 0) ? prdLast : prdNow - 1;
	for (var i = 2; i < prdSize; i++) prdArr[i] = (prdArr[i - 1] == prdLast) ? 0 : prdArr[i - 1] + 1;
	for (var i = 0; i < prdArr.length; i++) $(prds[prdArr[i]]).clone().appendTo(".prd-wrap");
}

function onPrdLeft() {
	prdTar = 0;
	prdNow = (prdNow == 0) ? prdLast : prdNow - 1;
	prdAni();
}

function onPrdRight() {
	prdTar = prdLeft * 2 + "%";
	prdNow = (prdNow == prdLast) ? 0 : prdNow + 1;
	prdAni();
}

function prdAni() {
	$(".prd-wrap").stop().animate({ "left": prdTar }, 500, function () {
		$(this).empty().css({ "left": prdLeft + "%" });
		prdInit();
	});
}

var pageOffset = [];
var idx = 0;

$(".header").click(onNavClick).trigger("click");
$(".navi-wrap").click(onNavClick);
$(window).resize(onResize).trigger("resize");
$(window).scroll(onScroll).trigger("scroll");

function onResize() {
	for (var i = 0; i < $(".portfolio").length; i++) {
		pageOffset[i] = $(".portfolio").eq(i).offset().top;
	}
}

function onScroll() {
	var sctop = $(this).scrollTop();
	for (var i = pageOffset.length; i >= 0; i--) {
		if (sctop >= pageOffset[i]) {
			idx = i;
			break;
		}
	}
	console.log(idx);
	$(".navi").removeClass("active");
	$(".navi").eq(idx).addClass("active");
}

function onNavClick() {
	idx = $(this).index();
	// $("html, body").stop().animate({ "scrollTop": (pageOffset[idx] + 1) + "px" }, 500);
	$(".navi").removeClass("active");
	$(".navi").eq(idx).addClass("active");
}

var interval;
document.querySelector(".navi").addEventListener("click", function () {
	clearInterval(interval);
	var obj = this;
	var tar = 0;
	interval = setInterval(function () {
		var left = Number(obj.style.left.replace("px", ""));
		tar += (1200 - left) * 0.05;
		// console.log(tar);
		obj.style.left = tar + "px";
	}, 33);
});


/**************** 이벤트 등록 *****************/
$(window).resize(onResize).trigger("resize");
$(window).scroll(onScroll).trigger("scroll");

$(".mo-bars").click(onBarsClick);
$(".bt-up").click(onUpClick);

function onResize() {
	var wid = $(this).innerWidth();
	$(".mo-wrap").hide();
}

function onScroll() {
	var scTop = $(this).scrollTop();
	if (scTop > $(this).innerHeight()) $(".bt-up").css({ "opacity": 1, "visibility": "visible" });
	else $(".bt-up").css({ "opacity": 0, "visibility": "hidden" });
}

function onBarsClick() {
	$(".navis").stop().slideToggle(300);
}

function onUpClick() {
	// $("html, body").stop().animate({ "scrollTop": 0 }, 500);
}


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