window.onload = init;

function init() {
  // rentre infos user et lance function testPass
  // qd click sur btn validation et valide les infos recues
  document
    .getElementById("btn_validation")
    .addEventListener("click", validation);
}

function samePass() {
  let mdp = document.getElementById("password_field");
  let verfiPassword = document.getElementById("mdpVerif");

  if (mdp != verfiPassword) {
    alert("Les mots de passe ne sont pas les mêmes !");
  }
}

function testPass() {
  let mdp = document.getElementById("password_field").value;
  console.log("valeur motdepasse " + mdp);
  let taille = mdp.length;
  var chiffre = new RegExp("[0-9]", "gi");
  var special = new RegExp("[^a-zA-Z0-9]", "gi");

  if (chiffre.test(mdp) && special.test(mdp) && taille > 6) {
    // TODO affecter le truc visuel qui dit ce qu'est le mdp  fort
  }

  if (chiffre.test(mdp) || (special.test(mdp) && taille > 6)) {
    // TODO affecter le truc visuel qui dit ce qu'est le mdp  moyen
  }
  // TODO affecter le truc visuel qui dit ce qu'est le mdp faible
}

let isFound = false;

function validation(event) {
  event.preventDefault(); //pour eviter que le btn Submit nous embete, ne pas oublier le "event" dans les ()

  //Déclaration des variables et push ds localstorage (mettre .value aps les getEltById car c'est cette valeur la qu'on veut et non toute les valeurs des balises)
  //Le tout sous format JSON
  let userName = document.getElementById("nom").value;
  let adressMail = document.getElementById("email").value;
  let mdp = document.getElementById("password_field").value;

  const profil = {
    nameUser: userName,
    email: adressMail,
    passwordUser: mdp,
    memoryType: "dinosaures",
    memorySize: "little",
  };

  //Verification email pr ne pas avoir de doublon
  
    let keyStart = "utilisateur de ";
    let key = keyStart.concat(adressMail);

    if (!profil) {
      console.log("aucun profil correspondant");
    } else {
      localStorage.setItem(key, JSON.stringify(profil));
    }

    let storedProfil = localStorage.getItem(key);
    
    if (!storedProfil) {
      console.log("profil non trouvé");
    } else {
      let userArray = JSON.parse(storedProfil);

      if (userArray.email == adressMail) {
        isFound = true;
      }

     //  let isFound = userArray.some(profil => profil.email === adressMail);
      // let emailFound = userArray.some(isFound);
      console.log(isFound)
    if (isFound) {
      console.log("adresse mail  déjà utilisé");
    } else {
      console.log("adresse libre");
    }
  }
}
