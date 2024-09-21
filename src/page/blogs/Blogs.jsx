import { useState } from "react";
import Search from "./Search";
import { useFetchBlogsQuery } from "../../redux/features/blogs/blogsApi";
import {Link} from 'react-router-dom'

const Blogs = () => {
  const [search, setSearch] = useState("");
  const [categoey, setCategoey] = useState("");
  const [query, setQuery] = useState({ search: "", categoey: "" });

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const { data: blogs, isLoading, error } = useFetchBlogsQuery(query);

  const handleSearch = () => setQuery({ search, categoey });
  return (
    <div className="mt-16 container mx-auto">
      <Search
        search={search}
        handleSearchChange={handleSearchChange}
        handleSearch={handleSearch}
      />
      <div className=" ">
        {isLoading && <p>Loading...</p>}
        {error && <p>{error.toSting()}</p>}
        <div className=" grid md:grid-cols-3 grid-cols-1 gap-6 lg:grid-cols-4 my-5">
        {blogs &&
          blogs.map((blog) => (
                <Link to={`/blogs/${blog._id}`} key={blog._id} className="bg-slate-100 gap-4 shadow-2xl">
                <img src={blog.coverImg} alt="coveImg"  className="w-full h-48 " />
                <h2 className=" text-xl p-4 ">{blog.title}</h2>
                </Link> 
                
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
