import React, {useState, useEffect} from 'react'
import Arrow from "../../images/arrow.svg"

const DetailPage = ({data, specificCountry, setSpecificCountry}) => {
    
    const [dataCountry, setDataCountry] = useState([])

    const [borderCountriesData, setborderCountriesData] = useState([])

    useEffect(() => {

        if(specificCountry !== "") {
            const country = data.filter(value => value.name === specificCountry)
            setDataCountry(country)
            getBorderCountry(country[0].borders)
        }

    }, [specificCountry])

    let getBorderCountry = (borders) => {
        const result = data.filter (value => borders.includes(value.alpha3Code))
        setborderCountriesData(result)
    } 

    let displayBorderCountry = borderCountriesData.length > 0 ?  
    ( 
        borderCountriesData.map(borderCountry => {       
        return (
            
            <button
            key={borderCountry.name}
            onClick={() => setSpecificCountry(borderCountry.name)}
            >
            {borderCountry.name}
            </button>
        )
        }) 
    )
    :
    (
        <p>None</p>
    )
  

    let displayInfoCountry = dataCountry.map(country => {
    
        let getInfoCountry = (values) => {
            const array = []
            for (const value of values) {
                array.push(`${value.name}`)
            }
            return <>{array.toString()}</>
        } 

        return (
            <div 
            className="country" 
            key={country.name} 
            >
                <div className="country__flag">
                    <img src={country.flag} alt={"flag of " + country.name}></img>
                </div>
                <div className="country__information">
                    <div className="country__title">
                        <h2>{country.name}</h2>
                    </div>
                    <div className="country__text">
                    <p><span>Native Name: </span>{country.nativeName}</p>
                    <p><span>Population: </span>{country.population}</p>
                    <p><span>Region: </span>{country.region}</p>
                    <p><span>Sub Region: </span>{country.subregion}</p>
                    <p><span>Capital: </span>{country.capital}</p>
                    <p><span>Top Level Domain: </span>{country.topLevelDomain}</p>
                    <p><span>Currencies: </span>{getInfoCountry(country.currencies)}</p>
                    <p><span>Languages: </span>{getInfoCountry(country.languages)}</p>
                    </div>
                    <div className="country__border">
                        <span>Border Countries: </span>
                        
                        {displayBorderCountry}
                    </div>
                </div>
            </div>
        
        )
    })

    const remove = () => {
        setSpecificCountry("")
        setDataCountry([])
        setborderCountriesData([])
    }

    return (
        <>
        <div className="btn-back">
            <button onClick={remove}><img src={Arrow}></img> Back</button>
        </div>
        {displayInfoCountry}
        </>
    )
}

export default DetailPage
