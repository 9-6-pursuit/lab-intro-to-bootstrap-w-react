export default function Search({ search, setSearch }) {

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    }

    const handleCancel = () => {
        setSearch("");
    }

    return (
        <div className="col-md-12 search-form input-group" id="searchbar">
            <span>Search posts by location...</span>
            <input
                className="form-control rounded"
                type="search"
                placeholder=""
                aria-label="Search"
                aria-describedby="search-addon"
                value={search}
                onChange={handleInputChange}
            />
            <button
                type="button"
                className="btn btn-warning"
                onClick={handleCancel}
            >
                Cancel
            </button>
        </div>
    )
}
