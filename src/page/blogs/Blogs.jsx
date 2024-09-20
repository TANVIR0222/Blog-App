import { useState } from "react";
import Search from "./Search";

const Blogs = () => {

    const [search, setSearch] = useState('');
    const [categoey, setCategoey] = useState('');
    const [query, setQuery] = useState({search : '' , categoey : ''});

    const handleSearchChange = (e) =>{
        setSearch(e.target.value);
    }

    const handleSearch = () => setQuery({search ,  categoey});
    return (
        <div className="mt-16 container mx-auto">
           <Search 
           search ={search} 
           handleSearchChange = {handleSearchChange}
           handleSearch = {handleSearch}

           />
            <div className=" ">search </div>
        </div>
    );
};

export default Blogs;