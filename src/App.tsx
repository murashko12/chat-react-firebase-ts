import List from "./components/List"
import Chat from "./components/Chat"
import Detail from "./components/Detail"

function App() {
  return (
    <div className="flex w-[90vw] h-[90vh] rounded-xl bg-[rgba(17,25,40,0.75)] backdrop-blur-xl saturate-150">
      <List/>
      <Chat/>
      <Detail/>
    </div>
  )
}

export default App
