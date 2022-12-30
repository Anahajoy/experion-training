console.log(`Helloworld`);
console.log(`Hello`,`world`);
 var i = 5;
console.log(i);
var firstName = `john`;
var lastName = `Doe`;
console.log(firstName,lastName);                       
console.log(typeof firstName);
console.log(typeof lastName);
   

var data = `This is a string`;
console.log(data);
console.log(data[0]);
console.log(data[6]);
console.log(data.length);
console.log(data[data.length - 1]);
var result = data.toUpperCase();
console.log(result);
data = data.toLowerCase();
console.log(data);

var message = `        js for web     `;
console.log(message);
console.log(message.trim());
console.log(message.trimStart());

// eslint-disable-next-line no-redeclare
var alert  = `this is new program `;
console.log(alert.split(``));
console.log(alert.split(` `));
var res = alert.replace(` `,`_`);
console.log(res);
// eslint-disable-next-line no-redeclare
var res = alert.replaceAll(` `,`_`);
console.log(res);

var check = ` my name is anaha `;
// eslint-disable-next-line no-redeclare
var res = check.toLocaleUpperCase().trim().replaceAll(` `,`_`);
console.log(res);


for ( let i = 0; i < 5; i++)
{
    console.log(`inside the loop: `,i);

}
console.log(`outside the loop: `,1);


 const district = `idukki`;
 console.log(district);
 
 const food = null;
 console.log(food);

 
