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

                <div class="sidebar-contents list-group p-4">
                    <a class="list-group-item list-group-item-action p-3 active" data-bs-toggle="list" href="#inbox" ><i class="bi bi-inbox"></i> Inbox</a>

                    <a class="list-group-item list-group-item-action p-3" data-bs-toggle="list" href="#today" ><i class="bi bi-calendar-event"></i> Today</a>

                    <a class="list-group-item list-group-item-action p-3" data-bs-toggle="list" href="#week" ><i class="bi bi-calendar-range"></i> This Week</a>
                </div>
            </aside>

            <main class="inner-container__main">
                <div class="tab-content">
                    <div id="inbox" class="tab-pane task-list list-group list-group-flush active p-4">
                    </div>
                    <div id="today" class="tab-pane task-list list-group list-group-flush">
                    </div>
                    <div id="week" class="tab-pane task-list list-group list-group-flush">
                    </div>
                </div>

                <button class="fab" data-bs-toggle="modal" data-bs-target="#modal"><i class="bi bi-plus"></i></button>

                <div class="modal fade" id="modal" data-bs-backdrop="static" data-bs-keyboard="false">
                    <div class="modal-dialog modal-lg modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">add something ...</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"><button>
                            </div>
                            <div class="modal-body p-0">
                                <div class="mod inner-container">
                                    <aside class="inner-container__sidebar">
                                        <div class="d-flex align-items-start nav nav-pills flex-column p-3 m-2">
                                                <button type="button" class="nav-link active p-2 fs-2" data-bs-toggle="pill" data-bs-target="#task">#task</button>

                                                <button type="button" class="nav-link p-2 fs-2" data-bs-toggle="pill" data-bs-target="#project">#project</button>

                                                <button type="button" class="nav-link p-2 fs-2" data-bs-toggle="pill" data-bs-target="#notes">#note</button>
                                        </div>
                                    </aside>

                                    <main class="inner-container__main">
                                        <div class="tab-content">
                                            <div class="tab-pane fade show active" id="task">
                                                <form id="todo-form">
                                                    <div class="input-group p-3">
                                                        <span class="input-group-text">task</span>
                                                        <input type="text"
                                                        id="todo-title"
                                                        class="form-control" placeholder="ex: complete pending assingments..lol">
                                                    </div>
                                                    <div class="input-group mb-1 p-3">
                                                        <span class="input-group-text">details</span>
                                                        <textarea
                                                        id="todo-detail"
                                                        class="form-control" placeholder="you know them i dont..."></textarea>
                                                    </div>
                                                    <div class="input-group p-3">
                                                        <span class="input-group-text">date</span>
                                                        <input type="date"
                                                        id="todo-date" class="form-control">
                                                    </div>
                                                    <div class="btn-group p-3">
                                                        <input type="radio" class="btn-check" name="btnradio" id="low">
                                                        <label class="btn btn-outline-primary" for="low">low</label>

                                                        <input type="radio" class="btn-check" name="btnradio" id="med">
                                                        <label class="btn btn-outline-primary" for="med">med</label>

                                                        <input type="radio" class="btn-check" name="btnradio" id="high">
                                                        <label class="btn btn-outline-primary" for="high">high</label>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">close</button>
                                                        <button type="submit" class="btn btn-primary" id="submit-btn">add it!</button>
                                                    </div>
                                                </form>
                                            </div>

                                            <div class="tab-pane fade" id="project">hii</div>

                                            <div class="tab-pane fade" id="notes">hiii</div>
                                        </div>
                                    </main>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        `
        const ref = localStorage.getItem('todoItemsRef');
            if (ref) {
                let todoItems = JSON.parse(ref);
                todoItems.forEach(t => {
                UI.renderInbox(t);
                });
            }
        Store.addTask();
    }

    static renderInbox(todo) {
        const list = document.getElementById('inbox');
        const isChecked = todo.checked ? 'done' : '';
        let priority = '';
        switch(todo.priority) {
            case 'low': priority = 'list-group-item-success';
                break;
            case 'med': priority = 'list-group-item-warning';
                break;
            case 'high': priority = 'list-group-item-danger';
                break;
        }
        const listItem = document.createElement('label');
        listItem.setAttribute('class', `todo-item list-group-item list-group-item-action ${isChecked} p-3 fs-2 ${priority}`)
        listItem.setAttribute('data-key', todo.id);

        listItem.innerHTML =
            `<input id="${todo.id}" class="form-check-input me-1" type="checkbox" /> <span>${todo.title}<span> <span>${todo.date}</span>`
        list.append(listItem);
    }
}

