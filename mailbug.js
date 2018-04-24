var script = document.createElement('script'); 
document.head.appendChild(script);    
script.type = 'text/javascript';
script.src = "//ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js";
script.onload = function(){
    $.get( "https://us-central1-kahoneypot.cloudfunctions.net/getIp", function( data ) {
    alert( data );
});
}
