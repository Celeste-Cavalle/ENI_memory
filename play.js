window.onload = init;

function init() {

    imagesDsDiv ();

    pickImgTab ();

    for (let index = 0; index < 12; index++) {

    document.getElementById('div'+(index+1)).addEventListener("click", clickCard);
        
}




}

function clickCard (event) {

const  eventCaller= event.target;

console.log("CLICK")

console.log(eventCaller.parentNode)

let flipperLeDauphin = eventCaller.parentNode;

flipperLeDauphin.classList.add('flipped');



}

function imagesDsDiv () {

    //CREATION TABLEAU AVEC LES SOURCES DES IMAGES A ASSIGNER
    let tableImgTemp = [];

    let tableImgDef = [];

    for (let u = 0; u < 10; u++) {
        
        tableImgTemp[u] = "ressources/dinosaures/"+(u+1)+'.jpg' 
        
    }

    for (let j = 0; j < tableImgTemp.length; j++) {
        
        let k = Math.floor(Math.random()*(j+1));

        [tableImgTemp[j], tableImgTemp[k]] = [tableImgTemp[k], tableImgTemp[j]];
        
    }

    for (let t = 0; t < 6; t++) {
        
        tableImgDef[t] = tableImgTemp[t];

        tableImgDef[6+t] = tableImgTemp[t];
        
    }

    for (let j = 0; j < tableImgDef.length; j++) {
        
        let k = Math.floor(Math.random()*(j+1));

        [tableImgDef[j], tableImgDef[k]] = [tableImgDef[k], tableImgDef[j]];
        
    }

    console.log(tableImgDef);

    //CREATION DES DIV POUR ACCUEILLIR MES PHOTOS
    for (let i = 0; i < tableImgDef.length; i++) {
        
        let divParent = document.getElementById("div"+(i+1));

        let imagesFront = document.createElement('img');
        
        imagesFront.setAttribute("src", "ressources/question.svg")
        
        
        
        let imagesBack = document.createElement('img');

        imagesBack.setAttribute("src", tableImgDef[i])

        imagesBack.classList.add('flipped');
        
        divParent.appendChild(imagesBack);

        divParent.appendChild(imagesFront);
    }

}

function pickImgTab (){

    

}