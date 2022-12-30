function greet(){
    console.log('Hello world');

}
greet();

function add(num1 , num2) {
    return num1 + num2;
    
}
const res = add(10 , 20);
console.log(res);

function convertCasing(value){
    return value.toLowerCase();
}
const res1 =  convertCasing('ANAha');
console.log(res1.toUpperCase());



function getFirstChar1(value){
    return value[0];
}


const getFirstChar2 = function (value){
    return value[0];
};

const getFirstChar3 = (value) => {
    return value[0];
};

console.log(getFirstChar1('Anaha'));
console.log(getFirstChar2('Anaha'));
console.log(getFirstChar3('Anaha'));


const getFirstChar = value => value[0];
console.log(getFirstChar('first'));