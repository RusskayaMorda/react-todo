import PropTypes from 'prop-types'
import { useState } from 'react';
import InputWithLabel from './InputWithLabel';

const AddTodoForm = (props) =>{
    const [todoTitle, setTodoTitle] = useState('');
    const [shouldFocus, setShouldFocus] = useState(true)

    const handleAddTodo = (event) => {
        event.preventDefault();
        const newTodo = {
            title: todoTitle,
            id: Date.now(),
        }
        props.onAddTodo(newTodo);
        setTodoTitle('');
        setShouldFocus(false)
        setTimeout(()=>setShouldFocus(true),0)
    }

        const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }
    return(
        <>
            <form onSubmit={handleAddTodo}>
                <InputWithLabel
                    id="todoTitle"
                    value = {todoTitle}
                    onChange={handleTitleChange}
                    shouldFocus={shouldFocus}
                >
                New task
                </InputWithLabel>
                
                <button type='submit'>Add</button>
            </form>
        </>
    )
}

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;