import { TfiMoreAlt } from "react-icons/tfi"
import { FaVideo } from "react-icons/fa6";
import { BiEdit } from "react-icons/bi";

const UserInfo = () => {
  return (
    <div className="flex p-5 items-center justify-between">
      <div className="flex items-center gap-5">
        <img className=" w-12 h-12 rounded-full object-cover" src="/avatar.png" alt="" />
        <h2 className=" font-bold text-xl">John Doe</h2>
      </div>
      <div className="flex gap-5 cursor-pointer">
        <TfiMoreAlt size={20} />
        <FaVideo size={20} />
        <BiEdit size={20} />
      </div>
    </div>
  )
}

export default UserInfo
