const p1 = ['anaha','ariya','elda','akamsha','elisabeth'];
console.log(p1);

p1.forEach(function(i){
    console.log(i);
});
let p2 = p1.map(function(i){
    return i+' hai';
});
console.log(p2);
let p3 = p1.filter(function(i){
    return i.length<5;
});
console.log(p3);