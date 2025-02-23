import TodoListItem from "./TodoListItem";
import PropTypes from 'prop-types'

const TodoList = ({todoList, onRemoveTodo, sortBy, sortDirection}) =>{
    const sortedList = [...todoList].sort((a, b) => {
        if (sortBy === 'title') {
            return sortDirection === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
        } else {
            return sortDirection === 'asc' 
                ? new Date(a.createdTime) - new Date(b.createdTime) 
                : new Date(b.createdTime) - new Date(a.createdTime);
        }
    });    
    return (
        <>
            <ul>
                {sortedList.map((item) => (
                    <TodoListItem key={item.id} todo={item} onRemoveTodo={onRemoveTodo}/>
                ))}
            </ul>
        </>
    );
}

TodoList.propTypes = {
    todoList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
    sortBy: PropTypes.string.isRequired,
    sortDirection: PropTypes.string.isRequired
};

export default TodoList;