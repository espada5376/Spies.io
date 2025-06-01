
const button = document.querySelector('button')
button.addEventListener('click', (e) => {
    e.preventDefault()
})
const statu = document.querySelector('.status')
function recupere(){
    let nom = document.querySelector('.nom').value.trim();
    let mdp = document.querySelector('.mdp').value.trim();
    let num = document.querySelector('.num').value.trim();
    let prenom = document.querySelector('.prenom').value.trim();
    let email = document.querySelector('.email').value.trim();

    function estEmailValide(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

if(!nom || !mdp || !num || !prenom || !email || num > 8 || nom.length > 20 || prenom.length > 30 || estEmailValide(email) == false){
        console.log("vous avez oublié de remplir un champ")
    }else{
    inscription(nom, mdp, num, prenom, email)}
}

function inscription(nom, mdp, num, prenom, email){
    let noms = JSON.parse(localStorage.getItem('id')) || [];
    let existe = noms.some(p => p.email == email || p.nom == nom)
        if(existe){
            console.log(existe)
            statu.textContent = `nom d'utilisateur ou email déjà occupé`
        }else{
            console.log(existe)
            noms.push({nom, mdp, num, prenom, email})
            statu.textContent = `inscription réussi`
        }            
    localStorage.setItem('id', JSON.stringify(noms))
}

function connectionusers(){
    
    let email = document.querySelector('.email').value;
    let mdp = document.querySelector('.mdp').value;
    let nom = document.querySelector('.nom').value;
    connection(email, mdp, nom)
}

function connection(email, mdp, nom){
let nomsexistant = JSON.parse(localStorage.getItem('id')) || []
    let existe = nomsexistant.some(p => p.email == email && p.nom == nom && p.mdp == mdp)
        if(existe){
            statu.textContent = `connexion réussi`
            console.log(existe)
        }else{
            statu.textContent = `connexion échoué`
            console.log(existe)
        }
}
