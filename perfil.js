function toggleEditForm() {
    const editFormContainer = document.getElementById('edit-form-container');
    if (editFormContainer.style.display === 'none' || editFormContainer.style.display === '') {
        editFormContainer.style.display = 'block';
    } else {
        editFormContainer.style.display = 'none';
    }
}

function saveChanges() {
    const email = document.getElementById('edit-email').value;
    const senha = document.getElementById('edit-senha').value;
    const nome = document.getElementById('edit-nome').value;
    const cpf = document.getElementById('edit-cpf').value;
    const telefone = document.getElementById('edit-telefone').value;
    const cartao = document.getElementById('edit-cartao').value;

    localStorage.setItem('email', email);
    localStorage.setItem('senha', senha);
    localStorage.setItem('nome', nome);
    localStorage.setItem('cpf', cpf);
    localStorage.setItem('telefone', telefone);
    localStorage.setItem('cartao', cartao);

    updateProfile();
    toggleEditForm();
    return false;
}

function loadProfile() {
    const email = localStorage.getItem('email') || 'seuemail@gmail.com';
    const senha = localStorage.getItem('senha') || '********';
    const nome = localStorage.getItem('nome') || 'Nome de Usuario';
    const cpf = localStorage.getItem('cpf') || '000.000.000-00';
    const telefone = localStorage.getItem('telefone') || '(21) 99999-9999';
    const cartao = localStorage.getItem('cartao') || 'Mastercard terminado em 0548';

    document.getElementById('email').innerText = email;
    document.getElementById('senha').innerText = senha;
    document.getElementById('nome').innerText = nome;
    document.getElementById('cpf').innerText = cpf;
    document.getElementById('telefone').innerText = telefone;
    document.getElementById('cartao').innerText = cartao;
    document.getElementById('profile-nome').innerText = nome;
    document.getElementById('header-nome').innerText = nome;
}

function updateProfile() {
    const email = localStorage.getItem('email');
    const senha = localStorage.getItem('senha');
    const nome = localStorage.getItem('nome');
    const cpf = localStorage.getItem('cpf');
    const telefone = localStorage.getItem('telefone');
    const cartao = localStorage.getItem('cartao');

    document.getElementById('email').innerText = email;
    document.getElementById('senha').innerText = senha;
    document.getElementById('nome').innerText = nome;
    document.getElementById('cpf').innerText = cpf;
    document.getElementById('telefone').innerText = telefone;
    document.getElementById('cartao').innerText = cartao;
    document.getElementById('profile-nome').innerText = nome;
    document.getElementById('header-nome').innerText = nome;
}
