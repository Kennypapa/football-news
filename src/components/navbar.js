const Navbar = () => {
    return (
        <div className="w-full h-[70px] shadow-md flex justify-between items-center px-6">
            <div>
                <p className="font-[Raleway] text-xl font-bold whitespace-nowrap">FOOTBALL <span className="news_txt">NEWS</span></p>
            </div>
            <div className="w-[400px">

                <form className="flex items-center">
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                            </svg>
                        </div>
                        <input type="text" id="simple-search" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[rgb(212,66,244)] focus:border-[rgb(212,66,244)] block w-full pl-10 p-2.5" placeholder="Search branch name..." required />
                    </div>
                    <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-[rgb(212,66,244)] rounded-lg border border-blue-700 hover:bg-[rgb(212,66,204)] focus:ring-4 focus:outline-none focus:ring-blue-300">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </form>


            </div>
        </div>
    )
}

export default Navbar;