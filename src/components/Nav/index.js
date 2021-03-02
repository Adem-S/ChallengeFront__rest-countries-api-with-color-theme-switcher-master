import React from 'react'
import SearchBar from "./search"
import SelectBar from "./select"

const Nav = ({inputValue,selectValue }) => {
    
    const getInputValue = (value) => {
        inputValue(value)
    }

    const getSelectValue = (value) => {
        selectValue(value)
    }

    return (
        <nav>
            <SearchBar inputValue={getInputValue}/>
            <SelectBar selectValue={getSelectValue}/>
        </nav>
    )
    
}

export default Nav
