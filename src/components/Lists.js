import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import List from './List.js'




const Lists = React.memo(({todoData, setTodoData}) => {

  // 드래그 행동이 끝났을 때
  const handleEnd = (result) => {
  // console.log(result);
  if(!result.destination) return;

  const newTodoData = todoData;

  // 1. 변경시키는 아이템을 배열에서 삭제
  // 2. Return값으로 지워진 아이템을 잡고
  const [reorderedItem] = newTodoData.splice(result.source.index, 1);

  // 3. 원하는 자리에 reorderItem을 insert함.
  newTodoData.splice(result.destination.index, 0, reorderedItem);
  setTodoData(newTodoData)
  localStorage.setItem('todoData', JSON.stringify(newTodoData))

  }
  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId='to-dos'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}
                  >
                    {(provided, snapshot) => (
                      <List
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        completed={data.completed}
                        todoData={todoData}
                        setTodoData={setTodoData}
                        provided={provided}
                        snapshot={snapshot}
                      />
                    )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>   
          )}
        </Droppable>
      </DragDropContext>
    </div>   


  )
});

export default Lists

