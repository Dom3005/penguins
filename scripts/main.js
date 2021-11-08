
var btnHW = document.getElementById("btnHW");
var taTitle = document.getElementById("inTitle");

taTitle.value = "new title";

btnHW.onclick = function(event){
    document.title = taTitle.value;
}