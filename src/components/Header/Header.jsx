const Header = () => {
    return (
        <div className="flex justify-between items-center w-11/12 mx-auto py-5">
           <div>
            <h2 className="font-bold text-3xl">Recipe Calories</h2>
           </div>
           <div className="space-x-3 text-gray-500">
            <a href="#">Home</a>
            <a href="#">Recipes</a>
            <a href="#">About</a>
            <a href="#">Search</a>
           </div>
           <div className="space-x-3">
            <input className="bg-slate-300 py-2 rounded-2xl pl-4" type="search" name="" id="" placeholder="Search"/>
            <span><i className="fa-solid fa-user bg-green-400 p-2 rounded-full text-white"></i></span>
           </div>
        </div>
    );
};

export default Header;