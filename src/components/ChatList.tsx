import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { LuPlus, LuMinus } from "react-icons/lu";

const ChatList = () => {

  const [addMode, setAddMode] = useState<boolean>(false);
  
  return (
    <div className="flex-1 overflow-scroll">
      <div className="flex items-center p-5 gap-5">
        <div className="flex flex-1 items-center gap-5 p-[10px] rounded-[10px] bg-[rgba(17,25,40,0.5)]">
          <IoSearch size={20}/>
          <input type="text" placeholder="Search" className=" bg-transparent border-none outline-none text-white flex-1" />
        </div> 
        <div 
          className="cursor-pointer"
          onClick={() => setAddMode((prev) => !prev)}
        >
          {
            addMode 
            ? 
            <LuPlus size={44} className="bg-[rgba(17,25,40,0.5)] p-[10px] rounded-[10px]"/>
            :
            <LuMinus size={44} className="bg-[rgba(17,25,40,0.5)] p-[10px] rounded-[10px]"/>
          }
        </div>
      </div>
      <div className="flex items-center gap-5 p-5 cursor-pointer border-b-2 border-b-slate-600 ">
        <img className=" w-12 h-12 rounded-full object-cover" src="/avatar.png" alt="" />
        <div className="flex flex-col gap-[10px]">
          <span className="font-medium">Jane Doe</span>
            <p className="text-[14px] font-light">Hello</p>
        </div>
      </div>
      <div className="flex items-center gap-5 p-5 cursor-pointer border-b-2 border-b-slate-600 ">
        <img className=" w-12 h-12 rounded-full object-cover" src="/avatar.png" alt="" />
        <div className="flex flex-col gap-[10px]">
        <span className="font-medium ">Jane Doe</span>
          <p className="text-[14px] font-light">Hello</p>
        </div>
      </div>
      <div className="flex items-center gap-5 p-5 cursor-pointer border-b-2 border-b-slate-600 ">
        <img className=" w-12 h-12 rounded-full object-cover" src="/avatar.png" alt="" />
        <div className="flex flex-col gap-[10px]">
        <span className="font-medium">Jane Doe</span>
          <p className="text-[14px] font-light">Hello</p>
        </div>
      </div>
    </div>
  )
}

export default ChatList
