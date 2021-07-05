/*
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

1 far stampare i numeri da 1 a 100
2 creare condizioni affinchè vengano modificati i multipli di 3 e 5 in parole chiavi
3 sovrascrivere i numeri multipli di 3, 5, 3 e 5.
*/


for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } 
    if (i % 3 == 0) {
        console.log("Fizz");
    }   
    else if (i % 5 == 0) {
        console.log("Buzz");
    }   
    else {
        console.log("numero ", i);
    }  
}
