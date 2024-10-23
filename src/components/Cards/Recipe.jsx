import PropTypes from 'prop-types';

const Recipe = ({ recipe,handleWantToCook }) => {
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipe
    return (
        <div>
            <div className="border-2 rounded-lg p-6 space-y-4">
                <figure className='h-52'>
                    <img
                        src={recipe_image}
                        alt="Recipe Food"
                        className="rounded-xl w-full h-full" />
                </figure>
                <h2>{recipe_name}</h2>
                <p className='text-xs text-gray-400 border-b-2 pb-3'>{short_description}</p>
                <p className='font-semibold'>Ingredients: {ingredients.length}</p>
                <p className='border-b-2 pb-3 ml-3'>
                        {
                            ingredients.map((ingredient, idx) => <li className=' list-disc text-xs text-gray-400' key={idx}>{ingredient}</li>)
                        }
                </p>
                <div className='flex gap-4'>
                    <p><span><i className="fa-regular fa-clock mr-2"></i>{preparing_time} minutes</span></p>
                    <p><span><i className="fa-solid fa-cookie mr-2"></i>{calories} calories</span></p>
                </div>
                <button onClick={()=>handleWantToCook(recipe)} className='btn bg-green-500 rounded-3xl font-medium'>Want to Cook</button>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleWantToCook:PropTypes.func
};

export default Recipe;