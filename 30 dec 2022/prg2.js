const student = {
    name: 'student 1',
    mark1: 50,
    mark2: 20,
    total: function(){
        const extraMark = 5;
        console.log(this.mark1 + this.mark2 + extraMark);
    }
  };
  const adres = {
    place: 'idukki'
  };

  const copy = Object.assign({}, student , adres);
  console.log(student);
  console.log(adres);
  console.log(copy);

  // eslint-disable-next-line no-redeclare
//   const my = {
//     fullName: 'anaha',
//     pla: 'kmr'
//   };
//    const {fullName,pla} = my;
//    console.log(fullName);
const keys = Object.keys(student);
keys.forEach(keys=>{
    console.log(student[keys]);
});

const values = Object.values(student);
values.forEach(value=>{
    console.log(value);
});