document.addEventListener("deviceready", function(){
	//alert('hi im ready');
}, false);


function contactSuccess(contacts){
	for(var i=0;i<contacts.length;i++){
		$('#contactDiv').append('<p>' + contacts[i].displayName+ '</p>')
	}
	
}

function contactFail(){
	alert('im dead');
}

function getContacts(){
	var options = new ContactFindOptions();
	options.filter = ""; // return all strings
	options.multiple = true; // return more than one contact
	var fields = ["displayName"];
	navigator.contacts.find(fields, contactSuccess, contactFail, options);
}


$('#contactButton').click(function(){
	getContacts();
});

function cameraWin(picture){
	$('#pictureImg').attr('src', "data:image/jpeg;base64,"+picture);
}


function cameraFail(){
	alert('camera dead');
}

function takePicture(){
	navigator.camera.getPicture(cameraWin, cameraFail, {quality: 50, destinationType: Camera.DestinationType.DATA_URL});
}

$('#pictureButton').click(function(){
	takePicture();
})	

function geoSuccess(position){
	$('#locationDiv').append('lat: ' + position.latitude + 'long: ' + position.longitude));
}
function getLocation(){
	navigator.geolocation.getCurrentPosition(geoSuccess);
}

$('#locationButton').click(function(){
	getLocation();
})