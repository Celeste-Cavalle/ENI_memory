window.onload = init;

function init() {
  // rentre infos user et lance function testPass
  // qd click sur btn validation et valide les infos recues
  document
    .getElementById("btn_validation")
    .addEventListener("click", validation);
  //TEST
  let test = {
    name: "Molecule Man",
    age: 29,
    secretIdentity: "Dan Jukes",
    powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
  };
  console.log(test["age"]);
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

function validation(event) {
  /*samePass() 
    testPass(); */
  event.preventDefault(); //pour eviter que le btn Submit nous embete, ne pas oublier le "event" dans les ()
  console.log("init");

  //Déclaration des variables et push ds localstorage
  let userName = document.getElementById("nom").value;
  console.log(userName);
  let adressMail = document.getElementById("email").value;
  let mdp = document.getElementById("password_field").value;
  let verfiPassword = document.getElementById("mdpVerif").value;

  localStorage.setItem("name", userName);
  localStorage.setItem("mail", adressMail);
  localStorage.setItem("password", mdp);
  localStorage.setItem("secondPassword", verfiPassword);
}
