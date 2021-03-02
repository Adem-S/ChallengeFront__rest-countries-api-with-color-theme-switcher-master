import React, {useEffect} from 'react'
import IconMoon from "../../images/nightlight.svg"


const Header = () => {

    const htmlElement =  document.documentElement

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        theme ? htmlElement.setAttribute("data-theme", theme) : null
      
    }, [])

    const changeBg = () => {
        if(htmlElement.getAttribute("data-theme") === "light") {
            htmlElement.setAttribute("data-theme", "dark")
            localStorage.setItem("theme", "dark")
        }
        else {
            htmlElement.setAttribute("data-theme", "light")
            localStorage.setItem("theme", "light")
        }
    }

    return (
        <header>
            <h1>Where in the world?</h1>
            <div className="theme-mode" onClick={changeBg}>
               <img src={IconMoon} alt='icon moon'></img>
                <button>Dark Mode</button>
            </div>
        </header>
    )
}

export default Header
