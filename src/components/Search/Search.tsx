import "../../style/search.css";

const Search = () => {
    return (
    <nav className="navbar">
    <div className="container-fluid">
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Поиск по сайту" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Искать</button>
      </form>
    </div>
  </nav>
  )}

    export default Search;