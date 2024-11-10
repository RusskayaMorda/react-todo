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
                <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </>
    );
}

export default TodoList;