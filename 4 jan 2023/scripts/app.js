// document.write('hello');
// .then(data=>{
//     console.log(data.data);
// })
// .then(data =>{ 
//     console.log(data.data);
//     data.data.forEach(element => {
//    console.log(element.avatar , element.email); 
// });
// });
// function searchUser(){
//     let input = document.getElementById('searchBar').value
//     input = input.toLowerCase();
//     let x = document.getElementsByClassName('target');

//     for (let i = 0; i < x.length; i++) {
//         if(!x[i].innerHTML.toLowerCase().includes(input)){
//             x[i].style.display = 'none';
//         }
//         else{
//             x[i].style.display = 'list-item';
//         }
        
//     }
// }
const inputbox = document.getElementById('inputBox');

inputbox.addEventListener('keyup', ()=>{
fetch('https://reqres.in/api/users')
.then((response) => response.json())
.then((result) => {
    document.getElementById('target').innerHTML = '';
    result.data.forEach(element => {
        const row = `<tr>
                 <td>${element.id}</td>
                 <td>><img src="${element.avatar}"</td>
                 <td>${element.first_name} ${element.last_name}</td>
                 <td>${element.email}</td>
                 <tr>
        `;
   const value = inputbox.value;
   const choice = element.email.slice(0,(value.length));
   console.log(choice,value);
   if(value == choice){
    document.getElementById('target').innerHTML += row;
   }
});
});
});






const tbody = document.querySelector('#target');
fetch('https://reqres.in/api/users')
.then(response => response.json())
.then(result => {
    const users = result.data;
    users.forEach(user => {
        const row =
        `<tr>
           <td>${user.id}</td>
           <td>
            <img src = '${user.avatar}' height="50">
           </td>
           <td>${user.first_name} ${user.last_name}</td>
           <td>${user.email}</td>
           </tr>
           `;
        tbody.innerHTML += row;
    });
});
