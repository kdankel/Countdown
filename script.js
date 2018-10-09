
var stor = [25,50,75,100];
var liten = [1,2,3,4,5,6,7,8,9,10];

/*KODE FOR STORE TALL*/
var randomStor = stor[Math.floor(Math.random()*stor.length)];
var index = stor.indexOf(randomStor);
if (index > -1) {
  stor.splice(index, 1);
  stor = stor;
}

var randomStor1 = stor[Math.floor(Math.random()*stor.length)];
var index = stor.indexOf(randomStor1);
if (index > -1) {
  stor.splice(index, 1);
  stor = stor;
}

var randomStor2 = stor[Math.floor(Math.random()*stor.length)];
var index = stor.indexOf(randomStor2);
if (index > -1) {
  stor.splice(index, 1);
  stor = stor;
}

var randomStor3 = stor[Math.floor(Math.random()*stor.length)];
var index = stor.indexOf(randomStor3);
if (index > -1) {
  stor.splice(index, 1);
  stor = stor;
}
/****END*** KODE FOR STORE TALL */
/************************************/
/*KODE FOR SMÅ TALL*/
var randomLiten = liten[Math.floor(Math.random()*liten.length)];
var index = liten.indexOf(randomLiten);
if (index > -1) {
  liten.splice(index, 1);
  liten = liten;
}

var randomLiten1 = liten[Math.floor(Math.random()*liten.length)];
var index = liten.indexOf(randomLiten1);
if (index > -1) {
  liten.splice(index, 1);
  liten = liten;
}

var randomLiten2 = liten[Math.floor(Math.random()*liten.length)];
var index = liten.indexOf(randomLiten2);
if (index > -1) {
  liten.splice(index, 1);
  liten = liten;
}

var randomLiten3 = liten[Math.floor(Math.random()*liten.length)];
var index = liten.indexOf(randomLiten3);
if (index > -1) {
  liten.splice(index, 1);
  liten = liten;
}

var randomLiten4 = liten[Math.floor(Math.random()*liten.length)];
var index = liten.indexOf(randomLiten4);
if (index > -1) {
  liten.splice(index, 1);
  liten = liten;
}

var randomLiten5 = liten[Math.floor(Math.random()*liten.length)];
var index = liten.indexOf(randomLiten5);
if (index > -1) {
  liten.splice(index, 1);
  liten = liten;
}



function small() {

  document.getElementById("mal").innerHTML=
  "Target: " + Math.floor(Math.random()*900+99);

  document.getElementById("t2").innerHTML = randomLiten;
  document.getElementById("t3").innerHTML = randomLiten1;
  document.getElementById("t1").innerHTML = randomLiten2;
  document.getElementById("t4").innerHTML = randomLiten3;
  document.getElementById("t5").innerHTML = randomLiten4;
  document.getElementById("t6").innerHTML = randomLiten5;
  timer();
}

function cd1() {

  document.getElementById("mal").innerHTML=
  "Target: " + Math.floor(Math.random()*900+99);

  document.getElementById("t1").innerHTML = randomStor;

  document.getElementById("t2").innerHTML = randomLiten;
  document.getElementById("t3").innerHTML = randomLiten1;
  document.getElementById("t4").innerHTML = randomLiten2;
  document.getElementById("t5").innerHTML = randomLiten3;
  document.getElementById("t6").innerHTML = randomLiten4;
  timer();
}

function cd2() {

  document.getElementById("mal").innerHTML=
  "Target: " +  Math.floor(Math.random()*900+99);

  document.getElementById("t1").innerHTML = randomStor;
  document.getElementById("t2").innerHTML = randomStor1;

  document.getElementById("t3").innerHTML = randomLiten;
  document.getElementById("t4").innerHTML = randomLiten1;
  document.getElementById("t5").innerHTML = randomLiten2;
  document.getElementById("t6").innerHTML = randomLiten3;
  timer();
}

function cd3() {

  document.getElementById("mal").innerHTML=
  "Target: " +   Math.floor(Math.random()*900+99);

  document.getElementById("t1").innerHTML = randomStor;
  document.getElementById("t2").innerHTML = randomStor1;
  document.getElementById("t3").innerHTML = randomStor2;

  document.getElementById("t4").innerHTML = randomLiten;
  document.getElementById("t5").innerHTML = randomLiten1;
  document.getElementById("t6").innerHTML = randomLiten2;

  timer();
}
function cd4() {

  document.getElementById("mal").innerHTML=
  "Target: " +  Math.floor(Math.random()*900+99);

  document.getElementById("t1").innerHTML = randomStor;
  document.getElementById("t2").innerHTML = randomStor1;
  document.getElementById("t3").innerHTML = randomStor2;
  document.getElementById("t4").innerHTML = randomStor3;

  document.getElementById("t5").innerHTML = randomLiten;
  document.getElementById("t6").innerHTML = randomLiten1;
  timer();
}


function timer(){
  var timeleft = 30;
  var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    if(timeleft <= 0)
    clearInterval(downloadTimer);
  },1000);

}

function dropMenuValg() {
  var q = document.getElementById("sel").value;
  if(q == "null"){
    small();
  } if (q == "en"){
    cd1();
  } if (q == "to"){
     cd2();
  } if (q == "tre"){
     cd3();
  }if (q == "fire"){
     cd4();
  }
  console.log(q);

}
