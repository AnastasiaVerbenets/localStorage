const form = document.querySelector('.todo__form');
const selectedTodos = JSON.parse(localStorage.getItem('selectedTodos')) || {};

form.addEventListener('change', onCheckboxChange);

initForm();

function onCheckboxChange(e) {
    selectedTodos[e.target.name] = e.target.checked;
    localStorage.setItem('selectedTodos', JSON.stringify(selectedTodos));
}

function initForm() {
    const chekedItems = localStorage.getItem('selectedTodos');

    if (chekedItems) {
        const parsedItems = JSON.parse(chekedItems);

        Object.entries(parsedItems).forEach(([name, checked]) => {
            const checkbox = form.querySelector(`input[name="${name}"]`);

            if (checkbox) {
                checkbox.checked = checked;
            }
        });
    }
}
