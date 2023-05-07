function Search() {
    return (
        <div className="d-none d-sm-block my-3 d-flex">
            <div className="d-flex">
                {/* <label>Search posts by location...</label> */}
                <input className="form-control" type="text" placeholder="Search posts by location..." ></input>
                <button className="btn btn-warning" >Cancel</button>
            </div>
        </div>
    );
}

export default Search;
