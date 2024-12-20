import TodoListItem from "./TodoListItem";
import PropTypes from 'prop-types'

const TodoList = (props) =>{
    return (
        <>
            <ul>
                {props.todoList.map((item) => (
                    <TodoListItem key={item.id} todo={item}/>
                ))}
            </ul>
        </>
    );
}

TodoList.propTypes = {
    todoList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default TodoList;