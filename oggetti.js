// const corso1 = {
//     nome: 'Programmatore front end',
//     ore: 300

// }

// const voti1 = [7, 8, 9, 10]
// const student1 = {
//     name: "Artiom",
//     surname: "Sangiorgio",
//     age: 24,
//     married: false,
//     corse_iscrizione: corso1,
//     voti: voti1
// }

// console.log(student1.name + " " + student1.surname);
// console.log(student1);
// const voti2 = [7, 9, 8, 10]
// const student2 = {
//     name: "Marco",
//     surname: "Rossi",
//     age: 25,
//     married: false,
//     corse_iscrizione: corso1,
//     voti: voti2
// }

// const studenti = [student1, student2]
// console.log(studenti)

//creare l'oggetto studente basato su se stessi, creare un ciclo log che stampi info e un check che controlla m/f

const studente1 = {
    nome : 'Artiom',
    cognome : 'Sangiorgio',
    annoDiNascita : 1998,
    sesso : 'M',
    cittaDiNascita : 'San Pietroburgo',
}

const studente2 = {
    nome : 'Paolo',
    cognome : 'Foppiano',
    annoDiNascita : 1997,
    sesso : 'M',
    cittaDiNascita : 'Genova',
}

const studente3 = {
    nome : 'Cinzia',
    cognome : 'Ariotti',
    annoDiNascita : 1996,
    sesso : 'F',
    cittaDiNascita : 'Genova',
}


const studente4 = {
    nome : 'Polina',
    cognome : 'Borect',
    annoDiNascita : 1994,
    sesso : 'F',
    cittaDiNascita : 'Chelyabinsk',
}


const studente5 = {
    nome : 'Giovanni',
    cognome : 'Cambiaso',
    annoDiNascita : 1997,
    sesso : 'M',
    cittaDiNascita : 'Genova',
}


const studente6 = {
    nome : 'Mattia',
    cognome : 'Dalla Mutta',
    annoDiNascita : 1993,
    sesso : 'M',
    cittaDiNascita : 'Genova',
}


const studente7 = {
    nome : 'Leslie',
    cognome : 'Fritas',
    annoDiNascita : 1995,
    sesso : 'F',
    cittaDiNascita : 'Lima',
}

const studente8 = {
    nome : 'Cristopher',
    cognome : 'Limone',
    annoDiNascita : 1994,
    sesso : 'M',
    cittaDiNascita : 'Genova',
}

const studente9 = {
    nome : 'Jessica',
    cognome : 'Vitanza',
    annoDiNascita : 1995,
    sesso : 'F',
    cittaDiNascita : 'Palermo',
}

const studente10 = {
    nome : 'Mirco',
    cognome : 'Faro',
    annoDiNascita : 1993,
    sesso : 'M',
    cittaDiNascita : 'Santa Margherita',
}

const arrayStudenti = [studente1, studente2, studente3, studente4, studente5, studente6, studente7, studente8, studente9, studente10];

console.log(arrayStudenti);

function filterMF(array, sesso ){
    const newArray = [];
    if(sesso === 'm' || sesso === 'M') sesso = 'M';
    else sesso = 'F';
    for(let i = 0; i < array.length; i++){
        if(array[i].sesso === sesso) newArray.push(array[i])
    }
    return newArray;
}
console.log(filterMF(arrayStudenti, 'M'))

console.log('print solo femmine tramite filter function', arrayStudenti.filter((e) => e.sesso === 'F'))

function print_oldest_student(array){
    let oldest = array[0];
    for(let i = 1; i < array.length; i++){
        if(oldest.annoDiNascita > array[i].annoDiNascita) oldest = array[i];
    }
    return oldest;
}
console.log('stampo studente più vecchio', print_oldest_student(arrayStudenti));

console.log('stampo studente più vecchio con reduce e lambda', arrayStudenti.reduce((p,c) => p.annoDiNascita > c.annoDiNascita ? c : p)) 

const testArray4 = [2, 4, 7, -9, 1000, -45, 2, 12, 333, -1000, 123, 34];
const testArray5 = ["rosso", "verde", "giallo", "arancione", "magenta", "blu"];

console.log('numeri disordinati', testArray4);
console.log('numeri ordinati', testArray4.sort());
console.log(testArray4.sort((e1, e2) => e1 -e2))

function sort_number(n1, n2){
    if(n1 > n2) return 1;
    else return -1;
}

console.log(testArray4.sort(sort_number))

function sort_number_2(el1, el2){
    return el1 - el2;
}
console.log(testArray4.sort(sort_number_2))

function sort_string(el1, el2){
    return el1.localeCompare(el2);
}
console.log(testArray5.sort(sort_string));
console.log(testArray5.sort((e1, e2) => e1.length - e2.length));

console.log(arrayStudenti.sort((e1, e2) => e1.nome.localeCompare(e2.nome)))

function compare_students_by_age_and_surname(el1, el2){
    const ordine = el2.annoDiNascita - el1.annoDiNascita;
    if(ordine === 0) return el1.cognome.localeCompare(el2.cognome);
    else return ordine
}

console.log(arrayStudenti.sort(compare_students_by_age_and_surname))

console.log(JSON.stringify(studente1)) //trasforma l'oggetto in una stringa