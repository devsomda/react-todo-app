import React,{ useState } from "react";
import "./App.css";
import Lists from "./components/Lists";
import Form from "./components/Form";


const initialTodoData = localStorage.getItem("todoData") ? JSON.parse(localStorage.getItem("todoData")): [];

function App() {

  const [todoData, setTodoData] = useState(initialTodoData);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    // form안에서 input 전송 시 페이지 리로드를 방지
    e.preventDefault();

    // 새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    // 원래 할 일에 새로운 할 일 더해주기
    // this.setState({todoData: [...todoData, newTodo], value: ""})
    setTodoData(prev => [...prev, newTodo]);
    localStorage.setItem('todoData', JSON.stringify([...todoData, newTodo]))
    setValue("");
  }

  const handleRemoveClick = () => {
    setTodoData([])
    localStorage.setItem('todoData', JSON.stringify([]))
  }


    return(
      <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
        <div className="w-full p-6 m-4 bg-white rounded shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg">

          <div className="flex justify-between mb-3">
            <h1>할 일 목록</h1>
            <button onClick={handleRemoveClick}>
              Delete Alll
            </button>
          </div>

          <Lists todoData={todoData} setTodoData={setTodoData}/>
          <Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>

        </div>
      </div>
    )
  }

export default App