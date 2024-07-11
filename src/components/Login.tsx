import React, { useState } from 'react'

interface IAvater {
    file: null | File;
    url: string
}

const Login = () => {

    const [avatar, setAvatar] = useState<IAvater>({
        file: null,
        url: ""
    })

    const handleAvatar: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.target.files?.[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })    
        }
    }

    const handleLogin: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
    }

    return (
        <div className="w-full h-full flex items-center gap-[100px]">

            <div className="flex-1 flex flex-col items-center gap-5">
                <h2 className="text-2xl font-bold">Welcome back,</h2>
                <form className="flex flex-col items-center justify-center gap-5" onSubmit={handleLogin}>
                    <input className="p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] rounded-xl" type="text" placeholder="Email" name="email" />
                    <input className="p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] rounded-xl" type="password" placeholder="Password" name="password" />
                    <button className="w-full p-5 bg-[#1F8EF1] rounded-[5px]">Sign In</button>
                </form>
            </div>

            <div className="h-5/6 w-[2px] bg-slate-600"></div>

            <div className="flex-1 flex flex-col items-center gap-5">
                <h2 className="text-2xl font-bold">Create an Account</h2>
                <form className="flex flex-col items-center justify-center gap-5">
                    <label className="w-full flex items-center justify-between cursor-pointer underline" htmlFor="file">
                        <img className="w-[50px] h-[50px] rounded-[10px] object-cover" src={avatar.url || '/avatar.png'} alt="" />
                        Upload an Image
                    </label>
                    <input className="p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] rounded-xl" type="file" id="file" style={{display: "none"}} onChange={handleAvatar}/>
                    <input className="p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] rounded-xl" type="text" placeholder="Username" name="username" />
                    <input className="p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] rounded-xl" type="text" placeholder="Email" name="email" />
                    <input className="p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] rounded-xl" type="password" placeholder="Password" name="password" />
                    <button className="w-full p-5 bg-[#1F8EF1] rounded-[5px]">Sign Un</button>
                </form>
            </div>

        </div>
    )
}

export default Login
