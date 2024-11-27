import PropTypes from 'prop-types'

const TodoListItem = (props) => {
    return(
        <li>{props.todo.title}</li>
    )
}

TodoListItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default TodoListItem