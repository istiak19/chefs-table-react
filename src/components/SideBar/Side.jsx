import PropTypes from 'prop-types';

const Side = ({ prepareCook,calories,times }) => {
    return (
        <div>
            <div className="overflow-x-auto mt-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            prepareCook.map(prepare => (
                                <tr key={prepare.recipe_id} className="hover">
                                <td>{prepare.recipe_name}</td>
                                <td>{prepare.preparing_time}</td>
                                <td>{prepare.calories}</td>
                            </tr>
                            ))
                        }
                        <tr className='border-none'>
                            <th></th>
                            <td></td>
                            <td>Total Time = {times}</td>
                            <td>Total Calories = {calories}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Side.propTypes = {
    prepareCook: PropTypes.array.isRequired,
    times:PropTypes.number.isRequired,
    calories:PropTypes.number.isRequired
};

export default Side;