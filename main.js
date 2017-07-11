window.onload=function(){
	var oNav=document.getElementById('header-tabs').getElementsByTagName('ul')[0];
	var tags=oNav.getElementsByTagName('li');
	var aMenu=document.getElementById('left-menu').getElementsByTagName('li');
	
	var oWelcome=document.getElementById('right-welcome')
	function $(id){return document.getElementById(id)};
	var j;

	for (var i = 0;i<aMenu.length;i++){
		aMenu[i].onclick=function(){
			
			oWelcome.style.display='none';
			clearMenu();
			this.style.backgroundColor='#ffdda5';
			for (j = 0; j< 7; j++) {
				if (this==aMenu[j]) {
					
					if ($('p'+j)==null) {
						openNew(j,this.innerHTML)
					}
					clearContent();
					$('item'+j).style.display='block';
				}
				
			}
			return false;
			
				
			
		}
	};
function openNew(index,name){
	var tagMenu=document.createElement("li");
		tagMenu.id="p"+index;
		tagMenu.innerHTML=name+""+"<img src='image/off.gif' style='padding-left:15px'/>";
		//标签点击事件
		tagMenu.onclick=function(){
			clearMenu();
			aMenu[index].style.backgroundColor='#ffdda5';
			clearStyle();
			tagMenu.style.background='url(image/tabbg1.gif)';
			tagMenu.style.color ='#000';
			clearContent();
			$("item"+index).style.display="block";
		}
		oNav.appendChild(tagMenu);
//标签内关闭图片点击事件
		tagMenu.getElementsByTagName("img")[0].onclick=function(evt){
			//取消opera和Safari冒泡行为;
			this.parentNode.parentNode.removeChild(tagMenu);//删除当前标签
			
			//设置如果关闭一个标签时，让最后一个标签得到焦点
			
				if(tags.length-1>=0){
					clearStyle();
					tags[tags.length-1].style.background='url(image/tabbg1.gif)';
					clearContent();
					var cc=tags[tags.length-1].id.split("p");
					$("item"+cc[0]).style.display="block";
					clearMenu();
					aMenu[cc[1]].style.backgroundColor='#ffdda5';
				}
				else{
					clearContent();
					clearMenu();
					oWelcome.style.display="block"
				}
			
		}	
		
}


	function clearMenu(){
		for (var i = 0; i < aMenu.length; i++) {
			aMenu[i].style.backgroundColor='#fff';
		}
	}

	function clearStyle(){
		for (var i = 0; i < tags.length; i++) {
			tags[i].style.background='url(image/tabbg2.gif)';
			tags[i].style.color="#59814c";
		}
	}

	function clearContent(){
		for (var i = 0; i < 7; i++) {
			$('item'+i).style.display='none';
		}
	}
	
};