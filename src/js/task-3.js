const form = document.querySelector('.user-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();

    const userLogin = form.elements.login.value;
    const userPassword = form.elements.password.value;


    if (e.submitter.id === 'submit-btn') {
        const formData = {
            userLogin,
            userPassword,
        }

        localStorage.setItem('userData', JSON.stringify(formData));

        alert('The user is registered');
    }

    if (e.submitter.id === 'login-btn') {
        const formData = {
            userLogin,
            userPassword,
        }

        const savedData = localStorage.getItem('userData');

        if (JSON.stringify(formData) === savedData) {
            alert('Wellcome!');
        } else {
            alert('User not found');
        }
    }

    form.reset();
}