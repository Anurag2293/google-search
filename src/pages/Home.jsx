import { useState, useContext } from 'react'
import SearchContext from '../context/search/SearchContext';

const Home = () => {
    const { searchQuery, setSearchQuery, getSearchResults, searchResults } = useContext(SearchContext);

    return (
        <>
            <h1>Google Search</h1>
			<input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
			<button onClick={getSearchResults}>Submit</button>
			<p>{searchQuery}</p>
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

export default Home;

