import { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";

import SearchContext from '../context/search/SearchContext';

const Home = () => {
    const { searchQuery, setSearchQuery, getSearchResults, setSearchResults } = useContext(SearchContext);
	const navigate = useNavigate();

	const handleOnSubmit = async (e) => {
		const response = await getSearchResults();
		setSearchResults(response);
		navigate(`/search?${searchQuery}`);
	}

    return (
        <>
            <h1>Google Search</h1>
			<input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
			<button onClick={handleOnSubmit}>Submit</button>
			<p>{searchQuery}</p>
        </>
    )
}

export default Home;

