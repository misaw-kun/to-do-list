import UI from "./UI";
import { Task } from "./Utils";

export default class Store {
    static _todoItems = [];
    static addTask() {
        const form = document.getElementById('todo-form');
        form.addEventListener('submit', e => {
            e.preventDefault();
            const input = document.getElementById('todo-input');
            const cleanedInput = input.value.trim();
            const todo = Task(cleanedInput);

            if(todo.title !== '') {
                Store._todoItems.push(todo);
                console.log(this._todoItems)
                UI.renderTodo(todo);
                input.value = '';
                input.focus();
            }
        })
    }
}