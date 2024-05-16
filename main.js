'use strict'

const team = [
    {
        nome: 'Wayne Barrett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Carroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg',
    },
];

for(let i = 0; i < team.length; i++) {
    const person = team[i];

    for(let key in person) {
        console.log(`${key}: ${person[key]}`);
    }

    console.log('---');
}

const teamList = document.getElementById('team-list');

for(let i = 0; i < team.length; i++) {
    const person = team[i];
    console.log(person);

    const liElement = document.createElement('li');
    console.log(liElement);

    const nomePersona = document.createElement('h3');
    if(person.nome !== '') {
        nomePersona.innerText = person.nome;
    } else {
        nomePersona.innerText = 'Nome non disponibile';
    }
    console.log(nomePersona);
    liElement.append(nomePersona);

    const ruoloPersona = document.createElement('h5');
    ruoloPersona.innerText = person.ruolo;
    console.log(ruoloPersona);
    liElement.append(ruoloPersona);

    const fotoPersona = document.createElement('p');
    fotoPersona.innerText = person.foto;
    console.log(fotoPersona);
    liElement.append(fotoPersona);
    
    const imgPersona = document.createElement('img');
    imgPersona.src = 'images/' + person.foto;
    imgPersona.alt = person.nome;
    liElement.append(imgPersona);
    console.dir(imgPersona);

    console.log(liElement);
    teamList.append(liElement);
}



