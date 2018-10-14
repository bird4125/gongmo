function pageLoad(){

	p1_animation();
	list_animation();
	last_animation()
	footer_animation()
}

function p1_animation(){
	var st = $(window).scrollTop();
	var sh = $(window).height();
	var sb = st + sh;
	$(".part1 .part1_sub").each(function(index){
		var ot = $(this).offset().top + 200;
		if(sb > ot){
			$(this).removeClass("p1_moveBefore")
		}
	})
}
function list_animation(){
	var st = $(window).scrollTop();
	var sh = $(window).height();
	var sb = st + sh;
	$(".list.l1 li").each(function(index){
		var ot = $(this).offset().top + 345;
		if(sb > ot){
			$(this).removeClass("listUpBefore")
		}
	})
}

function last_animation(){
	var st = $(window).scrollTop();
	var sh = $(window).height();
	var sb = st + sh;
	$(".part4_forimg").addClass("fade")
	$(".part4_forimg").css({
		"transition":"1s"
	})
	$(".part4_forimg").each(function(index){
		var ot = $(this).offset().top
		var oh = $(this).outerHeight();
		var ob = ot + oh;
		if( sb > ob ){
			$(this).removeClass("fade")
		}
	})
}

function footer_animation(){
	var st = $(window).scrollTop();
	var sh = $(window).height();
	var sb = st + sh;
	$(".in_footer > div").each(function(index){
		var ot = $(this).offset().top;
			if(sb > ot){
				$(this).removeClass("p1_moveBefore")
			}
		if($(this).hasClass("f1")) $(this).css({
			"transition-delay":"0s"
		})
			if($(this).hasClass("f2")) $(this).css({
			"transition-delay":".3s"
		})
				if($(this).hasClass("f3")) $(this).css({
			"transition-delay":".6s"
		})

	})
}


$(pageLoad)
.on("scroll",p1_animation)
.on("scroll",list_animation)
.on("scroll",last_animation)
.on("scroll",footer_animation)
