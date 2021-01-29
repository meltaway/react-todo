import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types'

const styles = {
    li: {
        background: '#f0f0f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        padding: '8px 16px',
        border: '2px solid #cccccc',
        boxShadow: '2px 2px 3px #455a64',
        borderRadius: 10
    },
    input: {
        marginRight: 16,
        color: '#ff5722'
    },
    title: {
        verticalAlign: 'middle'
    },
    // description: {
    //     marginLeft: 8,
    //     opacity: '50%',
    //     verticalAlign: 'middle'
    // },
    remove: {
        background: '#ff4247',
        borderRadius: 6,
        color: '#ffffff',
        border: "none",
        // fontSize: 20,
        padding: 0,
        minWidth: 35,
        opacity: '90%'
    },
    icon: {
        width: 20,
        height: 20,
        padding: 5
    }
}

function Todo(props) {
    const classes = []
    if (props.content.checked) classes.push('completed')

    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <Checkbox
                    checked={props.content.checked}
                    onChange={() => props.onChange(props.content.id)}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    style={styles.input}
                />
                <strong style={styles.title}>{ props.content.title }</strong>
                {/*<span style={styles.description}>{ props.content.description }</span>*/}
            </span>
            <Button variant="contained" style={styles.remove}
                    onClick={props.onRemove.bind(null, props.content.id)}>
                <DeleteIcon style={styles.icon}/>
            </Button>
        </li>
    )
}

Todo.propTypes = {
    content: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
}

export default Todo