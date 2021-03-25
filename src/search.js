import search from './assets/desktop/icon-search.svg'
import location from './assets/desktop/icon-location.svg'
import check from './assets/desktop/icon-check.svg'
export default function Search() {
    return (
        <div className="search-container">
            <div className="search-input">
                <img src={search} />
                <input type="text" placeholder="Filter by title, companies, expertise..." />
            </div>
            <div className="search-input-2">
                <img src={location} />
                <input type="text" placeholder="Filter by location..." />
            </div>
            <div className="full-time-checkbox">
                <label className="container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <h4>Full Time Only</h4>
            </div>
            <button className="button-1">Search</button>
        </div>
    )
}