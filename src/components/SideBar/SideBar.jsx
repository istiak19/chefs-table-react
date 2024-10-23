import PropTypes from 'prop-types';
import Side from './Side';

const SideBar = ({ wantToCook }) => {
    return (
        <div className="md:w-1/3">
            <div className='border-2 rounded-lg mt-6 p-5'>
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
                                            <button onClick={()=>console.log('preparing')} className='btn bg-green-500 rounded-3xl font-medium'>
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
        </div>
    );
};

SideBar.propTypes = {
    wantToCook: PropTypes.array.isRequired
}

export default SideBar;
