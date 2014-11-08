function $(element){
return element = document.getElementById(element);
}
function $D(){
	var dot = $('etc');
	var d=$('class1content');
	var h=d.offsetHeight;
	var maxh=1000;
	dot.style.display='none';
	function dmove(){
		h+=60; 
		if(h>=maxh){
			d.style.height='1000px';
			clearInterval(iIntervalId);
		}
		else{
			d.style.display='block';
			d.style.height=h +'px';
		}
	}
	iIntervalId=setInterval(dmove,2);
}
function $D2(){
	var dot = $('etc');
	var d=$('class1content');
	var h=d.offsetHeight;
	var maxh=1000;
	dot.style.display='block';
	function dmove(){
		h-=60;
		if(h<=0){
			d.style.display='none';
			clearInterval(iIntervalId);
		}
		else{
			d.style.height=h+'px';
		}
	}
	iIntervalId=setInterval(dmove,2);
}
function $use(){
	var d=$('class1content');
	var sb=$('stateBut');
	if(d.style.display=='none'){
		$D();
		sb.innerHTML='<u><i>Fermer le CV en Page</i></u>';
	}else{
		$D2();
		sb.innerHTML='<u><i>voir CV en page</i></u>';
	}
}