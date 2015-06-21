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
var audio0 = document.getElementById("audio1");
audio0.play();
$("#audio_pan").click(function() {
    audio1 = document.getElementById("audio1");
    stats = audio1.paused;

  if (stats == true) {
        audio1.play();
        $("#audio_pan").removeClass("m_off");
        $("#audio_pan").addClass("music-status-on"); 
      
    }
    if (stats == false) {
        
        audio1.pause();
        $("#audio_pan").addClass("m_off"); 
        $("#audio_pan").removeClass("music-status-on"); 
    }
});
var p1complete = false, p2complete = false, p3complete = false, 
	p4complete = false, p5complete = false, p6complete = false;
var t1 = document.querySelector('#to-go-wrapper'); 
t1.addEventListener("webkitAnimationEnd", function(){ //动画结束时事件 
	p1complete=true;
}, false);  

var t2 = document.querySelector('#p2 .to-go-wrapper-fade'); 
t2.addEventListener("webkitAnimationEnd", function(){ //动画结束时事件 
	p2complete=true;
}, false);  

var t3 = document.querySelector('#p3 .to-go-wrapper-fade'); 
t3.addEventListener("webkitAnimationEnd", function(){ //动画结束时事件 
	p3complete=true;
}, false);  
var t4 = document.querySelector('#p4 .to-go-wrapper-fade'); 
t4.addEventListener("webkitAnimationEnd", function(){ //动画结束时事件 
	p4complete=true;
}, false);  
var t5 = document.querySelector('#p5 .to-go-wrapper-fade'); 
t5.addEventListener("webkitAnimationEnd", function(){ //动画结束时事件 
	p5complete=true;
}, false);  
var t6 = document.querySelector('.i-btn2'); 
t6.addEventListener("webkitAnimationEnd", function(){ //动画结束时事件 
	p6complete=true;
}, false);  


function keyframeAnimation(selector, height, keyNum, duration, delay){
	var animation = setTimeout(function(){
		var jQdom = $(selector);
		var times = 1;
		jQdom.show();
		var timer = setInterval(function(){
			if(times>(keyNum-1)){
				clearInterval(timer);
				times = 1;
				jQdom.css({'background-position': '0px '+p});
				return;
			}
			var p = (-1) * height * times + 'px';
			jQdom.css({'background-position': '0px '+p});
			times++;
		}, duration);
		clearTimeout(animation);
	}, delay);
}
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
	p1complete = false;
}


function p2Animate(){
	keyframeAnimation('#gaolaozhuang', 300, 16, 45, 1100);
	keyframeAnimation('#bajie', 300, 32, 45, 500);
	keyframeAnimation('#gaobing', 250, 48, 42, 4500);
	// keyframeAnimation('#pie-chart', 250, 12, 50, 5000);
	$('.i-gaolaozhuang-tag').addClass('bounceIn animated delay1');
	$('.i-gaolaozhuang').addClass('bounceInUp animated delay0_1');
	$('#waimai-text1').addClass('fadeIn animated delay1');
	$('#bajie-dialog').addClass('fadeIn animated delay2');
	$('#waimai-text2').addClass('fadeIn animated delay3');
	$('#gaolaozhuang-dialog').addClass('zoomIn animated delay4');
	$('#zhongkouwei').addClass('bounceInRight animated delay7');
	$('#p2 .to-go-wrapper-fade').addClass('fadeIn animated delay7_1');
}
function p2RemoveAnimate(){	
	$('#gaolaozhuang').hide().css({'background-position': '0 0'});
	$('#bajie').hide().css({'background-position': '0 0'});
	$('#gaobing').hide().css({'background-position': '0 0'});

	$('.i-gaolaozhuang-tag').removeClass('bounceIn animated delay1');
	$('.i-gaolaozhuang').removeClass('bounceInUp animated delay0_1');
	$('#waimai-text1').removeClass('fadeIn animated delay1');
	$('#bajie-dialog').removeClass('fadeIn animated delay2');
	$('#waimai-text2').removeClass('fadeIn animated delay3');
	$('#gaolaozhuang-dialog').removeClass('zoomIn animated delay4');
	$('#zhongkouwei').removeClass('bounceInRight animated delay7');
	$('#p2 .to-go-wrapper-fade').removeClass('fadeIn animated delay7_1');
	p2complete = false;

}
function p3Animate(){
	keyframeAnimation('#baigudong', 400, 16, 45, 300);
	keyframeAnimation('#baigujing', 350, 24, 45, 1100);
	keyframeAnimation('#baishuju', 400, 24, 45, 4500);

	$('.t-modi1').addClass('fadeIn animated delay1');
	$('.i-girls').addClass('bounceInDown animated0_5 delay1_1');
	$('#modi-text2').addClass('fadeIn animated delay2');
	$('.i-modi0').addClass('flipInY animated delay2_1');
	$('.i-modi1').addClass('flipInY animated delay3');
	$('.i-modi2').addClass('flipInY animated delay3_1');
	$('.i-modi3').addClass('flipInY animated delay4');
	$('#baigujing-dialog').addClass('zoomIn animated0_5 delay4_1');
	$('#p3 .to-go-wrapper-fade').addClass('fadeIn animated delay6_1');

}
function p3RemoveAnimate(){
	$('#baigudong').hide().css({'background-position': '0 0'});
	$('#baigujing').hide().css({'background-position': '0 0'});
	$('#baishuju').hide().css({'background-position': '0 0'});

	$('.t-modi1').removeClass('fadeIn animated delay1');
	$('.i-girls').removeClass('bounceInDown animated0_5 delay1_1');
	$('#modi-text2').removeClass('fadeIn animated delay2');
	$('.i-modi0').removeClass('flipInY animated delay2_1');
	$('.i-modi1').removeClass('flipInY animated delay3');
	$('.i-modi2').removeClass('flipInY animated delay3_1');
	$('.i-modi3').removeClass('flipInY animated delay4');
	$('#baigujing-dialog').removeClass('zoomIn animated0_5 delay4_1');
	$('#p3 .to-go-wrapper-fade').removeClass('fadeIn animated delay6_1');
	p3complete = false;

}

