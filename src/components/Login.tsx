import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { auth, db } from '../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import upload from '../lib/upload';

interface IAvater {
    file: null | File;
    url: string
}

const Login = () => {

    const [loading, setLoading] = useState<boolean>(false)

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

    const handleRegister: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData(e.currentTarget as HTMLFormElement)
        const { username, email, password } = Object.fromEntries(formData) 
        
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)

            const imgUrl = await upload(avatar.file)

            await setDoc(doc(db, "users", res.user.uid), {
                username,
                email,
                avatar: imgUrl,
                id: res.user.uid,
                blocked: []
            })

            await setDoc(doc(db, "userchats", res.user.uid), {
                chats: []
            })

            toast.success("Account created! You can login now!")
        } catch (err) {
            console.log(err);
            if (err instanceof Error) {
              toast.error(err.message);
            } else {
              toast.error("An unknown error occurred.");
            }
        } finally {
            setLoading(false)
        }
    }

    const handleLogin: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData(e.currentTarget as HTMLFormElement)
        const { email, password } = Object.fromEntries(formData)
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (err) {
            console.log(err);
            if (err instanceof Error) {
              toast.error(err.message);
            } else {
              toast.error("An unknown error occurred.");
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="w-full h-full flex items-center gap-[100px]">

            <div className="flex-1 flex flex-col items-center gap-5">
                <h2 className="text-2xl font-bold">Welcome back,</h2>
                <form className="flex flex-col items-center justify-center gap-5" onSubmit={handleLogin}>
                    <input className="p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] rounded-xl" type="text" placeholder="Email" name="email" />
                    <input className="p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] rounded-xl" type="password" placeholder="Password" name="password" />
                    <button disabled={loading} className="w-full p-5 bg-[#1F8EF1] rounded-[5px] disabled:cursor-not-allowed disabled:bg-[#1F8FF19C]">
                        {loading ? "Loading..." : "Sign In"}
                    </button>
                </form>
            </div>

            <div className="h-5/6 w-[2px] bg-slate-600"></div>

            <div className="flex-1 flex flex-col items-center gap-5">
                <h2 className="text-2xl font-bold">Create an Account</h2>
                <form onSubmit={handleRegister} className="flex flex-col items-center justify-center gap-5">
                    <label className="w-full flex items-center justify-between cursor-pointer underline" htmlFor="file">
                        <img className="w-[50px] h-[50px] rounded-[10px] object-cover" src={avatar.url || '/avatar.png'} alt="" />
                        Upload an Image
                    </label>
                    <input className="p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] rounded-xl" type="file" id="file" style={{display: "none"}} onChange={handleAvatar}/>
                    <input className="p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] rounded-xl" type="text" placeholder="Username" name="username" />
                    <input className="p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] rounded-xl" type="text" placeholder="Email" name="email" />
                    <input className="p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] rounded-xl" type="password" placeholder="Password" name="password" />
                    <button disabled={loading} className="w-full p-5 bg-[#1F8EF1] rounded-[5px] disabled:cursor-not-allowed disabled:bg-[#1F8FF19C]">
                        {loading ? "Loading..." : "Sign Un"}
                    </button>
                </form>
            </div>

        </div>
    )
}

export default Login
