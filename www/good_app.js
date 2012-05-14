document.addEventListener("deviceready", function(){

}, false);

function contactSuccess(contacts){
	var contactDiv = $('#contactDiv');
	var contactHTML = '';
	for(var i=0;i<contacts.length;i++){
		contactDiv.append('<p>' + contacts[i].displayName + '</p>');
	}

}

function contactFail(){
	alert("getting contacts failed");
}

function getContacts(){
	var options = new ContactFindOptions();
	options.filter = ""; //return all strings
	options.multiple = true; // return more than one
	var fields = ['displayName'];
	navigator.contacts.find(fields, contactSuccess, contactFail, options);
}

$('#contactButton').click(function(){
	getContacts();
});

function cameraSuccess(imageData){
	$('#pictureImg').attr('src','data:image/jpeg;base64,'+imageData);
}

function cameraFail(){
	alert("camera faied");
}

function takePicture(){
	navigator.camera.getPicture(cameraSuccess, cameraFail, {quality: 50, destinationType: Camera.DestinationType.DATA_URL});
}

$('#pictureButton').click(function(){
	takePicture();
});

function geoSuccess(position){
	$('#locationDiv').html('<p>Lat: ' + position.coords.latitude + ' Long: ' + position.coords.longitude + '</p>');
}

$('#locationButton').click(function(){
	navigator.geolocation.getCurrentPosition(geoSuccess);
});