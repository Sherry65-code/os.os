function officeI() {
    document.getElementById('offbut').innerHTML = "Downloading...";
    setTimeout(officeII , 5000);
}
function officeII() {
    document.getElementById('offbut').innerHTML = "Installing...";
    setTimeout(officeIII , 2000);
}
function officeIII() {
    document.getElementById('offbut').innerHTML = "Open";
    document.getElementById('offbut').id = "officeI";
    document.querySelector('.taskbar').innerHTML += `<img src="images/ofc3.png" width="50" alt="" class="app" onclick="offopen()">`;
}
var officeIIII = document.getElementById('officeI');
officeIIII.addEventListener('click', ()=>{
    officeOpen();
});