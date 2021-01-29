import React from "react"
import TodoList from "./components/TodoList.jsx"
import AddTodoForm from "./components/AddTodoForm.jsx";

function App() {
    // state setter uses general name
    const [todolist, setTodoList] = React.useState([
        {id: 0, checked: false, title: 'help'},
        {id: 1, checked: false, title: 'item'}
    ])

    function checkboxEvent(id) {
        setTodoList(
            todolist.map(item => {
                if (item.id === id)
                    item.checked = !item.checked
                return item
            })
        )
    }

    function removeEvent(id) {
        setTodoList(
            // leaves only items where id != passed id
            todolist.filter(item => item.id !== id)
        )
    }

    function addEvent(title) {
        setTodoList(
            todolist.concat([{
                id: Date.now(),
                checked: false,
                title: title,
                description: 'default'
            }])
        )
    }

    return (
        <div className='list-container'>
            <h1>My to-do list for this week</h1>
            <div className='list-wrapper'>
                <AddTodoForm onAdd={addEvent}/>
                {todolist.length ? <TodoList arr={todolist} onCheck={checkboxEvent} onRemoveClick={removeEvent}/> : <p>You've got nothing to do!</p>}
            </div>
        </div>
    )
}

export default App
