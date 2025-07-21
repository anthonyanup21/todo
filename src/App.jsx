import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { IoSend } from "react-icons/io5";

const App = () => {


  const [todos, settodos] = useState([]);//list of all todos
  const [formdata, setformdata] = useState("");//single todo

  const submit = (e) => {
    e.preventDefault();

    if (formdata.trim().length==0) return //return if teh todo is empty

    const newtodo={
      id:Date.now(),//unique id to a todo
      data:formdata,//todo
      complete:false//is todo completed
    }
    settodos([...todos, newtodo]);//add new todo to todos list
    setformdata("");//clear the form data
  };



  const delete_todo=(id)=>{
    const filtred_todos=todos.filter((data)=>data.id!=id) //aflter the todo by id

    settodos(filtred_todos)

  }


  const togglecheckbox=(id)=>{
    const update=todos.map((todo)=>todo.id==id?{...todo,complete:!todo.complete}:todo)
    settodos(update)



  }
  return (
    <div>
      <div className="flex justify-center text-9xl font-bold opacity-30 mt-30">
        ToDoS
      </div>

      <div className="flex justify-center mt-20 ">
        <form onSubmit={submit}>
          <div className="relative" >
            <input
              type="text"
              value={formdata}
              onChange={(e) => setformdata(e.target.value)}
              className="w-[800px] h-[60px] rounded-3xl text-2xl p-5 shadow-[0_4px_15px_rgba(0,0,0,0.5)] pl-8 pr-13"
              placeholder="Add Todo....."
            />
            <button type="submit">
              <IoSend
                size={40}
                className="absolute top-0 left-187 mt-2 hover:opacity-50"
              />
            </button>
          </div>
        </form>
      </div>

      <div className="flex justify-center mt-10 overflow-auto h-[450px]">
        <div>
          {todos.map((data) => (
            <div className="relative" >
              <input
                type="text"
                className={`w-[780px] h-[60px]  text-3xl px-10  ${data.complete ? "text-decoration-line: line-through":""}`}
                value={data.data}
                disabled
              />
              <button onClick={()=>{delete_todo(data.id)}}>
                 <MdDelete
                size={37}
                className="absolute top-0 left-189 mt-2 hover:opacity-50"
                
              />
                
              </button>
             
              <input
                type="checkbox"
                className=" absolute top-0 left-0 w-5 h-5 mt-5 "
                onClick={()=>togglecheckbox(data.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
