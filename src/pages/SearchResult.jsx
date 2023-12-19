import React, { useContext } from 'react'
import SearchContext from '../context/search/SearchContext'

const SearchResult = () => {
    const { searchQuery, setSearchQuery } = useContext(SearchContext);

    return (
        <div>SearchResult</div>
    )
}

export default SearchResult