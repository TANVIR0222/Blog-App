import React from "react";

const Search = ({ search, hendleSearch, hendleSearchChange }) => {

    const handleKey = (event) =>{
        if(event.key === 'Enter'){
            hendleSearch();
        }
    }

  return (
    <div className="w-full flex">
      <input
        type="text"
        value={search}
        onChange={hendleSearchChange}
        onKeyPress={handleKey}
        placeholder="Hotel with RoofTop Pool Near...."
        className=" py-2 px-4 mr-5  w-full bg-bgPrimary focus:outline-none focus:border"
      />

      <button className="py-2 px-4 bg-blue-700 text-white rounded">
        serach
      </button>
    </div>
  );
};

export default Search;
