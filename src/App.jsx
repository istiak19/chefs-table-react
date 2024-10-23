import { useState } from "react"
import Cards from "./components/Cards/Cards"
import Header from "./components/Header/Header"
import SideBar from "./components/SideBar/SideBar"

function App() {

  const [wantToCook, SetWantToCook] = useState([])

  const handleWantToCook = (recipe) => {
    const isExist=wantToCook.find(pRecipe=>pRecipe.recipe_id===recipe.recipe_id)
    if(!isExist){
      SetWantToCook([...wantToCook,recipe])
    }
    else{
      alert('Recipe Already Exist ! 😊')
    }
  }

  return (
    <>
      {/* Header section */}
      <Header></Header>
      {/* Recipe card section */}
      <div className="flex flex-col md:flex-row w-11/12 mx-auto gap-5">
        <Cards handleWantToCook={handleWantToCook}></Cards>
        <SideBar wantToCook={wantToCook}></SideBar>
      </div>
    </>
  )
}

export default App
