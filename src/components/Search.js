import { useState, useRef } from 'react'

const Search = ({onEmployeeSearch}) => {
    const [isActive, setIsActive] = useState(false);
    const searchInput = useRef(null);
    const handleSearchClick = () => {
        setIsActive(val => !val);
        searchInput.current.focus();
    }
    return (
        <div className={`search d-flex justify-between align-center ${ isActive ? "active" : "" }`}>
            <input type="text" ref={searchInput} className="search_input" placeholder="Search..." onInput={e => {onEmployeeSearch(e.target.value)}} />
            <img src="/img/search-black.png" alt="search employee" className="icon icon-lg" title="search employee" onClick={() => { handleSearchClick(); }} />
        </div>
    );
}

export default Search;