var swiper = new Swiper('.swiper-container',{
	direction: 'vertical',  //vertical,horizontal
	speed: 600,
	moveStartThreshold:500,
	// loop: true,
	onlyExternal: true
})
$('body').bind('touchmove',function(event){
	event.preventDefault();
});

var second = 0, loading=true;
var secondNum = $("#loading-num");
$(window).load(function(){
	var timer = setInterval(function(){
		second++;
		if(second>100){
			loading=false;
			p1Animate();
			swiper.slideNext();
			second = 0;
			clearInterval(timer);
			return;
		}
		secondNum.text(second);
	}, 40);
});

var jQs1 = $('<img src="static/images/p2/s1.gif" id="s1" style="width:100%">');
var jQs2 = $('<img src="static/images/p2/s2.gif" id="s2" style="width:100%;">');
var jQs3 = $('<img src="static/images/p2/s3.gif" id="s3" style="width:100%;">');
var jQs4 = $('<img src="static/images/p2/s4.gif" id="s4" style="width:100%;">');

var jQbai1 = $('<img src="static/images/p3/bai1.gif" id="bai1" style="width:100%">');
var jQbai2 = $('<img src="static/images/p3/bai2.gif" id="bai2" style="width:100%;">');
var jQbai3 = $('<img src="static/images/p3/bai3.gif" id="bai3" style="width:100%;">');
var jQbai4 = $('<img src="static/images/p3/bai4.gif" id="bai4" style="width:100%;">');

var jQnv1 = $('<img src="static/images/p4/nv1.gif" id="nv1" style="width:100%">');
var jQnv2 = $('<img src="static/images/p4/nv2.gif" id="nv2" style="width:100%;">');
var jQnv3 = $('<img src="static/images/p4/nv3.gif" id="nv3" style="width:100%;">');
var jQnv4 = $('<img src="static/images/p4/nv4.gif" id="nv4" style="width:100%;">');

var jQps1 = $('<img src="static/images/p5/ps1.gif" id="ps1" style="width:100%">');
var jQps2 = $('<img src="static/images/p5/ps2.gif" id="ps2" style="width:100%;">');
var jQps3 = $('<img src="static/images/p5/ps3.gif" id="ps3" style="width:100%;">');
var jQps4 = $('<img src="static/images/p5/ps4.gif" id="ps4" style="width:100%;">');

function p1Animate(){
	$("#bd-title").addClass('rotateIn animated');
	$("#bd-sub-title").addClass('zoomIn animated delay0_1');
	$("#secret").addClass('fadeInLeft animated delay1');
	$("#tangsen").addClass('fadeInLeft animated delay2');
	$("#to-go-wrapper").addClass('fadeIn animated delay3');	
}
function p1removeAnimate(){
	$("#bd-title").removeClass('rotateIn animated');
	$("#bd-sub-title").removeClass('zoomIn animated delay0_1');
	$("#secret").removeClass('fadeInLeft animated delay1');
	$("#tangsen").removeClass('fadeInLeft animated delay2');
	$("#to-go-wrapper").removeClass('fadeIn animated delay3');	
}

