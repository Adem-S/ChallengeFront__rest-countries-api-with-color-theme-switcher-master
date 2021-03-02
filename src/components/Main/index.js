import React, {useEffect, useState} from 'react'
import Nav from '../Nav'
import HomePage from './homePage'
import DetailPage from './detailPage'

const Main = () => {

    const [data, setData] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [selectValue, setSelectValue] = useState("")
    const[specificCountry, setSpecificCountry] = useState("")


    
    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
            .catch(err => {
                console.log(err)
            }) 
        
    }, []) 


    const displayHome = specificCountry !== '' ? "none" : "flex"
    const displaySingle = specificCountry !== '' ? "flex" : "none"

    return (
        <main>
            <section  className="home" style={{display: displayHome}}>
                <Nav 
                    inputValue={(value) => setInputValue(value)}
                    selectValue={(value) => setSelectValue(value)}
                />
                <HomePage
                    data={data} // .slice(0, number) pour charger la data petit a petit 
                    inputValue={inputValue} 
                    selectValue={selectValue} 
                    setSpecificCountry={(value) => setSpecificCountry(value)}
                />
            </section>
            <section  className="detail" style={{display: displaySingle}}>
                <DetailPage 
                data={data}
                specificCountry={specificCountry} 
                setSpecificCountry={(value) => setSpecificCountry(value) }
                />
            </section >
        </main>
    )
}

export default Main
