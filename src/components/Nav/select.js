import React from 'react'
import Arrow from "../../images/arrow-down.svg"

const SelectBar = ({selectValue}) => {




    const handleChange = (e) => {
        selectValue(e.target.value)
    }

    const handleClickNav = (e) => {
        document.querySelector(".nav__select-options").classList.toggle("hidden-nav")     
    }

    const handleClickInputLabel = (e) => {
       e.stopPropagation()
       if (e.target.getAttribute("for")) {
        document.querySelectorAll(".nav__select-options div").forEach(element => element.classList.remove("hidden-nav"))
        e.target.parentNode.classList.add("hidden-nav")
        document.querySelector(".nav__select p").innerHTML = e.target.innerText
        }
        document.querySelector(".nav__select-options").classList.add("hidden-nav")
    }



    const displayInputLabel =  (value) => {
        return (
            <div onClick={handleClickInputLabel}> 
                <input type="radio" name="region" value={value} id={value}/>
                <label htmlFor={value}>{value}</label>
            </div>
        )       
    }
    
    return (
        <div className="nav__select" onChange={handleChange} onClick={handleClickNav}>
            
            <div className="nav__select-result">
                <p>Filter by region</p>
                <img src={Arrow} alt="arrow down"></img>
            </div>

            <div className="nav__select-options hidden-nav">

            <div className="hidden-nav" onClick={handleClickInputLabel}>
                <input type="radio" name="region" value="" id="all"/>
                <label htmlFor="all">All regions</label>
            </div>

            {displayInputLabel("Africa")}
            {displayInputLabel("Americas")}
            {displayInputLabel("Asia")}
            {displayInputLabel("Europe")}
            {displayInputLabel("Oceania")}

            </div> 
        </div>


    

    

    )
}

export default SelectBar
