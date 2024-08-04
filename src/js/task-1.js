const todoForm = document.querySelector('.todo__form');
const selectedTodos = JSON.parse(localStorage.getItem('selectedTodos')) || {};

todoForm.addEventListener('change', onCheckboxChange);

initTodoForm();

function onCheckboxChange(e) {
    selectedTodos[e.target.name] = e.target.checked;
    localStorage.setItem('selectedTodos', JSON.stringify(selectedTodos));
}

function initTodoForm() {
    const chekedItems = localStorage.getItem('selectedTodos');

    if (chekedItems) {
        const parsedItems = JSON.parse(chekedItems);

        Object.entries(parsedItems).forEach(([name, checked]) => {
            const checkbox = todoForm.querySelector(`input[name="${name}"]`);

            if (checkbox) {
                checkbox.checked = checked;
            }
        });
    }
}