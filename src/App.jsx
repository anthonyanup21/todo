import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { IoSend } from "react-icons/io5";



const App = () => {

  const [todos, settodos] = useState([])
  return (
    <div>

      <div className='flex justify-center text-9xl font-bold opacity-30 mt-30'>
        ToDoS

      </div>


      <div className='flex justify-center mt-20 '>
        <div className='relative'>
          <input type="text" className='w-[800px] h-[60px] rounded-3xl text-2xl p-5 shadow-[0_4px_15px_rgba(0,0,0,0.5)] pl-8 pr-13' placeholder='Add Todo.....' />
          <IoSend size={40} className='absolute top-0 left-187 mt-2 hover:opacity-50' />

        </div>




      </div>


      <div className='flex justify-center mt-10 '>
        <div className='relative'>
          <input type="text" className=' w-[780px] h-[60px]  text-3xl px-10 ' value="hello wrold" disabled />
          <MdDelete size={43} className='absolute top-0 left-189 mt-2 hover:opacity-50' />
          <input type="checkbox" className=' absolute top-0 left-0 w-5 h-5 mt-5 ' />
        </div>
      </div>

    </div>
  )
}

export default App