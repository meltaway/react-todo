import React, {useState} from "react"
import InputBase from '@material-ui/core/InputBase'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

const styles = {
    form: {
        marginRight: 150,
        marginBottom: 5,
        display: 'flex',
        alignItems: 'center'
    },
    add: {
        background: '#ff5722',
        borderRadius: 6,
        color: '#ffffff',
        border: '1px solid #bf360c',
        fontSize: 16,
        padding: 5,
        marginLeft: 10,
        opacity: '90%'
    },
    input: {
        backgroundColor: '#fafafa',
        opacity: '90%',
        color: '#212121',
        fontSize: 16,
        border: '2px solid #ff5722',
        borderColor: '#ff5722',
        borderRadius: 8,
        padding: 9
    }
}

// custom hook to bypass html
function useInputValue(def = '') {
    // default value state in input
    const [value, setValue] = useState(def)

    return {
        bind: {
            value,
            onChange: e => setValue(e.target.value)
        },
        clearInput: () => setValue(''),
        getValue: () => value
    }
}

function AddTodoForm({onAdd}) {
    const input = useInputValue('')

    function submitHandler(e) {
        e.preventDefault() // prevent page from reloading

        if (input.getValue().trim().length !== 0) {
            // call add event and set input to empty again
            onAdd(input.getValue())
            input.clearInput()
        }
    }

    return (
        <form style={styles.form} onSubmit={submitHandler} noValidate autoComplete='off'>
            {/*spread elems of obj into html attributes*/}
            <InputBase placeholder="Title" multiline variant="filled"
                       {...input.bind} style={styles.input}/>
            <Button variant="contained" color="primary" type='submit' style={styles.add}>Add</Button>
        </form>
    )
}

AddTodoForm.propTypes = {
    onAdd: PropTypes.func.isRequired,
}

export default AddTodoForm