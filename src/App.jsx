import Cards from "./components/Cards/Cards"
import Header from "./components/Header/Header"
import SideBar from "./components/SideBar/SideBar"

function App() {

  return (
    <>
     {/* Header section */}
     <Header></Header>
     {/* Recipe card section */}
     <div className="flex flex-col md:flex-row w-11/12 mx-auto">
      <Cards></Cards>
      <SideBar></SideBar>
     </div>
    </>
  )
}

export default App
