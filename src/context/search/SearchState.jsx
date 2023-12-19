import { useState } from "react";
import SearchContext from "./SearchContext";

const SEARCH_URI = `https://www.googleapis.com/customsearch/v1?key=${import.meta.env.VITE_SEARCH_API_KEY}&cx=${import.meta.env.VITE_SEARCH_ENGINE_ID}&q=`;

const SearchState = (props) => {
    const [searchResults, setSearchResults] = useState([]);

    const getSearchResults = async (searchQuery) => {
		const response = await fetch(`${SEARCH_URI}${searchQuery}`);
		const result = await response.json();
        return result.items;
	}

    return <SearchContext.Provider value={{ searchResults, setSearchResults, getSearchResults }}>
        {props.children}
    </SearchContext.Provider>
}

export default SearchState;