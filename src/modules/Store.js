import UI from "./UI";
import { Task } from "./Utils";

export default class Store {
    static _todoItems = [];
    static addTask() {
        const form = document.getElementById('todo-form');
        form.addEventListener('submit', e => {
            e.preventDefault();
            const title = document.getElementById('todo-title');
            const details = document.getElementById('todo-detail').value;
            const date = document.getElementById('todo-date').value;
            const priority = document.getElementsByName('btnradio');

            let selectedValue = "";

            for(let p of priority) {
                if(p.checked) {
                    selectedValue = p.id;
                }
            }
            const cleanedTitle = title.value.trim();
            const todo = Task(cleanedTitle, details, date, selectedValue);

            if(todo.title !== '') {
                Store._todoItems.push(todo);
                console.log(this._todoItems);
                UI.renderInbox(todo);
                form.reset();
                localStorage.setItem('todoItemsRef', JSON.stringify(Store._todoItems));
            }
        })
    }
}