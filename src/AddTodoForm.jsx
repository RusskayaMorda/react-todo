import PropTypes from 'prop-types'

const AddTodoForm = (props) =>{
    const handleAddTodo = (event) => {
        event.preventDefault();
        const todoTitle = event.target.elements.title.value;
        props.onAddTodo(todoTitle);
        event.target.reset();
    }
    return(
        <>
            <form onSubmit={handleAddTodo}>
                <label htmlFor="TodoTitle">Title</label>
                <input type="text" id="TodoTitle" name="title"/>
                <button type="submit">Add</button>
            </form>
        </>
    )
}

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;