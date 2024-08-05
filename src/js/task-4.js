const title = document.querySelector('.bookmark__title');
const url = document.querySelector('.bookmark__url');
const button = document.querySelector('.bookmark__btn');
const list = document.getElementById('bookmarks');

let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

button.addEventListener('click', addBookmark);
list.addEventListener("click", onDeleteBtn);

renderBookmarks();

function addBookmark(e) {
    e.preventDefault();

    if (title.value.trim() === '') {
        alert('Enter a new bookmark');
    } else {
        const titleValue = title.value.trim();
        const urlValue = url.value.trim();

        bookmarks.push({ title: titleValue, url: urlValue });

        saveBookmarks();
        renderBookmarks();

        title.value = '';
        url.value = '';
    }
}

function onDeleteBtn(e) {
    if (e.target.classList.contains("deleteButton")) {
        const item = e.target.closest("li");
        const index = Array.from(list.children).indexOf(item);

        bookmarks.splice(index, 1);

        saveBookmarks();
        item.remove();
    }
}

function saveBookmarks() {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

function renderBookmarks() {
    list.innerHTML = '';
    bookmarks.forEach(bookmark => {
        list.insertAdjacentHTML("beforeend", `<li><a href="${bookmark.url}">${bookmark.title}</a><button type="button" class="deleteButton">Delete</button></li>`);
    });
}