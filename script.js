/*
var objektum = {
    szam1: 34,
    szam2: 23, 
    id: 0,
    ertek: "Zöldvár",
    Torol: Torol()

}

function Torol()
{
    console.log("töröl")
}

console.log(objektum.szam1)
objektum.Torol

*/

var eredmeny = document.getElementById("eredmeny");
var tabla = document.createElement("div");
var leftside = document.createElement("div");
var kartyabox = document.createElement("div");
var pontbox = document.createElement("div");
var korokbox = document.createElement("div");
function jatekterbetoltese()
{
    

    leftside.appendChild(kartyabox);
    leftside.appendChild(pontbox);
    eredmeny.appendChild(leftside);
    eredmeny.appendChild(tabla);
    eredmeny.appendChild(korokbox);
    /*
    kartyabox.innerHTML =  "kartyabox";
    pontbox.innerHTML =  "pontbox";
    korokbox.innerHTML =  "korokbox";
    */
}


function jatekterelrendezése()
{
    kartyabox.id = "kartyabox";
    pontbox.id = "pontbox";
    tabla.id = "tabla";
    korokbox.id = "korokbox";
    leftside.id = "leftside";
    
}
function tablageneralas() {
    var k = 0;
    for (let i = 0; i < 5; i++) {
        var sordiv = document.createElement("div");
        sordiv.classList += "sordiv";

        for (let j = 0; j < 6; j++) {
            var oszlopdiv =document.createElement("div");
            oszlopdiv.classList += "oszlopdiv";
            oszlopdiv.id=k;
            k++;
            sordiv.appendChild(oszlopdiv);
        }
        tabla.appendChild(sordiv);
        
    }
}

function kartyakatTablabaGeneral(db)
{
    //Egy kartya kiválasztása & elhelyez az első mezőben
    for (let index = 0; index < db; index++) {
        var velkartyaszam= Math.floor(Math.random()*23+1);
        var kep1 = document.createElement("img");
        kep1.src ="img/kartyak/"+velkartyaszam +".png";
        var velkartyahely= Math.floor(Math.random()*29+1);
        var hely = document.getElementById(velkartyahely);
        hely.appendChild(kep1);
        
    }
}

function main() {
    jatekterelrendezése();
    jatekterbetoltese();
    tablageneralas();
    kartyakatTablabaGeneral(30);
}


main();
