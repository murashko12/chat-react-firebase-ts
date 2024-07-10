import { FiDownload } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Detail = () => {
    return (
        <div className="flex-1">
            <div className="py-[30px] px-5 flex flex-col items-center gap-5 border-b-gray-500 border-b-2">
                <img src="/avatar.png" alt="" className="w-[100px] h-[100px] rounded-full object-cover" />
                <h2>John Doe</h2>
                <p>afsas afasf wer sdff s as</p>
            </div>
            <div className="p-5 flex flex-col gap-[30px] overflow-scroll">

                <div className="">
                    <div className="flex items-center justify-between">
                        <span className="font-semibold text-[14px]">Chat Settings</span>
                        <IoIosArrowUp size={30} className="bg-[rgba(17,25,40,0.3)] p-[6px] rounded-full cursor-pointer"/>
                    </div>
                </div>

                <div className="">
                    <div className="flex items-center justify-between">
                        <span className="font-semibold text-[14px]">Privacy & help</span>
                        <IoIosArrowUp size={30} className="bg-[rgba(17,25,40,0.3)] p-[6px] rounded-full cursor-pointer"/>
                    </div>
                </div>

                <div className="">
                    <div className="flex items-center justify-between">
                        <span className="font-semibold text-[14px]">Shared  Photos</span>
                        <IoIosArrowDown size={30} className="bg-[rgba(17,25,40,0.3)] p-[6px] rounded-full cursor-pointer" />
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-5">
                                <img className="w-10 h-10 rounded-md object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9W9vwDNn5X7zAVeDHXgUKo0nBy0pqCaDcw&s" alt="" />
                                <span>photo_name_2020.png</span>
                            </div>
                            <FiDownload size={30} className="bg-[rgba(17,25,40,0.3)] p-[6px] rounded-full cursor-pointer" />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-5">
                                <img className="w-10 h-10 rounded-md object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9W9vwDNn5X7zAVeDHXgUKo0nBy0pqCaDcw&s" alt="" />
                                <span>photo_name_2020.png</span>
                            </div>
                            <FiDownload size={30} className="bg-[rgba(17,25,40,0.3)] p-[6px] rounded-full cursor-pointer" />
                        </div>
                        
                        
                    </div>
                </div>

                <div className="">
                    <div className="flex items-center justify-between">
                        <span className="">Shared Files</span>
                        <div className="flex items-center justify-center bg-[rgba(17,25,40,0.3)] p-[6px] rounded-full cursor-pointer">
                            <IoIosArrowUp size={20} />
                        </div>
                    </div>
                </div>

                <button className="py-[10px] px-[20px] bg-[rgba(230,74,105,0.533)] rounded-md hover:bg-[rgba(220,20,60,0.796)]">Block User</button>                
            </div>
        </div>
    )
}

export default Detail
