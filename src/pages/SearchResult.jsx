import React, { useContext } from 'react'
import SearchContext from '../context/search/SearchContext'

const SearchResult = () => {
    const { searchQuery, setSearchQuery, searchResults } = useContext(SearchContext);

    return (
        <>
            <h1>Search Result: {searchQuery}</h1>
            {searchResults.length>0 && (
				searchResults.map((item) => (
					<div key={item.link}>
						<h1>{item.title}</h1>
						<p>{item.link}</p>
					</div>
				))
			)}
        </>
    )
}

export default SearchResult