import { useState, useContext } from 'react'
import SearchContext from '../context/search/SearchContext';

const Home = () => {
	const [responses, setResponses] = useState([]);

    const { searchQuery, setSearchQuery, getResults } = useContext(SearchContext);

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		const queryResponses = await getResults(searchQuery);
		setResponses(queryResponses)
	}

    return (
        <>
            <h1>Google Search</h1>
			<input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
			<button onClick={handleOnSubmit}>Submit</button>
			<p>{searchQuery}</p>
			{responses.length>0 && (
				responses.map((response) => (
					<div key={response.link}>
						<h1>{response.title}</h1>
						<p>{response.link}</p>
					</div>
				))
			)}
        </>
    )
}

export default Home;

