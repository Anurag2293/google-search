import React, { useEffect, useContext } from 'react'
import { useSearchParams } from "react-router-dom";

import SearchContext from '../context/search/SearchContext'
import SearchItem from '../components/SearchItem';
import SearchBar from '../components/SearchBar';

const SearchResult = () => {
    const { searchResults, setSearchResults, getSearchResults, setSearchQuery } = useContext(SearchContext);
    let [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const searchQuery = searchParams.get('q');
        // console.log({searchQuery});
        setSearchQuery(searchQuery);
        getSearchResults(searchQuery).then((response) => {
            setSearchResults(response);
            console.log({response});
        });
    }, [searchParams])

    return (
        <div className='search-result-container'>
            <div className='search-header'>
                <div className="search-logo">
                    <img alt="Google" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/>
                </div>
                <div className='search-bar-container'>
                    <SearchBar />
                </div>
            </div>
            <div className='search-data'>
                {searchResults.length>0 && (
                    searchResults.map((item) => (
                        <SearchItem key={item.link} searchItem={item} />
                    ))
                )}
            </div>
        </div>
    )
}

export default SearchResult