function clock(){
	var d = new Date();
      document.getElementById('time').innerHTML = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
      document.getElementById('date').innerHTML = d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate();
	 setTimeout("clock()",1000);
}