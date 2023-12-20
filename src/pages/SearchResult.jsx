import React, { useEffect, useContext } from 'react'
import { useSearchParams } from "react-router-dom";

import SearchContext from '../context/search/SearchContext'
import SearchItem from '../components/SearchItem';

const SearchResult = () => {
    const { searchResults, setSearchResults, getSearchResults } = useContext(SearchContext);
    let [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const searchQuery = searchParams.get('q');
        getSearchResults(searchQuery).then((response) => {
            setSearchResults(response);
            console.log({response});
        });
    }, [searchParams])

    return (
        <>
            <h1>Search Result: {searchParams.get('q')}</h1>
            <div className='search-result-container'>
                {searchResults.length>0 && (
                    searchResults.map((item) => (
                        <SearchItem key={item.link} searchItem={item} />
                    ))
                )}
            </div>
        </>
    )
}

export default SearchResult