function p2Animate(){
	$('#p2').append(jQs1);
	setTimeout(function(){
		$('#s1').hide();
		$('#p2').append(jQs3);
		setTimeout(function(){
			$('#s3').hide();
			$('#p2').append(jQs2);
			setTimeout(function(){
				$('#s2').hide();	
				$('#p2').append(jQs4);
			}, 2200)
		}, 3500); //等文字出现完全
	}, 1400);
	$('#waimai-text1').addClass('fadeIn animated delay1');
	$('#bajie-dialog').addClass('fadeIn animated delay2');
	$('#waimai-text2').addClass('fadeIn animated delay3');
	$('#gaolaozhuang-dialog').addClass('fadeIn animated delay4');
	$('#p2 .to-go-wrapper-fade').addClass('fadeIn animated delay7');
}
function p2RemoveAnimate(){	
	jQs1.remove();
	jQs2.remove();
	jQs3.remove();
	jQs4.remove();
	$('#waimai-text1').removeClass('fadeIn animated delay1');
	$('#bajie-dialog').removeClass('fadeIn animated delay2');
	$('#waimai-text2').removeClass('fadeIn animated delay3');
	$('#gaolaozhuang-dialog').removeClass('fadeIn animated delay4');
	$('#p2 .to-go-wrapper-fade').removeClass('fadeIn animated delay7');
}
function p3Animate(){
	$('#p3').append(jQbai1);
	setTimeout(function(){
		jQbai1.hide();
		$('#p3').append(jQbai3);
		setTimeout(function(){
			jQbai3.hide();
			$('#p3').append(jQbai2);
			setTimeout(function(){
				jQbai2.hide();
				$('#p3').append(jQbai4);
			}, 1000);
		}, 3500); //等文字出现完全
	}, 1400);
	$('.t-modi1').addClass('fadeIn animated delay0_1');
	$('.i-girls').addClass('bounceInDown animated0_5 delay1');
	$('#modi-text2').addClass('fadeIn animated delay1_1');
	$('.i-modi0').addClass('flipInY animated delay2');
	$('.i-modi1').addClass('flipInY animated delay2_1');
	$('.i-modi2').addClass('flipInY animated delay3');
	$('.i-modi3').addClass('flipInY animated delay3_1');
	$('#baigujing-dialog').addClass('zoomIn animated delay4');
	$('#p3 .to-go-wrapper-fade').addClass('fadeIn animated delay6_1');
}
function p3RemoveAnimate(){
	jQbai1.remove();
	jQbai2.remove();
	jQbai3.remove();
	jQbai4.remove();
	$('.t-modi1').removeClass('fadeIn animated delay0_1');
	$('.i-girls').removeClass('bounceInDown animated delay1');
	$('#modi-text2').removeClass('fadeIn animated delay1_1');
	$('.i-modi0').removeClass('flipInY animated delay2');
	$('.i-modi1').removeClass('flipInY animated delay2_1');
	$('.i-modi2').removeClass('flipInY animated delay3');
	$('.i-modi3').removeClass('flipInY animated delay3_1');
	$('#baigujing-dialog').removeClass('zoomIn animated delay4');
	$('#p3 .to-go-wrapper-fade').removeClass('fadeIn animated delay6_1');
}

function p4Animate(){
	$('#p4').append(jQnv1);
	setTimeout(function(){
		jQnv1.hide();
		$('#p4').append(jQnv3);
		setTimeout(function(){
			jQnv3.hide();
			$('#p4').append(jQnv2);
			setTimeout(function(){
				jQnv2.hide();
				$('#p4').append(jQnv4);
			}, 800);
		}, 3000); //等文字出现完全
	}, 800);
	$('#pp-text1').addClass('fadeIn animated delay1');
	$('#pp-text2').addClass('fadeIn animated delay2');
	$('#nverguo-dialog').addClass('zoomIn animated0_5 delay2_1');
	$('#pp-text3').addClass('fadeIn animated delay3');
	$('#p4 .to-go-wrapper-fade').addClass('fadeIn animated delay4');
}
function p4RemoveAnimate(){
	jQnv1.remove();
	jQnv2.remove();
	jQnv3.remove();
	jQnv4.remove();

	$('#pp-text1').removeClass('fadeIn animated delay1');
	$('#pp-text2').removeClass('fadeIn animated delay2');
	$('#nverguo-dialog').removeClass('zoomIn animated0_5 delay2_1');
	$('#pp-text3').removeClass('fadeIn animated delay3');
	$('#p4 .to-go-wrapper-fade').removeClass('fadeIn animated delay4');
}

