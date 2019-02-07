const json = window.localStorage.getItem('applicants');
const applicants = JSON.parse(json);
let applicant = null; 

const searchParams = new URLSearchParams(window.location.search);
const name = searchParams.get('name');

for(let index = 0; index < applicants.length; index++) {
    const currentApplicant = applicants[index];
    if(currentApplicant.firstName === name) {
        applicant = currentApplicant;
        break;
    }
}

const firstNameNode = document.getElementById('first-name');
const lastNameNode = document.getElementById('last-name');
const skillNode = document.getElementById('skill');
const foodNode = document.getElementById('fave-food');

firstNameNode.textContent = applicant.firstName;
lastNameNode.textContent = applicant.lastName;
skillNode.textContent = applicant.skill;
foodNode.textContent = applicant.faveFood;

