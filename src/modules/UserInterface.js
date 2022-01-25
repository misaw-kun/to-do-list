export default class UserInterface {
    static load() {
       const root = document.getElementById('root');
       root.classList.add('container-fluid');

       root.innerHTML = `<aside class="root__sidebar"></aside>
       <main class="root__main">
        <header id="header"></header>
        <div class="task-view"></div>
       </main>`;

       UserInterface.loadSidebar();
       UserInterface.loadTasks();
    }

    static loadSidebar() {
        const sidebar = document.querySelector('.root__sidebar');
        sidebar.innerHTML = `
        <div class="navbar navbar-light justify-content-center">
            <span class="mb-0 display-3"><i class="bi bi-list-check"></i>list</span>
        </div>
        <div class="list-group list-group-flush m-3">
            <a class="list-group-item list-group-item-action active p-3 display-6" data-bs-toggle="list" href="#inbox">
            <i class="bi bi-inbox-fill"></i> inbox
            </a>
            <a class="list-group-item list-group-item-action p-3 display-6"  data-bs-toggle="list" href="#today">
            <i class="bi bi-calendar-check-fill"></i> today
            </a>
            <a class="list-group-item list-group-item-action p-3 display-6"  data-bs-toggle="list" href="#week">
            <i class="bi bi-calendar-range-fill"></i> week
            </a>
        </div>
        <div class="navbar navbar-light justify-content-center">
            <span class="mb-0 display-4"><i class="bi bi-kanban"></i> projects</span>
        </div>`
    }

    static loadHeader(title) {
        const header = document.querySelector('#header');
        header.classList.add('display-2');
        header.innerHTML = `<div class="display-3">${title}</div>`
    }

    static loadTasks() {
        const taskview = document.querySelector('.task-view');
        taskview.classList.add('tab-content');
        taskview.innerHTML = `<div class="tab-content">
            <div class="tab-pane fade show active" id="inbox"><h1>hi</h1></div>
            <div class="tab-pane fade" id="today"><h1>hii</h1></div>
            <div class="tab-pane fade" id="week"><h1>hiii</h1></div>
        </div>`
    }


}