const tbodyNode = document.getElementById('applicants');
const jsonString = window.localStorage.getItem('applicants');
let applicants = [];

if(jsonString) {
    applicants = JSON.parse(jsonString);
}

for(let index = 0; index < applicants.length; index++) {
    const applicant = applicants[index];

    const tr = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const lastNameCell = document.createElement('td');
    tr.appendChild(firstNameCell);

    firstNameCell.textContent = applicant.firstName;
    lastNameCell.textContent = applicant.lastName;
    tr.appendChild(lastNameCell);

    tbodyNode.appendChild(tr);
}


