import PropTypes from 'prop-types'
import { useState } from 'react';

const AddTodoForm = (props) =>{
    const [todoTitle, setTodoTitle] = useState('');

    const handleAddTodo = (event) => {
        event.preventDefault();
        const newTodo = {
            title: todoTitle,
            id: Date.now(),
        }
        props.onAddTodo(newTodo);
        setTodoTitle('');
    }

        const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }
    return(
        <>
            <form onSubmit={handleAddTodo}>
                <label htmlFor="TodoTitle">Title</label>
                <input type="text" id="TodoTitle" name="title" value={todoTitle} onChange={handleTitleChange}/>
                <button type="submit">Add</button>
            </form>
        </>
    )
}

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;