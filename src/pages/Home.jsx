import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	const [searchQuery, setSearchQuery] = useState('');

    return (
        <>
            <h1>Google Search</h1>
			<input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
			<button onClick={() => navigate(`/search?q=${searchQuery.split(' ').join('+')}`)}>Submit</button>
			<p>{searchQuery}</p>
        </>
    )
}

export default Home;

