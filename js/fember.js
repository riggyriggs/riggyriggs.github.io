
var strangerMsgs = [
	"hello",
	"how are you?",
	"how's your year going so far?",
	"cool, do you like ptv?",
	"RAD! wanna meet up tomorrow in lunch",
	"bye :3",
	
];


function sendmsg()
{
		var msg = $("#msg").val();

	
	var html = $("#chatZone").html();
	$("#chatZone").html(html + "<br>You: " + msg + "</br>");
	
setTimeout(function(){
	html = $("#chatZone").html();
	$("#chatZone").html(html +"<br>Stranger: " + strangerMsgs.shift() +"</br>");
}, 1000);
	

	
}

