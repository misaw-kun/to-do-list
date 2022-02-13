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
            const todo = Task(cleanedTitle, date, details, selectedValue);

            if(todo.title !== '') {
                this._todoItems.push(todo);
                UI.renderTodos(todo, 'inbox');
                form.reset();
                localStorage.setItem(String(todo.id), JSON.stringify(todo));
            }
        })
    }

   static deleteTask(key, tab) {
        const index = this._todoItems.findIndex(item => item.id === Number(key));
        const todo = {
            deleted: true,
            ...this._todoItems[index]
        };
        this._todoItems = this._todoItems.filter(item => item.id !== Number(key));
        localStorage.removeItem(todo.id);
        UI.renderTodos(todo, tab);
    }

    static fetchTodos() {
        for (let index = 0; index < localStorage.length; index++) {
            let todo = JSON.parse(localStorage.getItem(localStorage.key(index)));
            this._todoItems.push(todo);
            UI.renderTodos(todo, 'inbox');
        }
    }
}