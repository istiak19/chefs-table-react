import { useEffect } from "react";
import PropTypes from 'prop-types';
import { useState } from "react";
import Recipe from "./Recipe";

const Cards = ({ handleWantToCook }) => {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <h2>Cards: {recipes.length}</h2>
            <div className='grid grid-cols-2 gap-6'>
                {
                    recipes.map(recipe => <Recipe
                        key={recipe.id}
                        recipe={recipe}
                        handleWantToCook={handleWantToCook}
                    ></Recipe>)
                }
            </div>
        </div>
    );
};

Cards.propTypes = {
    handleWantToCook: PropTypes.func
}

export default Cards;