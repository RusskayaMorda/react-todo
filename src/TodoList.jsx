import TodoListItem from "./TodoListItem";
import PropTypes from 'prop-types'

const toDoList = [
  {id: 1, title: 'submit assignment'},
  {id: 2, title: 'submit chapter'},
  {id: 3, title: 'pass the exam'}
];

const TodoList = () =>{
    return (
        <>
            <ul>
                {toDoList.map((item) => (
                    <TodoListItem key={item.id} todo={item}/>
                ))}
            </ul>
        </>
    );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default TodoList;