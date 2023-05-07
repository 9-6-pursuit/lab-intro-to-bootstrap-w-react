export default function Search({search, setSearch}){
    return (
        <div className="col-md-12 search-form input-group" id="searchbar">
            <span>Search posts by loaction...</span>
            <input className="form-control rounded" 
            placeholder="" type="search" 
            aria-label="Search" 
            aria-describedby="search-addon" 
            onChange={setSearch}
            />
            <button type="button" className="btn bg-warning">Cancel</button>
        </div>
    )
}