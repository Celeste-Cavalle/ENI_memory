window.onload = init;

function init() {

    imagesDsDiv ();

    pickImgTab ();

    document.getElementById('div1').addEventListener("click", clickCard);




}

function clickCard () {


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
        
        divParent.appendChild(imagesFront);
        
        let imagesBack = document.createElement('img');

        imagesBack.setAttribute("src", tableImgDef[i])
        
        divParent.appendChild(imagesBack);

    }

}

function pickImgTab (){

    

}