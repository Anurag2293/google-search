import React, { useEffect, useContext } from 'react'
import { useSearchParams, useNavigate } from "react-router-dom";

import SearchContext from '../context/search/SearchContext'
import SearchItem from '../components/SearchItem';
import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';

const SearchResult = () => {
    const { searchResults, setSearchResults, getSearchResults, setSearchQuery, searchInformation } = useContext(SearchContext);
    let [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const searchQuery = searchParams.get('q');
        setSearchQuery(searchQuery);
        getSearchResults(searchQuery).then((response) => {
            if (!response) {
                alert("The Google API has an daily limit of 100 requests. Please try again tomorrow.")
                return;
            }
            setSearchResults(response);
            console.log({response});
        })
        .catch((error) => {
            console.log({error});
        });
    }, [searchParams])

    return (
        <div className='search-result-container'>
            <div className='search-header'>
                <div className="search-logo" onClick={() => {navigate('/'); setSearchQuery('')}}>
                    <img alt="Google" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/>
                </div>
                <div className='search-bar-container'>
                    <SearchBar />
                </div>
            </div>
            <div className='search-navbar'>
                <Navbar />
            </div>
            <div className='search-information'>
                <p>About {searchInformation.formattedTotalResults} results ({searchInformation.formattedSearchTime} seconds)</p>
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

export default SearchResult;