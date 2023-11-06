import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase.config";
import { useNavigate } from 'react-router-dom';
const Blog = () => {

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [blog, setBlog] = useState("");

  //=== referencing to particular collection in firestore;
  const usersCollectionRef = collection(db, "blog");

  const Swal = require("sweetalert2");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // File upload
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setImgUrl(event.target.result);
    };

    reader.readAsDataURL(file);
  };
  const createPost = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await addDoc(usersCollectionRef, {
      title: title,
      summary: summary,
      imgUrl: imgUrl,
      blog: blog,
    });
    Swal.fire({
      title: 'New Blog created successfully',
      text: "Do you want to continue",
      icon: "success",
      confirmButtonText: "Cool",
    });
    setTimeout(() => {
      navigate('/blogs');
    }, 3000)
    setIsLoading(false);
    setTitle("");
    setSummary("");
    setImgUrl("");
    setBlog("");
  };
  return (
    <div>
      <div className="login-7 skin_b">
        <div className="login-7-inner">
          <div id="particles-js"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="form-info">
                  <div className="form-section pb-8 pt-4 px-8 align-self-center">
                    <form onSubmit={createPost}>
                      <div className="mb-6">
                        <label
                          htmlFor="title"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Title
                        </label>
                        <input
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          type="text"
                          id="title"
                          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder=""
                          required
                          autoComplete
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          htmlFor="summary"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Summary
                        </label>
                        <textarea
                          value={summary}
                          onChange={(e) => setSummary(e.target.value)}
                          id="summary"
                          rows="4"
                          className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Write your thoughts here..."
                        ></textarea>
                      </div>
                      <div className="mb-6">
                        {/* <label
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          htmlFor="imgUrl"
                        >
                          Image Upload
                        </label> */}
                        {/* <input
                          value={imgUrl}
                          onChange={(e) => setImgUrl(e.target.value)}
                          type="text"
                          id="imgUrl"
                          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="URL"
                          required
                          autoComplete
                        /> */}

                        <label
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          htmlFor="imgUrl"
                        >
                          Image Upload
                        </label>
                        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
                         id="imgUrl"
                         type="file" 
                       
                         onChange={handleFileSelect}
                        />

                      </div>
                      <div className="mb-6">
                        <label
                          htmlFor="blog"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Blog
                        </label>
                        <textarea
                          value={blog}
                          onChange={(e) => setBlog(e.target.value)}
                          id="blog"
                          rows="4"
                          className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Write your thoughts here..."
                        ></textarea>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg btn-theme"
                        >
                          {isLoading && <svg
                            aria-hidden="true"
                            role="status"
                            className="inline w-5 h-5 mr-3 text-green-800 animate-spin"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="#E5E7EB"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentColor"
                            />
                          </svg>}
                          Post Blog
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
