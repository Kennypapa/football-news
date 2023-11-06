import { useState, useEffect } from "react";
// import Navbar from "../components/navbar";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../firebase.config";
import { useNavigate, Link } from "react-router-dom";

const Blogs = () => {
    const [blogInfo, setBlogInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const Swal = require("sweetalert2");
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState('');
    const [noResult, setNoResult] = useState(false);
    const [backView, setBackView] = useState(false);
    //=== referencing to particular collection in firestore
    const usersCollectionRef = collection(db, "blog");

    const getBlogs = async () => {
        setIsLoading(true);
        const data = await getDocs(usersCollectionRef);
        setBlogInfo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setIsLoading(false);
    }
    // console.log(doc.id)
    useEffect(() => {

        getBlogs();
    }, []);
    console.log(blogInfo);
    const handleSearch = async (e) => {
        e.preventDefault();
        const q = query(usersCollectionRef, where("title", "==", searchInput));
        const querySnapshot = await getDocs(q);
        const results = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            results.push(doc.data())
        });
        setBackView(true);
        setBlogInfo(results);
        if (results.length === 0) {
            setNoResult(true);
            setBackView(false);
        }
        else {
            setNoResult(false)
        }
    }
    return (
        <div>
            <div className="w-full h-[70px] shadow-md flex justify-between items-center px-6">
                <div>
                    <p className="font-[Raleway] text-xl font-bold whitespace-nowrap">FOOTBALL <span className="news_txt">NEWS</span></p>
                </div>
                <div className="w-[700px]">

                    <form onSubmit={handleSearch} className="flex items-center">
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                                </svg>
                            </div>
                            <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} type="text" id="simple-search" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[rgb(212,66,244)] focus:border-[rgb(212,66,244)] block w-full pl-10 p-2.5" placeholder="Search branch name..." required />
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
            {
                isLoading && (
                    <div className="w-full flex justify-center items-center mt-5">
                        <svg aria-hidden="true" role="status" className="inline w-[200px] h-[200px] mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                        </svg>
                    </div>
                )
            }
            <div className="grid grid-cols-4 gap-4 px-8 pt-12 max-w-[1200px] mx-auto pb-10">
                {
                    noResult && (
                        <div className="w-full">

                            <p className="text-6xl text-red-700 whitespace-nowrap mb-16">No Result Found</p>
                            <a href="/blogs" className="underline pt-14">Go Back</a>
                        </div>
                    )
                }
                {
                    blogInfo.map((blog) => {
                        return (
                            <div className="w-full border border-[rgb(212,66,244)]">
                                <div className="w-full  h-[160px] border">
                                    <img src={blog.imgUrl} className="h-full w-full" alt="image" />
                                </div>
                                <div className="px-3 pt-3 pb-3">
                                    <p className="font-[Raleway] capitalize underline cursor-pointer">{blog.title}</p>
                                    <p className="font-[Raleway] capitalize text-sm py-1">{blog.summary}</p>
                                    <div>
                                        <button type="button" className="focus:outline-none ease-in-out duration-300 font-[Raleway] font-light text-white bg-[rgb(212,66,244)] hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-sm text-sm px-5 py-2 mb-2">See More</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                {
                    backView && (<a href="/blogs"> Go Back</a>)
                }
            </div>
        </div>
    )
}

export default Blogs;