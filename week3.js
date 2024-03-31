/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum(num1,num2) {
    if (num1 === num2) {
    return (num1 + num2) * 3
} else { 
    return num1 + num2
} 
}
console.log(crazySum(3,3))


/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary (num) {
    if(20 < num <= 100 || num === 400) {
    return true
} else{
    return false
}
}

console.log(boundary(56))


/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString(str) {
    return str.split("").reverse("").join("")

}

console.log(reverseString("EPICODE"))


/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom(n) {
    const arr = []
    for(let i=0; i<=n; i++)
    arr.push(Math.floor(Math.random() * 10))
    return arr
}   

console.log(giveMeRandom(6))


//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
    let areaRettangolo = l1 * l2
    return areaRettangolo + " metri quadrati"
}

console.log(area(10, 15))

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff(num3) {
    const sottraendo = 19
    sottrazione = Math.abs(num3 - sottraendo)
    if (sottrazione > 19) {
        return (sottrazione * 3)
    } else {
        return sottrazione
    }
}

console.log(crazyDiff(40))


/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify(input_string) {
    if(input_string.startsWith ("code") ) {
    return input_string 
} else{
    return "code" + input_string
}
}

console.log(codify("codeforever"))


/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7(num4) {
    if (num4%3 === 0 || num4%7 === 0) {
    return true
} else {
    return false
}
}

console.log(check3and7(20))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

function cutString (string) {
    return string.slice(1,-1)
}

console.log(cutString("Epicode"))
