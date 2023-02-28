
var eredmeny = document.getElementById("eredmeny");
var tabla = document.createElement("div");
var leftside = document.createElement("div");
var kartyabox = document.createElement("div");
var pontbox = document.createElement("div");
var korokbox = document.createElement("div");

var kartyaadatok = [
    {id:1,value:3,sign:''},
    {id:2,value:4,sign:''},
    {id:3,value:5,sign:''},
    {id:4,value:2,sign:''},
    {id:5,value:-3,sign:''},
    {id:6,value:2,sign:''},
    {id:7,value:0,sign:'taliga'},
    {id:8,value:6,sign:''},
    {id:9,value:-6,sign:''},    
    {id:10,value:0,sign:'pap'},
    {id:11,value:5,sign:''},
    {id:12,value:0,sign:'sarkany'},
    {id:13,value:4,sign:''},
    {id:14,value:-5,sign:''},
    {id:15,value:0,sign:'hegy'},
    {id:16,value:-2,sign:''},
    {id:17,value:-1,sign:''},
    {id:18,value:1,sign:''},
    {id:19,value:-4,sign:''},   
    {id:20,value:6,sign:''},
    {id:21,value:0,sign:'hegy'},
    {id:22,value:3,sign:''},
    {id:23,value:1,sign:''},

]

var varadatok = [
    {id:1, color: 1, value: 1},
    {id:2, color: 1, value: 2},
    {id:3, color: 1, value: 3},
    {id:4, color: 1, value: 4},
    {id:5, color: 2, value: 1},
    {id:6, color: 2, value: 2},
    {id:7, color: 2, value: 3},
    {id:8, color: 2, value: 4},  
    {id:9, color: 3, value: 1},
    {id:10, color: 3, value: 2},
    {id:11, color: 3, value: 3},
    {id:12, color: 3, value: 4},
    {id:13, color: 4, value: 1},
    {id:14, color: 4, value: 2},
    {id:15, color: 4, value: 3},
    {id:16, color: 4, value: 4},
    
]


var cellak=[

]
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


function Cellakfeltoltese()
{
    for (let i = 0; i < 23; i++) {
        cellak[i] = {};
        cellak[i].type = "kártya"
        cellak[i].info = kartyaadatok[i];
        
    }
    for (let i = 23; i < 30; i++) {
        cellak[i] = {};
        cellak[i].type = "vár";
        cellak[i].info = varadatok[i-23];        
    }

    console.log(cellak);
}

function Cellakmegjelenítése(){
    
    for (let i = 0; i < cellak.length; i++) {
        var index = cellak[i].info.id;
        var kep = document.createElement("img");
        if(cellak[i].type == "kártya")
            kep.src = "img/kartyak/" +index+".png";
        else
            kep.src = "img/tornyok/" +index+".png";
        var div = document.getElementById(i);
        div.appendChild(kep);
        
    }



}


function main() 
{
    tablageneralas();
    jatekterelrendezése();
    jatekterbetoltese();
    Cellakfeltoltese();
    Cellakmegjelenítése();
}
main();

/*cellak[i] -> cella
cella = {
    type: "vár/"kártya",
    info: {id:1, color: 1, value: 1}
}*/