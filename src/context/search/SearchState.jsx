import { useState } from "react";
import SearchContext from "./SearchContext";

const SEARCH_URI = `https://www.googleapis.com/customsearch/v1?key=${import.meta.env.VITE_SEARCH_API_KEY}&cx=${import.meta.env.VITE_SEARCH_ENGINE_ID}&q=`;

const SearchState = (props) => {
    const [searchQuery, setSearchQuery] = useState('');

    const getResults = async (searchQueryParam) => {
		const response = await fetch(`${SEARCH_URI}${searchQueryParam}`);
		const result = await response.json();
		return result.items;
	}

    return <SearchContext.Provider value={{searchQuery, setSearchQuery, getResults}}>
        {props.children}
    </SearchContext.Provider>
}

export default SearchState;