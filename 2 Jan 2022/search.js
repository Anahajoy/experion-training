const number  = [4, 7, 2, 9, 1, 8];

const userinput = prompt('Enter an item for search : ');
// console.log(userinput);
 let j = 1;
for (let i = 0; i < number.length; i++) {
    if( userinput == number[i] )
    {
        console.log('The number is in ' + (i + 1) + 'position') ;
        let j = 0;
        console.log(j);
    }
    
    
  }
   if(j == 1)
   {
    console.log('the item is not present in the array');
   }