// import React from 'react'
// import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

// export default function Lists({todoData, setTodoData}) {

//   const handleClick = (id) => {
//     let newTodoData = todoData.filter(data => data.id !== id)
//     console.log('newTodoData', newTodoData)
//     // this.setState({todoData: newTodoData})
//     setTodoData(newTodoData);
//   };

//   const handleCompleteChange = (id) => {
//     let completeTodo = todoData.map((data) => {
//       if (data.id === id) {
//         data.completed =! data.completed;
//       }
//       return data;
//     });
//     // this.setState({ todoData: completeTodo})
//     setTodoData(completeTodo)
//   };

//   // 드래그 행동이 끝났을 때
//   const handleEnd = (result) => {
//     // console.log(result);
//     if(!result.destination) return;

//     const newTodoData = todoData;

//     // 1. 변경시키는 아이템을 배열에서 삭제
//     // 2. Return값으로 지워진 아이템을 잡고
//     const [reorderedItem] = newTodoData.splice(result.source.index, 1);

//     // 3. 원하는 자리에 reorderItem을 insert함.
//     newTodoData.splice(result.destination.index, 0, reorderedItem);
//     setTodoData(newTodoData)
//   }

//   return (
//     <div>
//       <DragDropContext onDragEnd={handleEnd}>
//         <Droppable droppableId='to-dos'>
//           {(provided) => (
//             <div {...provided.droppableProps} ref={provided.innerRef}>
//               {todoData.map((data, index) => (
//                 <Draggable
//                   key={data.id}
//                   draggableId={data.id.toString()}
//                   index={index}
//                   >
//                     {(provided, snapshot) => (
//                       <div
//                         key={data.id}
//                         {...provided.draggableProps}
//                         ref={provided.innerRef}
//                         {...provided.dragHandleProps}
//                         className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
//                       >
//                         <input type="checkbox"
//                           onChange={() => handleCompleteChange(data.id)} 
//                           defaultChecked={data.completed}/>{" "}
//                         <span
//                           className={data.completed ? "line-through" : undefined}>
//                           {data.title}
//                         </span>
//                         <div className='items-center'>
//                           <button
//                             className='px-4 py-2 float-right'
//                             onClick={() => handleClick(data.id)}>
//                           X
//                           </button>
//                         </div>
//                       </div>
//                     )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </div>   
//           )}
//         </Droppable>
//       </DragDropContext>
//     </div>     
//   )
// }
