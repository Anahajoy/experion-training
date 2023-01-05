const formData={
    email: { 
        feild: document.forms.login.email,
        errors: []
    },
    password: {
        feild: document.forms.login.password,
        errors: []

    },
    clean: function(){
        this.email.errors = [];
        this.password.errors = [];

    }
};


function handleSubmit(e){
    e.preventDefault();
    validate();
}

function displayErrors(){
    let nextElement = formData.email.feild.nextElementSibling;
    nextElement.innerHTML = '';
    if (formData.email.errors.length > 0){
        nextElement.classList.remove('d-none');
        nextElement.innerHTML = formData.email.errors.join('<br/>');
    }

    nextElement = formData.password.feild.nextElementSibling;
    nextElement.innerHTML = '';
    if (formData.password.errors.length > 0){
        nextElement.classList.remove('d-none');
        nextElement.innerHTML = formData.password.errors.join('<br/>');
    }
}


function validate() {
    formData.clean();
    console.log(formData);
    if(formData.email.feild.value === ''){
       formData.email.errors.push('Email is required');
    }
    if(!formData.email.feild.value.includes('@')){
        formData.email.errors.push('Email must be valid');
    }

    if(formData.password.feild.value === ''){
        formData.password.errors.push('password is requird');

    }
    if(formData.password.feild.value.length < 6 ){
        formData.password.errors.push('password must be atleast 6 charcaters');

    }
    displayErrors();
}

document.querySelectorAll('#login input').forEach(element=>{
    element.addEventListener('keyup',()=>{
        validate();
    });
});