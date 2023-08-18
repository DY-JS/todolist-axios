import React, {useEffect, useState} from 'react'
import {todoListApi} from "../api/api";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // const res = axios.get('https://social-network.samurai.com/api/1.1/todo-lists',
        // {withCredentials: true},)
        todoListApi.getTodoList()
            .then((res) => {
                console.log(res)
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = "React"
        todoListApi.createTodolist(title)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = "React";

        todoListApi.getTodoList()    //чисто чтоб не хардкодить id
            .then((res) => {
                setState(res.data)
                return res.data[0].id  //берём id из ответа сервера т как state ещё не обновился на этом этапе
            })                         // и возвр его
            .then((id) => {
                todoListApi.deleteTodolist(id)
            })
            .then(() => {
                return todoListApi.getTodoList()
            }).then(res => {
                setState(res.data)
        })


    }, [])

    return <div>{JSON.stringify(state, null, 2)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = "Redux&TK";
        todoListApi.getTodoList()//чисто чтоб не хардкодить id
            .then((res) => {
                setState(res.data)
                return res.data[0].id  //берём id из ответа сервера т как state ещё не обновился
            })
            .then((id) => {
                todoListApi.updateTodolist(title, id)  //
            })
            .then(() => {
                return todoListApi.getTodoList()
            })
            .then((res) => {
                setState(res.data)
            })

    }, [])

    return <div>{JSON.stringify(state)}</div>
}

