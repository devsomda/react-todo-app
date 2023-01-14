import React, { useState } from 'react'

const List = React.memo(({
  id, title, completed, todoData, setTodoData, provided, snapshot
}) => {

  const [isEditing, setisEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title)

  const handleClick = (id) => {
    let newTodoData = todoData.filter(data => data.id !== id)
    console.log('newTodoData', newTodoData)
    // this.setState({todoData: newTodoData})
    setTodoData(newTodoData);
    localStorage.setItem('todoData', JSON.stringify(newTodoData))
  };

  const handleCompleteChange = (id) => {
    let completeTodo = todoData.map((data) => {
      if (data.id === id) {
        data.completed =! data.completed;
      }
      return data;
    });
    // this.setState({ todoData: completeTodo})
    setTodoData(completeTodo)
    localStorage.setItem('todoData', JSON.stringify(completeTodo))
  };  

  const handleEditChange = (event) => {
    setEditedTitle(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();

      let newTodoData = todoData.map(data => {
        if(data.id === id){
          data.title = editedTitle
        }
        return data;
      })
      setTodoData(newTodoData)
      localStorage.setItem('todoData', JSON.stringify(newTodoData))
      setisEditing(false)
  }

  // 수정 중일 때
  if(isEditing) {
    return(
    <div className={`flex items-center justify-between w-full px-4 py-1 my-2 bg-gray-100 text-gray-600 border rounded`}>
    <form onSubmit={handleSubmit}>
      <input
        value={editedTitle}
        onChange={handleEditChange}
        className="w-full px-3 py-2 mr-4 text-gray-500 rounded"
      />
    </form>
    <div className='items-center'>
      <button
        className='px-4 py-2 float-right'
        onClick={() => setisEditing(false)}>
        X
      </button>
      <button
        className='px-4 py-2 float-right'
        type='submit'  
        onClick={handleSubmit}
      >
        save
      </button>
    </div>
  </div>
    )
  
    // 수정중이 아닐 때
  } else {
      return (
    <div
      key={id}
      {...provided.draggableProps}
      ref={provided.innerRef}
      {...provided.dragHandleProps}
      className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
    >
    <input type="checkbox"
      onChange={() => handleCompleteChange(id)} 
      defaultChecked={completed}/>{" "}
    <span
      className={completed ? "line-through" : undefined}>
      {title}
    </span>
    <div className='items-center'>
      <button
        className='px-4 py-2 float-right'
        onClick={() => handleClick(id)}>
        X
      </button>
      <button
        className='px-4 py-2 float-right'
        onClick={() => setisEditing(true)}>
        edit
      </button>
    </div>
  </div>
)

  }

})

export default List