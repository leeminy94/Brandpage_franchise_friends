//////////////////////////////////////////////////////////////////////////////
/*
웹클리어 자바 스크립트
*/
//////////////////////////////////////////////////////////////////////////////

//All Focus
function allblur() {
	for (i = 0; i < document.links.length; i++) {
	var obj = document.links[i];
	if(obj.addEventListener) obj.addEventListener("focus", oneblur, false);
	else if(obj.attachEvent) obj.attachEvent("onfocus", oneblur);
	}
}
function oneblur(e) {
	var evt = e ? e : window.event;
	if(evt.target) evt.target.blur();
	else if(evt.srcElement) evt.srcElement.blur();
}
//All Focus End

//////////////////////////////////////////////////////////////////////////////

//Menu Open/Close
function clickshow(num){
	menu = document.getElementById("block"+num);
	if( menu != null && typeof menu != "undefined" )
		{
			if (menu.style.display=="block"){
			menu.style.display="none";//Close
		}
	else{
		menu.style.display="block";//Sub Menu Open
		}
	}
}

//Menu Open/Close End
function clickblock(num) {
    try {
        for (i = 1; i <= 100; i++) {
            var menu = eval("cblock" + i + ".style");

            if (num == i) { menu.display = "block"; }
            else { menu.display = "none"; }
        }
    }
    catch (exception) {
    }
}

//////////////////////////////////////////////////////////////////////////////

// PNG Trans Start
function setPng24(obj) {
	obj.width=obj.height=1;
	obj.className=obj.className.replace(/\bpng24\b/i,'');
	obj.style.filter =
	"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src +"',sizingMethod='image');"
	obj.src='';
	return '';
}
// PNG Trans End
