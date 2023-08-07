console.log("===========1UZD===========");
// Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.

for (let i = 0; i < 10; i++) {
    console.log("Labas");
}

console.log("============2UZD========");
// Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log("============3UZD==========");
// Atspausdinkite kas antrą skaičių nuo 10 iki 50 (pornius);

for (let i = 10; i < 50; i++) {
    if(i % 2 == 0){
        console.log(i);
    }   
}

console.log("===========4UZD=========");
// Atspausdinkite kas antrą skaičių nuo 10 iki 50. (pornius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)

for (let i = 10 ; i < 50; i++){
    if(i % 2 == 0){
        if(i % 10 == 0){ 
        continue;
    } 
    console.log(i);
    }
}

console.log("=============3uzd==========");
// Sukurkite masyvą su dešimt augalų pavadinimų.

let augalai = ['Agurkas','Pomidoras','Ąžuolas','Liepa','Uosis','Beržas','Agrastas','Bulvė','Rabarbaras','Smidras']

console.log(augalai);

console.log("=============4uzd==========");
// Atspausdinkite kiekvieną 3čio uždavinio augalą atskiroje eilutėje.


console.log(augalai[0]);
console.log(augalai[1]);
console.log(augalai[2]);
console.log(augalai[3]);
console.log(augalai[4]);
console.log(augalai[5]);
console.log(augalai[6]);
console.log(augalai[7]);
console.log(augalai[8]);
console.log(augalai[9]);

console.log("=============5uzd==========");
// Atspausdinkite 3čio uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).


console.log(augalai.reverse());

console.log("=============8uzd==========");
// sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;

let count = 0;

for (let i = 0; i < 20; i++) {
    if(i % 2 == 0){
        count++;
    }
}

console.log(count);

console.log("=============9uzd==========");
// Suskaičiuokite kiek 3čio uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai. Skaičiuojam abu atskirai.

let count5 = 0;
let count7 = 0;

for (let i = 0; i < augalai.length; i++) {
    if(augalai[i].length < 5){
        count5++;
        continue;
    }

    if(augalai[i].length > 7){
        count7++;
    }
    
}

console.log("žodžių trumpesnių nei 5 simboliai yra " + count5 + " o, ilgesnių nei 7 simboliai yra " + count7);
