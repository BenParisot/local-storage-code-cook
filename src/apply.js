const applicant1 = {
    firstName: 'Rudy',
    lastName: 'Ghirardelli', 
    skill: 'flappin his gums',
    faveFood: 'unsweetened tapioca pudding'
};

const newApplicant = {
    firstName: 'Kelly',
    lastName: 'Scampath', 
    skill: 'public aging',
    faveFood: 'a single jalapeno pepper once a week'
};


let applicants = [];

applicants.push(applicant1);

// console.log(applicants);

let serializeOne = JSON.stringify(applicants);

window.localStorage.setItem('applicants', serializeOne);

//check to see if there is already an array of applicants

const jsonString = window.localStorage.getItem('applicants');





//if there is, parse it and put it in the new array --  lets you preserve previous applicants

if(jsonString) {
    applicants = JSON.parse(jsonString);
}

//then serialize the new array with both existing and new objects and set to localstorage

applicants.push(newApplicant);

serializeOne = JSON.stringify(applicants);

window.localStorage.setItem('applicants', serializeOne);


console.log(applicants);