function p4Animate(){
	keyframeAnimation('#nvguowang', 300, 8, 45, 600);
	keyframeAnimation('#nverguo', 450, 12, 45, 1100);
	keyframeAnimation('#nvshuju', 200, 21, 45, 4500);
	$('#pp-text1').addClass('fadeIn animated delay1_1');
	$('#pp-text2').addClass('fadeIn animated delay2_1');
	$('#nverguo-dialog').addClass('zoomIn animated0_5 delay3_1');
	$('#pp-text3').addClass('fadeIn animated delay4_1');
	$('#p4 .to-go-wrapper-fade').addClass('fadeIn animated delay5');
}
function p4RemoveAnimate(){
	$('#nvguowang').hide().css({'background-position': '0 0'});
	$('#nverguo').hide().css({'background-position': '0 0'});
	$('#nvshuju').hide().css({'background-position': '0 0'});

	$('#pp-text1').removeClass('fadeIn animated delay1');
	$('#pp-text2').removeClass('fadeIn animated delay2_1');
	$('#nverguo-dialog').removeClass('zoomIn animated0_5 delay_31');
	$('#pp-text3').removeClass('fadeIn animated delay4_1');
	$('#p4 .to-go-wrapper-fade').removeClass('fadeIn animated delay5');
	p4complete = false;

}

function p5Animate(){
	keyframeAnimation('#zhizhujing', 400, 23, 45, 600);
	keyframeAnimation('#pansidong', 400, 12, 45, 1300);

	$('#mobile-text1').addClass('fadeIn animated delay2');
	$('.i-at-home').addClass('bounceInLeft animated1 delay2_1');
	$('.i-on-bus').addClass('bounceInRight animated1 delay3');
	$('.i-in-restaurant').addClass('bounceInLeft animated1 delay3_1');
	$('#mobile-text2').addClass('fadeIn animated delay4_1');
	$('#pansidong-dialog').addClass('zoomIn animated delay5_1');
	$('#p5 .to-go-wrapper-fade').addClass('fadeIn animated delay6_1');
}
function p5RemoveAnimate(){
	$('#zhizhujing').hide().css({'background-position': '0 0'});
	$('#pansidong').hide().css({'background-position': '0 0'});

	$('#mobile-text1').removeClass('fadeIn animated delay2');
	$('.i-at-home').removeClass('bounceInLeft animated1 delay2_1');
	$('.i-on-bus').removeClass('bounceInRight animated1 delay3');
	$('.i-in-restaurant').removeClass('bounceInLeft animated1 delay3_1');
	$('#mobile-text2').removeClass('fadeIn animated delay4_1');
	$('#pansidong-dialog').removeClass('zoomIn animated delay5_1');
	$('#p5 .to-go-wrapper-fade').removeClass('fadeIn animated delay6_1');
	p5complete = false;

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
	p6complete = false;

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
		if(!p1complete)	{
			return;
		}else{
			p1removeAnimate();
			p2Animate();
		}

	}else if(current == 'p2'){
		if(!p2complete)	{
			return;
		}else{
			// 消除p2动画
			p2RemoveAnimate();
			// 组织p3
			p3Animate();
		}

	}else if(current == 'p3'){
		if(!p3complete)	{
			return;
		}else{
			// 消除p3动画
			p3RemoveAnimate();
			// 组织p4动画
			p4Animate();
		}
	}else if(current == 'p4'){
		if(!p4complete)	{
			return;
		}else{
			// 消除p4动画
			p4RemoveAnimate();
			// 组织p5
			var t5 = setTimeout(p5Animate(), 700);
		}
	}else if(current == 'p5'){
		if(!p5complete)	{
			return;
		}else{
			// 组织p6
			p5RemoveAnimate();
			p6Animate();
		}
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
	if(current == 'p1'){
		return;
	}else if(current == 'p2'){
		if(!p2complete){
			return;
		}
		// 组织p2		
		p1Animate();
		p2RemoveAnimate();
	}else if(current == 'p3'){
		// 组织p2
		if(!p3complete){
			return;
		}		
		p2Animate();
		p3RemoveAnimate();
	}else if(current == 'p4'){
		if(!p4complete){
			return;
		}
		// 组织p3
		p3Animate();
		// 取消p5动画
		p4RemoveAnimate();
	}else if(current == 'p5'){
		if(!p5complete){
			return;
		}
		// 组织p4
		p4Animate();
		p5RemoveAnimate();
	}else if(current == 'p6'){
		if(!p6complete){
			return;
		}
		// 组织p5
		p5Animate();
		p6RemoveAnimate();
	}


	swiper.slidePrev();

});

