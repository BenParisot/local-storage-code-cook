const json = window.localStorage.getItem('applicant');
const hydrate = JSON.parse(json);

const nameNode = document.getElementById('name');
const skillNode = document.getElementById('skill');
const foodNode = document.getElementById('fave-food');

nameNode.textContent = hydrate.name;
skillNode.textContent = hydrate.skill;
foodNode.textContent = hydrate.faveFood;

