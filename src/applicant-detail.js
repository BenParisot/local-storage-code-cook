const json = window.localStorage.getItem('applicant');
const hydrate = JSON.parse(json);
console.log(hydrate);

console.log('this works');