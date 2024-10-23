// import PropTypes from 'prop-types';

// const Side = ({ cook }) => {
//     const {recipe_name,calories,preparing_time}=cook
//     console.log(cook)
//     return (
//         <div>
//             <div className="overflow-x-auto">
//                 <table className="table">
//                     {/* head */}
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Time</th>
//                             <th>Calories</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {/* row 1 */}
//                         <tr>
//                             <td>{recipe_name}</td>
//                             <td>{preparing_time}</td>
//                             <td>{calories}</td>
//                             <button className='btn bg-green-500 rounded-3xl font-medium'>Preparing</button>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// Side.propTypes = {
//     cook:PropTypes.object.isRequired
// };

// export default Side;

import PropTypes from 'prop-types';
import Side from './Side';
const SideBar = ({ wantToCook }) => {
    return (
        <div className="md:w-1/3">
            <div className='border-2 rounded-lg mt-6 p-5'>
                <h2 className="text-center text-2xl font-semibold">Want to cook: {wantToCook.length}</h2> <hr className="mx-6 my-3" />
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
                                    wantToCook.map(cook=>{
                                        <tr key={cook.recipe_id}>
                                            <td>{cook.recipe_name}</td>
                                            <button className='btn bg-green-500 rounded-3xl font-medium'>Preparing</button>
                                        </tr>
                                    })
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