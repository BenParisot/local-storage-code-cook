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
    let link = document.createElement('a');
    link.target = 'blank';
    link.href = 'applicant-detail.html?name=' + encodeURIComponent(applicant.firstName);
    link.textContent = applicant.firstName;
    link.appendChild(firstNameCell);
    tr.appendChild(link);
    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = applicant.lastName;
    tr.appendChild(lastNameCell);

    tbodyNode.appendChild(tr);

    console.log(link);
}


