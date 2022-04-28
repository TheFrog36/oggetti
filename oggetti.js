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

function filterMF(array, sesso = 'm') {
    const newArray = [];
    if (sesso === 'M' || sesso === 'm') {
        for (let i = 0; i < array.length; i++) {
            const studente = array[i];
            if (studente.sesso === 'M') {
                newArray.push(studente)
            }
        }
    }
    else {
        for (let i = 0; i < array.length; i++) {
            const studente = array[i];
            if (studente.sesso === 'F') {
                newArray.push(studente)  
            }
        }
    }
    return newArray
} 

console.log(filterMF(arrayStudenti, 'F'))

