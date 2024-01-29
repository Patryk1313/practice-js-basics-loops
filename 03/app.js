const x = 10;
let iteration = 0;
let randomNumber = -1;

let i = 0;

while (i <= x) {
    
    if(i == randomNumber) {
        console.log(iteration);
    } else {
        console.log("Nie znaleziono liczby ");
    }

    iteration++
    i++
}