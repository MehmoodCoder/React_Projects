


export default function Search({search, setSearch, handleSearch}){


    return(
        <>
            <div className="search-container">
                <input 
                    type="text" 
                    name="search"
                    placeholder="Enter City Name "
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
                <button
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
        </>
    )
}