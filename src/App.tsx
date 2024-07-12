import List from "./components/List"
import Chat from "./components/Chat"
import Detail from "./components/Detail"
import Login from "./components/Login"
import Notification from "./components/Notification"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./lib/firebase"


function App() {

  const user = false

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      console.log(user)
    })
    return () => {
      unSub()
    }
  }, [])

  return (
    <div className="flex w-[90vw] h-[90vh] rounded-xl bg-[rgba(17,25,40,0.75)] backdrop-blur-xl saturate-150">
      { user ? (
        <>
          <List/>
          <Chat/>
          <Detail/>
        </>
        ) : (
          <Login/>
        )}
      <Notification/>
    </div>
  )
}

export default App
