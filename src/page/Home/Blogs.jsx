import React, { useState } from "react";
import Search from "../../components/search";
import { useFetchBlogsQuery } from "../../redux/features/blogs/blogApi";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState({ search: "", category: "" });

  // get data using redux
  const { data: blogs = [], error, isLoading } = useFetchBlogsQuery(query);

  const hendleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const hendleSearch = (e) => setQuery({ search, category });

  return (
    <div className="mt-16 container mx-auto">

      <Search
        search={search}
        hendleSearch={hendleSearch}
        hendleSearchChange={hendleSearchChange}
      />


      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.toString}</p>}

      <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {
            blogs.map((blog) => 
                <Link
                to={`/blog/${blog._id}`}
                className=" shadow-md"
                 key={blog._id}>
                <img src={blog.coverImg} className="w-full h-64" alt="coverImg" />
                <h2 className="text-xl p-4">{blog.title}</h2>
                </Link>
            )
               
                
        }
      </div>
      
    </div>
  );
};

export default Blogs;
