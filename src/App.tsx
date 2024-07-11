import List from "./components/List"
import Chat from "./components/Chat"
import Detail from "./components/Detail"
import Login from "./components/Login"
import Notification from "./components/Notification"


function App() {

  const user = true

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
