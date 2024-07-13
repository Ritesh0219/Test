var text = [];
var status1 = "";

document.getElementById('toggleButton').addEventListener('change', function() {
    if (this.checked) {
        status1 = "on";
        $("h2").html("Bluetooth : On");
    } else {
         status1 = "off";
         $("h2").html("Bluetooth : off");
    }
});


function bluetoothconnect()
    { 
       devicestatus = status1;
       var devicename  = text.join(" ");
       if(devicestatus == "off"){
        alert("Turn on bluetooth");
       }
       else{
        alert("Your device is now connecting");
       }      
    }    


$("button").click(bluetoothconnect);