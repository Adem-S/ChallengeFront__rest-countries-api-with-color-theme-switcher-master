import React from 'react'
import Search from "../../images/search.svg"

const SearchBar = ({inputValue}) => {

    return (
        <div className="nav__search">
            <img src={Search} alt="magnifying glass for research"></img>
            <input type="text" placeholder="Search for a country..." onChange={(e) => inputValue(e.target.value)} ></input>
        </div>
    )
}

export default SearchBar
