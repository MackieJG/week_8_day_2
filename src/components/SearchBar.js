import React, {useEffect, useState} from 'react';



const SearchBar = ({filteredResults}) => {
    
    const [searchResults, setSearchResults ] = useState( "" )

    const handleChange = (event) => {
        setSearchResults(event.target.value)
    }

    useEffect(() => {
        filteredResults(searchResults)
    }, [searchResults])

    return( 
        <>
            <input type='search' onChange={handleChange} value={searchResults}></input>
        </>
    )

}


export default SearchBar;