
window.onload=function(){
	//滑动切换相应导航内容
	var nav4 = document.getElementById("nav4");
	var nav4__drop = document.getElementById("nav4__drop-down");
	var nav4__a= nav4.getElementsByTagName("a");
	var nav4__div= nav4__drop.getElementsByTagName("div");
	for(var i= 0; i< 8; i++){
		nav4__a[i].index= i;
		nav4__a[i].onmouseover=function(){
			nav4__drop.style.display="block";
			nav4__div[this.index].className="visible";
		}
		nav4__a[i].onmouseout=function(){
			for(var i=0; i<8; i++){
				nav4__div[i].className="hidden";
			}
			nav4__drop.style.display="none";
		}
		nav4__div[i].onmouseover=function(){
			this.className="visible";
			nav4__drop.style.display="block";
		}
		nav4__div[i].onmouseout=function(){
			this.className="hidden";
			nav4__drop.style.display="none";
		}
		
	}
    
	//轮播图
	var center__img = document.getElementById("center__img");
	var center__imgsw = document.getElementById("center__img-switch");
	var center__imgdiv = center__img.getElementsByTagName("div");
	var center__imginp = center__imgsw.getElementsByTagName("input");
	var center__imga = center__imgsw.getElementsByTagName("a");
	//input绑定切换图片函数
	for(var i=0; i<center__imginp.length; i++){
		center__imginp[i].index=i;
		center__imginp[i].onclick=function(){
			for(var i= 0; i<center__imginp.length; i++){
				center__imgdiv[i].className="hidden";
			}
			center__imgdiv[this.index].className="visible";
		}
	}
	//a链接绑定左右切换图片函数
	     //向左切换
	center__imga[0].onclick=function(){
		for(var i=0; i<center__imginp.length; i++){
	        if(center__imgdiv[i].className=="visible"){
				if(i <= 0){ j=4; }
				else {j=i-1;  }
				(function(i){setTimeout(function(){
					center__imgdiv[i].className="hidden";
				},300)})(i);
					(function(j){setTimeout(function(){
					center__imgdiv[j].className="visible";
					center__imginp[j].checked=true;//显示图片，对应input改变checked属性
				},300)})(j);	
			}
	    }
	}
	//向右切换
	center__imga[1].onclick=function(){
		for(var i=0; i<center__imginp.length; i++){
	        if(center__imgdiv[i].className=="visible"){
				if(i >= 4){ j=0; }
				else {j=i+1;  }
				(function(i){setTimeout(function(){
					center__imgdiv[i].className="hidden";
				},300)})(i);
					(function(j){setTimeout(function(){
					center__imgdiv[j].className="visible";
					center__imginp[j].checked=true; //显示图片，对应input改变checked属性
				},300)})(j);	
			}
	    }
	}
//右侧绝对定位小图标滑动鼠标滑动改变外观
	var fix__nav = document.getElementById("fix__nav");
	var oli = fix__nav.getElementsByTagName("li");
	for (var i=0; i<oli.length; i++){
		oli[i].onmouseover=function(){
			var oimg = this.getElementsByTagName("img");
				oimg[0].className="hidden"
				oimg[1].className="visible"
		}
		oli[i].onmouseout=function(){
			var oimg = this.getElementsByTagName("img");
				oimg[1].className="hidden"
				oimg[0].className="visible"
		}
	}
	var odiv = fix__nav.getElementsByTagName("div")[0];
	odiv.onmouseover=function(){
		var odivimg= this.getElementsByTagName("img");
			odivimg[0].className="hidden";
			odivimg[1].className="visible";
	}
	odiv.onmouseout=function(){
		var odivimg= this.getElementsByTagName("img");
			odivimg[1].className="hidden";
			odivimg[0].className="visible";
	}
//小米闪购倒计时时钟
   var timedCount=function(){
	        var myDate = new Date();
	        var myHours = myDate.getHours();
	        var myMinutes = myDate.getMinutes();
	        var mySeconds = myDate.getSeconds();
			var msc = document.getElementById("msc");
			var box1 = msc.getElementsByTagName("div")[0]; 
			var box2 = msc.getElementsByTagName("div")[2]; 
			var box3 = msc.getElementsByTagName("div")[4]; 
			var j=24;	 //规定开放活动时间节点       
	 if (myHours>=j){
	         box1.innerHTML='00';
	         box2.innerHTML='00';
	         box3.innerHTML='00';
	 }
	 else {
		 if (mySeconds<=0){
			 box3.innerHTML='00';
			 if(myMinutes<=0){
				 box2.innerHTML='00';
				 if (j-myHours<10){
					 box1.innerHTML='0'+(j-myHours);
				 }
				 else{box1.innerHTML=j-myHours;}
			 }
			 else{
				 if(60-myMinutes<10){
					 box2.innerHTML='0'+(60-myMinutes);
				 }
				 else{
					 box2.innerHTML=60-myMinutes; 
				 }
				 if (j-1-myHours<10){
					 box1.innerHTML='0'+(j-1-myHours);
				 }
				 else {
					 box1.innerHTML=j-1-myHours;
				 }
			 }
		 }
		 else{
			 if(60-mySeconds<10){
				 box3.innerHTML='0'+(60-mySeconds);
			 }
			 else {
				 box3.innerHTML=60-mySeconds; 
			 }
			 if(myMinutes<=0){
				box2.innerHTML=59;
				if(j-1-myHours<10){
					box1.innerHTML='0'+(j-1-myHours);
				}
				else {
					box1.innerHTML=j-1-myHours;
				}
			 }
			 else{
				 if(59-myMinutes<10){
					 box2.innerHTML='0'+(59-myMinutes);
				 }
				 else {
					 box2.innerHTML=59-myMinutes;
				 }
				if(j-1-myHours<10){
					box1.innerHTML='0'+(j-1-myHours);
				}
				else {
					box1.innerHTML=j-1-myHours;
				}
			 }
		 }
	 }setTimeout(timedCount,1000);
	}
    setTimeout(timedCount,1000);
}
//创建获取焦点显示更多信息框函数
// function chanvi(){
// 	var d= document.getElementById("header2__right-bottom");
// 	d.style.display="block";
// }
// function chanhi(){
// 	var d= document.getElementById("header2__right-bottom");
// 	d.style.display="none";
// };
//创建获取焦点显示更多信息框函数
$(document).ready(function(){
	var headbot = $("#header2__right-bottom");
	$("#input1").focus(function(){
		headbot.addClass("visible");
		headbot.removeClass("hidden");
	})
		$("#input1").blur(function(){
		headbot.removeClass("visible");
		headbot.addClass("hidden");
	})
})








