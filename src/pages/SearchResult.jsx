import React, { useState, useEffect, useContext } from 'react'
import { useSearchParams, useNavigate } from "react-router-dom";

import SearchContext from '../context/search/SearchContext'
import SearchItem from '../components/SearchItem';
import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';

const SearchResult = () => {
    const { searchResults, setSearchResults, getSearchResults, setSearchQuery, searchInformation } = useContext(SearchContext);
    let [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const [apiQuotaLeft, setApiQuotaLeft] = useState(true);

    // update the search results whenever the search query changes
    useEffect(() => {
        const updateResults = async () => {
            try {
                const searchQuery = searchParams.get('q');
                setSearchQuery(searchQuery);

                const response = await getSearchResults(searchQuery);
                // If the response is null/undefined, then the API limit has been reached
                if (!response) {
                    setApiQuotaLeft(false);
                    alert("The Google API has an daily limit of 100 requests. Please try again tomorrow.")
                    return;
                }
                setApiQuotaLeft(true);
                setSearchResults(response);
            } catch (error) {
                console.log({ error });
            }
        }
        updateResults();
    }, [searchParams])

    // return home when logo is clicked
    const handleLogoClick = () => {
        navigate('/');
        setSearchQuery('')
    }

    return (
        <div className='search-result-container'>
            <div className='search-header'>
                <div className="search-logo" onClick={handleLogoClick}>
                    <img alt="Google" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
                </div>
                <div className='search-bar-container'>
                    <SearchBar />
                </div>
            </div>
            <div className='search-navbar'>
                <Navbar />
            </div>
            {apiQuotaLeft && <div className='search-information'>
                <p>About {searchInformation.formattedTotalResults} results ({searchInformation.formattedSearchTime} seconds)</p>
            </div>}
            {apiQuotaLeft && <div className='search-data'>
                {searchResults.length > 0 && (
                    searchResults.map((item) => (
                        <SearchItem key={item.link} searchItem={item} />
                    ))
                )}
            </div>}
            {!apiQuotaLeft && <div className='search-data'>
                <h1>API Limit Reached: Please try tomorrow!</h1>
            </div>}
        </div>
    )
}

export default SearchResult;