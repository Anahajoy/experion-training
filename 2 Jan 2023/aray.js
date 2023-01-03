const number = [4, 8, 3, 9, 2, 6];
// let temp = 0;


function asending() {
    for (let i = 0; i < number.length; i++) {
        for (let j = i + 1; j < number.length ; j++) {
           if( number[i] > number[j])
           {
               const temp = number[i];
               number[i] = number[j];
               number[j] = temp;
           }
        }
    
    }
    
}

function decending() {
    for (let i = 0; i < number.length; i++) {
        for (let j = i + 1; j < number.length ; j++) {
           if( number[i] < number[j])
           {
               const temp = number[i];
               number[i] = number[j];
               number[j] = temp;
           }
        }
    
    }
    
}





console.log('Array in Decnding order is: ');
console.log(decending());
for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
    
}
console.log('Array in asending order is: ');
console.log(asending());
for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
    
}



