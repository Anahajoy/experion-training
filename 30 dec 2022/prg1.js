const languages = ['c' , 'c++' , 'java' , 'python'];
languages.forEach(lang => {
    console.log(lang);
});

const names = ['anaha', 'ariya' ,'varsha' , 'elda'];
names.forEach((item, index) => {
    console.log(index , item);
});

const person = {
    name: 'anaha',
    age: 20,
    email: null,
    experience: [
       {
           company: 'Company ABC',
           years: 2
       },
       {
           company:'Company XYZ',
           years: 3
       }
    ]

};
// person.name = 'varsha';
// person.email = 'varsha@mail.com';
console.log(person['experience']);
console.log(person.experience[0]);
console.log(person.experience[0].company);


person.experience.forEach(exp =>console.log(exp.company));