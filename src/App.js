import CardStats from "./components/CardStats"
import Navbar from "./components/Navbar"
import Board from "./components/Board"
import CardSelector from "./components/CardSelector"

function App() {
  return (
    <div>
      <Navbar />
      {/*Main board with card stats*/}
      <div className="flex items-center justify-center">
        <CardStats />
        <Board />
        <CardStats />
      </div>
      {/*Card Selectors*/}
      <div className="flex items-center justify-evenly">
        <CardSelector />
        <CardSelector />
      </div>
    </div>
    
  )
}

export default App
