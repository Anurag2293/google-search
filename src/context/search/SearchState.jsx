import { useState } from "react";
import SearchContext from "./SearchContext";

const SEARCH_URI = `https://www.googleapis.com/customsearch/v1?key=${import.meta.env.VITE_SEARCH_API_KEY}&cx=${import.meta.env.VITE_SEARCH_ENGINE_ID}&q=`;

const SearchState = (props) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchInformation, setSearchInformation] = useState({});

    // fetch search results from the Google API
    const getSearchResults = async (searchQuery) => {
		const response = await fetch(`${SEARCH_URI}${searchQuery}`);
		const result = await response.json();

        console.log({result});
        setSearchInformation(result.searchInformation);
        return result.items;
	}

    // return a Provider component with the value prop set to an object containing the searchResults, setSearchResults, getSearchResults, searchQuery, setSearchQuery, and searchInformation
    return <SearchContext.Provider value={{ searchResults, setSearchResults, getSearchResults, searchQuery, setSearchQuery, searchInformation }}>
        {props.children}
    </SearchContext.Provider>
}

export default SearchState;