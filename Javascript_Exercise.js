//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let exercise1 = "exercise1"
console.log(exercise1.toLocaleUpperCase())



let numb1 = 20
let numb2 = 90

if(numb1 > numb2){
  console.log(numb1+ "non è maggiore di " +numb2)
}else{
  console.log(numb2+ " è maggiore di " +numb1+ " (in numero più grande è) = " +numb2)
}





let space = null
console.log(space)

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

let exercise2 = "exercise2"
console.log(exercise2.toUpperCase())


let num = 3

if(num < 5){
  console.log("Tiny")
  if(num < 10){
    console.log("Small")
    if(num < 15){
      console.log("Medium")
      if(num < 20){
        console.log("Large")
        if(num <= 20){
          console.log("Huge")
        }
      }
    }
  }
}


let space2 = null
console.log(space2)



//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/


let exercise3 = "exercise3"
console.log(exercise3.toUpperCase())


for(i=0; i<11; i++)
  console.log(i)

let string = "evito i numeri da 3 ed 8"
console.log(string)

for(i=0; i<11; i++){
    if(i===3)
      continue;
    if(i===8)
      continue;
    console.log(i)
}
 

let space3 = null
console.log(space3)




/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

let exercise4 = "exercise4"
console.log(exercise4.toUpperCase())


for(k=0; k<=15; k++){
    if(k%2 === 0){
      console.log(k + " il numero è pari ")
    }else
      console.log(k + " il numero è dispari ")    
}

let space4 =null
console.log(space4)

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let exercise1Extra = "extra1"
console.log(exercise1Extra.toUpperCase())

let n1 = 18
let n2 = 8

if(n1 === 8 || n2 === 8 ){
  console.log("il valore di " +n2+ " è uguale a 8")
}


let space5 = null
console.log(space5)

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let exercise2Extra = "extra2"
console.log(exercise2Extra.toUpperCase())


let totalShoppingCart = 50

if(totalShoppingCart>50 || totalShoppingCart<50){
  console.log("la spedizione è gratuita")
}else{
  console.log("costo spedizione 10 euro ", "TOTALE ", totalShoppingCart+10)
} 

let space6 = null
console.log(space6)



/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

let exercise3Extra = "extra3"
console.log(exercise3Extra.toUpperCase())

let sale = 20
let totalShoppingCartBF = 52

if(totalShoppingCartBF>50 || totalShoppingCartBF<50){
  console.log("la spedizione è gratuita", (totalShoppingCartBF)-(totalShoppingCartBF*sale/100))
}else{
  console.log("costo spedizione 10 euro ", "TOTALE ", (totalShoppingCartBF+10)-(totalShoppingCartBF*sale/100))
} 


let space7 = null
console.log(space7)



/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

let exercise4Extra = "extra4"
console.log(exercise4Extra.toUpperCase())


let gender = "male"

let sex = (gender === "male") ? "isMale" : "isFamale";

console.log(sex) 


let space8 = null
console.log(space8)


/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/