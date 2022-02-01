import Store from "./Store";
export default class UI {

    static loadUI() {
        const root = document.getElementById('root');
        root.classList.add('container-lg');
        root.innerHTML += `
        <div class="inner-container">
            <aside class="inner-container__sidebar">
                <header class="header navbar sticky-top">
                    <span class="ms-2 display-1 mt-2">#To-Do <i class="bi bi-card-checklist"></i></span>
                </header>
                <ul class="sidebar-contents list-group p-4">
                    <li class="list-group-item list-group-item-action p-3"><i class="bi bi-inbox"></i> Inbox</li>
                    <li class="list-group-item list-group-item-action p-3"><i class="bi bi-calendar-event"></i> Today</li>
                    <li class="list-group-item list-group-item-action p-3"><i class="bi bi-calendar-range"></i> This Week</li>
                </ul>
            </aside>

            <main class="inner-container__main">
                <form id="todo-form">
                    <input id="todo-input" type="text" class="form-control" />
                </form>
                <ul id="task-list" class="list-group list-group-flush">
                </ul>
                <button class="fab"><i class="bi bi-plus"></i></button>
            </main>
        </div>
        `
        Store.addTask();
    }

    static renderTodo(todo) {
        const list = document.getElementById('task-list');
        const isChecked = todo.checked ? 'done' : '';

        const listItem = document.createElement('li');
        listItem.setAttribute('class', `todo-item list-group-item list-group-item-action ${isChecked}`)
        listItem.setAttribute('data-key', todo.id);
        listItem.innerHTML =
        `<input id="${todo.id}" type="checkbox" /> <span>${todo.title}</span>`
        list.append(listItem);
    }
}

