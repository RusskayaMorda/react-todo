import PropTypes from 'prop-types'

const TodoListItem = ({todo, onRemoveTodo}) => {
    return(
        <li>{todo.title}{""} <button type='button' onClick={() => onRemoveTodo(todo.id)}>remove</button></li>
    )
}

TodoListItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoListItem