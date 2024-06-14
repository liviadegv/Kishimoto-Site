document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target); 
    const data = {
        fullName: formData.get('fullName'),
        cpf: formData.get('cpf'),
        dob: formData.get('dob'),
        address: formData.get('address'),
        phone: formData.get('phone'),
        email: formData.get('email')
    };

    console.log('Form Data Submitted:', data);

    alert('Cadastro realizado com sucesso!');
    event.target.reset();
});
