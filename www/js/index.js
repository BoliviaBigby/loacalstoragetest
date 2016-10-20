
    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready"); //here is the event listener 
    }
	
	

    // device APIs are available
    // here is the event handler
    function onDeviceReady() {
		alert("hi olivia"); //the event handler reacts to a function
        
	
    
var key1 = "pen";
var value1 = "green";

var key2 = "botttle";
var value2 = "water";
            
var key3 = "bag";
var value3 = "leather";
            
var key4 = "pencil";
var value4 ="lead";
            
var key5 = "phone";
var value5 = "white";

window.localStorage.setItem( key1, value1 );
window.localStorage.setItem( key2, value2 );
window.localStorage.setItem( key3, value3 );
window.localStorage.setItem( key4, value4 );
window.localStorage.setItem( key5, value5 );
    }