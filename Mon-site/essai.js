let table1 = [personne = {nom:"ema" , age:23},{nom: "eze", age: 18},{nom: "ruth", age:19}]

let agehaut = table1.some(p => p.age > 40)
console.log(agehaut)