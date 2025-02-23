import PropTypes from 'prop-types'
import style from './TodoListItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const TodoListItem = ({todo, onRemoveTodo}) => {
    return(
        <li className={style.ListItem}>{todo.title}{""} <button type='button' className="trashButton" onClick={() => onRemoveTodo(todo.id)}><FontAwesomeIcon icon={faTrash} /></button></li>
    )
}

TodoListItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoListItem