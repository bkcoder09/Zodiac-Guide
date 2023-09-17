var picture = "";
var mainone = "";
var one = "";
var maintwo = "";
var twoo = "";
var mainthree = "";
var three = "";
var mainfour = "";
var four = "";
var bgc = "";
var code = "";

function load(){
    picture = localStorage.getItem("picture");
    mainone = localStorage.getItem("mainone");
    one = localStorage.getItem("one");
    maintwo = localStorage.getItem("maintwo");
    twoo = localStorage.getItem("two");
    mainthree = localStorage.getItem("mainthree");
    three = localStorage.getItem("three");
    mainfour = localStorage.getItem("mainfour");
    four = localStorage.getItem("four");
    bgc = localStorage.getItem("bgc")

    document.getElementById("picture").src = picture;
    document.getElementById("mainone").innerHTML = mainone;
    document.getElementById("one").innerHTML = one;
    document.getElementById("maintwo").innerHTML = maintwo;
    document.getElementById("two").innerHTML = twoo;
    document.getElementById("mainthree").innerHTML = mainthree;
    document.getElementById("three").innerHTML = three;
    document.getElementById("mainfour").innerHTML = mainfour;
    document.getElementById("four").innerHTML = four;
    document.body.style.backgroundColor = bgc;
}

function back(){
    code = localStorage.getItem("code");
    if(code == "water"){
        window.location="water.html";
    }
    if(code == "fire"){
        window.location="fire.html";
    }
    if(code == "earth"){
        window.location="earth.html";
    }
    if(code == "air"){
        window.location="air.html";
    }
}