function p5Animate(){
	$('#p5').append(jQps1);
	var t51 = setTimeout(function(){
		jQps1.hide();
		$('#p5').append(jQps3);
		var t52 = setTimeout(function(){
			jQps3.hide();
			$('#p5').append(jQps2);
			var t53 = setTimeout(function(){
				jQps2.hide();	
				$('#p5').append(jQps4);
			}, 660)
		}, 500); //等文字出现完全
	}, 1000);

	$('#mobile-text1').addClass('fadeIn animated');
	// $('.i-at-home').addClass('bounceInLeft animated1 delay0_1');
	// $('.i-on-bus').addClass('bounceInLeft animated1 delay1');
	// $('.i-in-restaurant').addClass('bounceInLeft animated1 delay1_1');
	$('#mobile-text2').addClass('fadeIn animated delay2_1');
	$('#pansidong-dialog').addClass('zoomIn animated delay3');
	$('#p5 .to-go-wrapper-fade').addClass('fadeIn animated delay4');
}
function p5RemoveAnimate(){
	jQps1.remove();
	jQps2.remove();
	jQps3.remove();
	jQps4.remove();
	$('#mobile-text1').removeClass('fadeIn animated');
	// $('.i-at-home').removeClass('bounceInLeft animated1 delay0_1');
	// $('.i-on-bus').removeClass('bounceInLeft animated1 delay1');
	// $('.i-in-restaurant').removeClass('bounceInLeft animated1 delay1_1');
	$('#mobile-text2').removeClass('fadeIn animated delay2_1');
	$('#pansidong-dialog').removeClass('zoomIn animated delay3');
	$('#p5 .to-go-wrapper-fade').removeClass('fadeIn animated delay4');
}

function p6Animate(){
	$('.zhenjing').addClass('zoomIn animated0_5 delay1');		
	$('.i-cover').addClass('fadeOut animated delay2');
	$('.t-zhenjing').addClass('fadeIn animated delay3');
	$('.xitian-dialog').addClass('bounceInRight animated0_5 delay3_1');
	$('.i-btn1').addClass('bounceInLeft animated delay4');
	$('.i-btn2').addClass('bounceInRight animated delay4_1');
}
function p6RemoveAnimate(){
	$('.zhenjing').removeClass('zoomIn animated0_5 delay1');		
	$('.i-cover').removeClass('fadeOut animated delay2');
	$('.t-zhenjing').removeClass('fadeIn animated delay3');
	$('.xitian-dialog').removeClass('bounceInRight animated0_5 delay3_1');
	$('.i-btn1').removeClass('bounceInLeft animated delay4');
	$('.i-btn2').removeClass('bounceInRight animated delay4_1');
}
function goThrough(){
	var current = $('.swiper-slide-active').attr('id');
	// alert(current);
	if(current == 'p0'){	
		if(loading){
			return;
		}else{
			p1Animate();
		}
	}else if(current == 'p1'){	
		// 组织p2	
		p1removeAnimate();
		p2Animate();

	}else if(current == 'p2'){
		// 消除p2动画
		p2RemoveAnimate();
		// 组织p3
		p3Animate();

	}else if(current == 'p3'){
		// 消除p3动画
		p3RemoveAnimate();
		// 组织p4动画
		p4Animate();
	}else if(current == 'p4'){
		// 消除p4动画
		p4RemoveAnimate();
		// 组织p5
		var t5 = setTimeout(p5Animate(), 700);
	}else if(current == 'p5'){
		// 组织p6
		p6Animate();
	}else if(current == 'p6'){
		p1Animate();
		// p1removeAnimate();
		// swiper.slideTo(2, 600, false);
		// return;
	}
	swiper.slideNext();
}

touch.on('.m1', 'swipeup', function(ev){
	goThrough();
});
$('.i-to-go').bind('click', function(){
	goThrough();
})

touch.on('.m1', 'swipedown', function(ev){
	var current = $('.swiper-slide-active').attr('id');
	if(current == 'p2'){
		// 组织p2		
		p1Animate();
		p2RemoveAnimate();
	}else if(current == 'p3'){
		// 组织p2		
		p2Animate();
		p3RemoveAnimate();
	}else if(current == 'p4'){
		// 组织p3
		p3Animate();
		// 取消p5动画
		p4RemoveAnimate();
	}else if(current == 'p5'){
		// 组织p4
		p4Animate();
		p5RemoveAnimate();
	}else if(current == 'p6'){
		// 组织p5
		p5Animate();
		p6RemoveAnimate();
	}


	swiper.slidePrev();

});

