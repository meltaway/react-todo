import React from "react"
import TodoList from "./components/TodoList"

function App() {
    const [todolist, setChecked] = React.useState([
        {id: 0, checked: false, title: 'help', description: 'i need help'},
        {id: 1, checked: false, title: 'item', description: 'aaaaaaaa'}
    ])

    function checkboxEvent(id) {
        setChecked(
            todolist.map(item => {
                if (item.id === id)
                    item.checked = !item.checked
                return item
            })
        )
    }

    return (
        <div className="list-wrapper">
            <h1>My to-do list for this week</h1>
            <TodoList arr={todolist} onToggle={checkboxEvent}/>
        </div>
    )
}

export default App
