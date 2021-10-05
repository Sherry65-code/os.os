window.addEventListener('load',()=>{
    setInterval(time , 1000);
    setTimeout(enda , 5000);
    document.getElementById('na').innerHTML = "Hi , "+localStorage.getItem('c-username');
});
function enda() {
    document.getElementById('boot').innerHTML = "";
    document.body.style = "background-image: url('images/wal1.jpg');";
    document.getElementById('log').style = "visibility: visible;";
}
var nam = document.getElementById('nam');
nam.addEventListener('keyup' , next , false);

function next(key) {
localStorage.setItem('c-username' , nam.value);
if (key.keyCode == "13")
{
    document.getElementById('log').innerHTML = " ";
    document.getElementById('main').style = "visibility: visible;";
}
}
function wal2() {
    document.body.style = "background-image: url('images/wal2.jpg');";
}
function wal3() {
    document.body.style = "background-image: url('images/wal3.jpg');";
}
function wal4() {
    document.body.style = "background-image: url('images/wal4.jpg');";
}
function time() {
    var time = new Date;
    var am = "am";
    if (time.getMinutes >= 12)
    {
        am = "am";
    }
    else{
        am = "pm";
    }
    var min = time.getMinutes();
    var hour =  time.getHours();
    if (hour > 12)
    {
        hour -= 12;
    }
    else{
        console.log("Time Changed");
    }
    if (min < 10)
    {
        min ="0"+String(min);
    }
    document.getElementById('time').innerHTML = hour+":"+min+" "+am;
}
var menu = document.querySelector('.menu');
menu.addEventListener('dblclick' , ()=>{
    document.getElementById('pop1').style.visibility = "visible";
});
function closemenu() {
    document.getElementById('pop1').style.visibility = "visible";
}
var x = document.getElementById('a');
x.addEventListener('keydown' , cuswal , false);
function cuswal(key) {
    if (key.keyCode == "13"){
    var a = document.getElementById('a').value;
    document.body.style.backgroundImage = "url(a)";
}}