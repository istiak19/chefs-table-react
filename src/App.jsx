import { useState } from "react"
import Cards from "./components/Cards/Cards"
import Header from "./components/Header/Header"
import SideBar from "./components/SideBar/SideBar"

function App() {

  const [wantToCook, SetWantToCook] = useState([])
  const [prepareCook, setPrepareCook] = useState([])
  const [times, setTimes] = useState(0)
  const [calories, setCalories] = useState(0)
  const handleCalculate = (time, calorie) => {
    setTimes(time + times)
    setCalories(calorie + calories)
  }

  const handleWantToCook = (recipe) => {
    const isExist = wantToCook.find(pRecipe => pRecipe.recipe_id === recipe.recipe_id)
    if (!isExist) {
      SetWantToCook([...wantToCook, recipe])
    }
    else {
      alert('Recipe Already Exist ! 😊')
    }
  }

  const handlePrepareCook = (cooks) => {
    const updateWantToCook = wantToCook.filter(cook => cook.recipe_id !== cooks.recipe_id)
    SetWantToCook(updateWantToCook)
    const readyRecipe = prepareCook.find(prepare => prepare.recipe_id === cooks.recipe_id)

    if (!readyRecipe) {
      setPrepareCook([...prepareCook, cooks])
    } else {
      alert('Recipe is already in the prepare list! 😊')
    }
  }

  return (
    <>
      {/* Header section */}
      <Header></Header>
      {/* Recipe card section */}
      <div className="flex flex-col md:flex-row w-11/12 mx-auto gap-5">
        <Cards handleWantToCook={handleWantToCook}></Cards>
        <SideBar wantToCook={wantToCook}
          times={times}
          calories={calories}
          prepareCook={prepareCook}
          handleCalculate={handleCalculate}
          handlePrepareCook={handlePrepareCook}
        ></SideBar>
      </div>
    </>
  )
}

export default App
