import React from 'react'

const AddUser = () => {
    return (
        <div className="absolute p-[30px] m-auto max-w-max max-h-max bg-[rgba(17,25,40,0.9)] rounded-[10px] top-0 bottom-0 left-0 right-0">
            <form className="flex gap-5" action="">
                <input className="p-5 rounded-[10px] border-none outline-none" type="text" placeholder="Username" name="username" />
                <button className="p-5 rounded-[10px] bg-[#1a73e8] border-none">Search</button>
            </form>
            <div className="mt-[50px] flex items-center justify-between">
                <div className="flex items-center gap-5">
                    <img className="w-[50px] h-[50px] rounded-full object-cover" src="/avatar.png" alt="" />
                    <span>Jane Doe</span>
                </div>
                <button className="p-[10px] rounded-[10px] bg-[#1a73e8] border-none">Add User</button>
            </div>
        </div>
    )
}

export default AddUser
