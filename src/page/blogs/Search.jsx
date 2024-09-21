
const Search = ({ search, handleSearchChange, handleSearch }) => {
    const handleKeyPress = (event) =>{
        if(event.key === 'Enter'){
            handleSearch();
        }

    }

    // get 


  return (
    <div className="px-2">
      <label className="flex items-center gap-2">
        <input
        value={search}
        onChange={handleSearchChange}
        onKeyPress={handleKeyPress}
          type="text"
          className="grow h-10 rounded p-2"
          placeholder="Hotels with Rooftop Pools Near ....."
        />
        <button
          className="bg-blue-500 h-10 hover:bg-blue-700 text-white font-semibold py-
      2 px-4 rounded"
        >
          Search
        </button>
      </label>
    </div>
  );
};

export default Search;
