window.onload = init;

// let password = document.getElementById("mdp").value;


function init() {
localStorage.setItem("mdp", "azer");
let mdp =localStorage.getItem("mdp")
console.log(password);
    // let taille =password.length;
        
    function testPass() {
            let taille =password.length;
            var chiffre = new RegExp("[0-9]","gi");
            var special = new RegExp("[^a-zA-Z0-9]","gi");
            
            if (taille<6) {
                return "Faible";
            }

            if (chiffre.test(password) || special.test(password) && taille >6) {
                    return "Moyen";
            }

            if (chiffre.test(password) && special.test(password) && taille>6) {
                    return "Fort";
            }
            
    
}
}