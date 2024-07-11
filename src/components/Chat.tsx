import { FaPhoneAlt } from "react-icons/fa";
import { FaVideo } from "react-icons/fa6"
import { IoMdInformationCircle } from "react-icons/io";
import { RiEmojiStickerLine } from "react-icons/ri";
import { IoCamera } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { IoImage } from "react-icons/io5";
import EmojiPicker from 'emoji-picker-react'
import { useEffect, useRef, useState } from "react";

const Chat = () => {

    const [openEmoji, setOpenEmoji] = useState<boolean>(false)
    const [text, setText] = useState<string>("")

    const endRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        endRef.current?.scrollIntoView({behavior: "smooth"})
    }, [])

    const handleEmoji = (e: { emoji: string }) => {
        setText((prev) => prev + e.emoji)
        setOpenEmoji(false)
    }

    return (
        <div className="flex-[2] h-full border-x-2 border-x-slate-600 flex flex-col">
            <div className="flex  p-5 items-center justify-between border-b-2 border-b-slate-600">
                <div className="flex items-center">
                    <img src="/avatar.png" alt="" className="w-[60px] h-[60px] rounded-full object-cover" />
                    <div className="ml-5">
                        <span className="text-[18px] font-bold">Jane Doe</span>
                        <p className="text-[14px] font-light text-gray-300">aasdasdasd aasdasdasd aasdasdasd aasdasdasd </p>
                    </div>
                </div>
                <div className="flex gap-5 items-center">
                    <FaPhoneAlt size={16} />
                    <FaVideo size={20} />
                    <IoMdInformationCircle size={20} />
                </div>
            </div>

            <div className="p-5 flex-1 overflow-scroll flex flex-col gap-5">

                <div className=" max-w-[70%] flex gap-5">
                    <img className="h-[30px] w-[30px] rounded-full object-cover" src="/avatar.png" alt="" />
                    <div className="flex-1 flex flex-col gap-1">
                        <p className="bg-[rgba(17,25,40,0.3)] p-3 rounded-xl">
                            fa;fjsdfsf  jskhslkgnlk brjsbaks wejrke knlwjenlwnrlwnr wenrwlrn
                        </p>
                        <span className="text-xs">1 min ago</span>
                    </div>
                </div>

                <div className=" max-w-[70%] flex flex-col gap-2 self-end">
                    <img className="h-300px w-full rounded-[10px] object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9W9vwDNn5X7zAVeDHXgUKo0nBy0pqCaDcw&s" alt="" />
                    <div className="flex-1 flex flex-col gap-1">
                        <p className="bg-blue-600 p-3 rounded-xl">
                            fa;fjsdfsf  jskhslkgnlk brjsbaks wejrke knlwjenlwnrlwnr wenrwlrn
                            
                        </p>
                        <span className="text-xs">1 min ago</span>
                    </div>
                </div>

                <div className=" max-w-[70%] flex gap-3">
                    <img className="h-[30px] w-[30px] rounded-full object-cover" src="/avatar.png" alt="" />
                    <div className="flex-1 flex flex-col gap-1">
                        <p className="bg-[rgba(17,25,40,0.3)] p-3 rounded-xl">
                            fa;fjsdfsf  jskhslkgnlk brjsbaks wejrke knlwjenlwnrlwnr wenrwlrn     
                        </p>
                        <span className="text-xs">1 min ago</span>
                    </div>
                </div>

                <div className=" max-w-[70%] flex gap-5 self-end">
                    <div className="flex-1 flex flex-col gap-1">
                        <p className="bg-blue-600 p-3 rounded-xl">
                            fa;fjsdfsf  jskhslkgnlk brjsbaks wejrke knlwjenlwnrlwnr wenrwlrn
                        </p>
                        <span className="text-xs">1 min ago</span>
                    </div>
                </div>

                <div ref={endRef}></div>
            </div>

            <div className="p-5 flex items-center justify-between border-t-2 gap-5 border-t-slate-600">
                <div className="flex items-center gap-3">
                    <IoImage className="cursor-pointer hover:text-blue-300" size={25} />
                    <IoCamera className="cursor-pointer hover:text-blue-300" size={25} />
                    <FaMicrophone className="cursor-pointer hover:text-blue-300" size={25} />
                </div>
                <input 
                    className="flex-1 bg-[rgba(17,25,40,0.5)] px-5 py-[10px] rounded-[10px] text-[16px] border-none outline-none text-white" 
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    type="text" 
                    placeholder="Type a message..." 
                />
                <div className=" relative">
                    <RiEmojiStickerLine onClick={() => setOpenEmoji((prev) => !prev)} className="cursor-pointer hover:text-blue-300" size={25}/>
                    <div className="absolute bottom-10 left-0">
                        <EmojiPicker open={openEmoji} onEmojiClick={handleEmoji}/>
                    </div>
                </div>
                <button className="px-5 py-[10px] bg-blue-600 rounded-md">Send</button>
            </div>
        </div>
    )
}

export default Chat
