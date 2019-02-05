const applicant = {
    name: 'Rudolph Ghirardelli',
    skill: 'flappin his gums',
    faveFood: 'chocolate'
};

const serialize = JSON.stringify(applicant);

window.localStorage.setItem('applicant', serialize);