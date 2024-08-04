const feedbackForm = document.querySelector('.feedback__form');

feedbackForm.addEventListener('submit', onFormSubmit);

getLocalStorage();

function onFormSubmit(e) {
    e.preventDefault();

    const formData = {
        name: e.target.name.value,
        message: e.target.message.value,
    }

    localStorage.setItem('feedbackData', JSON.stringify(formData));

    feedbackForm.reset();
}

function getLocalStorage() {
    const savedData = localStorage.getItem('feedbackData');

    if (savedData) {
        const parsedData = JSON.parse(savedData);

        feedbackForm.elements.name.value = parsedData.name;
        feedbackForm.elements.message.value = parsedData.message;
    }
}