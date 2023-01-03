const student1 = {
    name: 'tom',
    age: 20,
    mark1: 40,
    mark2: 35
};

const data1 = JSON.stringify(student1);
console.log(data);
const data = '{"name":"tom","age":20,"mark1":40,"mark2":35}';

const student = JSON.parse(data);
console.log(student);


