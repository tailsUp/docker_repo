/* eslint-disable react/prop-types */
const Todo = ({ todo }) => {
    return(
      <>
        <span className='todo-text' id={todo.id}>
          {todo.text}
        </span>
      </>
    )
  }
  
  export default Todo
