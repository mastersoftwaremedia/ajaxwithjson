var xhr=new XMLHttpRequest();
xhr.onload=function(){
	if(xhr.status===200){
		var responseObject=JSON.parse(xhr.responseText);
		
		//Build new content using DOM manipulation
		var newContent=''; 
		//loop through object
		for(var i=0;i<responseObject.schedules.length;i++){
		//no need to cache dom queries
			newContent+='<div class="destination">';
			newContent+='<img src="'+responseObject.schedules[i].img+'"';
			newContent+='alt="'+responseObject.schedules[i].destination+'"/>';
			newContent+='<p><b>'+responseObject.schedules[i].destination+'</b><br/>';
			newContent+=responseObject.schedules[i].date+'<br/>';
			newContent+=responseObject.schedules[i].price+'</p></div>';
		}
		//update the page with the new content
		document.getElementById('content').innerHTML=newContent;
	}
};
xhr.open('GET','BusJsonData.json',true);
xhr.send(null);