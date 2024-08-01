const form = document.querySelector('.feedback__form');

form.addEventListener('submit', onFormSubmit);

getLocalStorage();

function onFormSubmit(e) {
    e.preventDefault();

    const formData = {
        name: e.target.name.value,
        message: e.target.message.value,
    }

    localStorage.setItem('feedbackData', JSON.stringify(formData));

    form.reset();
}

function getLocalStorage() {
    const savedData = localStorage.getItem('feedbackData');

    if (savedData) {
        const parsedData = JSON.parse(savedData);

        form.elements.name.value = parsedData.name;
        form.elements.message.value = parsedData.message;
    }
}