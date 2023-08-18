import axios from "axios";
import {CreateTodolist} from "../stories/todolist-api.stories";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
})

export const todoListApi = {
    getTodoList() {
        return instance.get('todo-lists')
    },

    createTodolist(title: string) {
        return instance.post(
            'todo-lists',
            {title},
            {withCredentials: true}
        )
    },


    deleteTodolist(id: string) {
        return instance.delete(
            `todo-lists/${id}`,
            {withCredentials: true}
        )
    },

    updateTodolist(title: string, id: string) {
        return instance.put(
            `todo-lists/${id}`,
            {title},
            {withCredentials: true}
        )
    },


}