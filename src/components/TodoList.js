import React from 'react'
import PropTypes from 'prop-types'
import Todo from "./Todo"

const styles = {
    ul: {
        listStyle: "none",
        margin: 0,
        padding: 0,
        marginRight: '150px',
        marginTop: '15px',
        width: '600px'
    }
}

function TodoList(props) {
    return (
        <ul style={styles.ul}>
            {
                // foreach doesn't work
                props.arr.map(item => {
                    return <Todo key={ item.id } content={ item } onChange={ props.onToggle }/>
                })
            }
        </ul>
    )
}

// validate types of props passed to components
// TodoList.propTypes = {
//     arr: PropTypes.arrayOf(PropTypes.object).isRequired
//     onToggle: PropTypes.func.isRequired
// }

export default TodoList