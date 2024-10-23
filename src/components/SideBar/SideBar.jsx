import PropTypes from 'prop-types';
import Side from './Side';

const SideBar = ({ wantToCook, handlePrepareCook, prepareCook, handleCalculate, calories, times }) => {
    return (
        <div className="md:w-1/3 border-2 rounded-lg mt-6 p-5">
            {/* Want to cook */}
            <div>
                <h2 className="text-center text-2xl font-semibold">Want to cook: {wantToCook.length}</h2>
                <hr className="my-3" />
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                wantToCook.map(cook => (
                                    <tr key={cook.recipe_id} className="hover">
                                        <td>{cook.recipe_name}</td>
                                        <td>{cook.preparing_time}</td>
                                        <td>{cook.calories}</td>
                                        <td>
                                            <button onClick={() => {
                                                handlePrepareCook(cook)
                                                handleCalculate(cook.preparing_time, cook.calories)
                                            }
                                            } className='btn bg-green-500 rounded-3xl font-medium'>
                                                Preparing
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Currently cooking */}
            <div>
                <h2 className="text-center text-2xl font-semibold">Currently cooking: {prepareCook.length}</h2>
                <hr className="my-3" />
                <Side prepareCook={prepareCook} times={times} calories={calories}></Side>
            </div>
        </div>
    );
};

SideBar.propTypes = {
    wantToCook: PropTypes.array.isRequired,
    prepareCook: PropTypes.array.isRequired,
    handlePrepareCook: PropTypes.func,
    handleCalculate: PropTypes.func,
    times: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired
}

export default SideBar;
