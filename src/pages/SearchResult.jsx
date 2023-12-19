import React, { useEffect, useContext } from 'react'
import { useSearchParams } from "react-router-dom";

import SearchContext from '../context/search/SearchContext'

const SearchResult = () => {
    const { searchResults, setSearchResults, getSearchResults } = useContext(SearchContext);
    let [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const searchQuery = searchParams.get('q');
        getSearchResults(searchQuery).then((response) => {
            setSearchResults(response);
        });
    }, [searchParams])

    return (
        <>
            <h1>Search Result: {searchParams.get('q')}</h1>
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