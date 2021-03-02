import React from 'react'

const HomePage = ({data, inputValue, selectValue, setSpecificCountry}) => {


    const clickOnCountry = (e) => {
        setSpecificCountry(e.target.closest('.block-country').id)
    }


   let countries = data.map((country) => {

        const display = (
            <>  
                <div className='block-country__img'>
                    <img src={country.flag} alt={"flag of " + country.name}></img>
                </div>
                <div className="block-country__txt">
                      <h3>{country.name}</h3>
                    <p><span>Population: </span>{country.population}</p>
                    <p><span>Region: </span>{country.region}</p>
                    <p><span>Capital: </span>{country.capital}</p> 
                </div>
             
            </>
        )

        if (country.region.indexOf(selectValue) >=0) {
            if (country.name.indexOf(inputValue) >= 0){
                return(
                    <div  
                    key={country.name} 
                    id={country.name}
                    onClick={clickOnCountry}
                    className="block-country"
                    >
                    {display}
                    </div>
                )
            }
        }

        return (
            <div key={country.name} 
            style={{display: "none"}}
            className="block-country"
            >
            {display}
            </div>
        )
    })

    return (
        <div className='home__countries'>
        {countries}
        </div>
    )
}

export default HomePage
