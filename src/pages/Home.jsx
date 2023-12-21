import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import SearchBar from '../components/SearchBar';

const Home = () => {
	const navigate = useNavigate();
	const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className='home-container'>
            <h1 id="product-sans">Google</h1>
            <div className='home-search-bar'>
                <input className='home-search-input-bar' type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button onClick={() => navigate(`/search?q=${searchQuery.split(' ').join('+')}`)}>Submit</button>
            </div>
			{/* <p>{searchQuery}</p> */}
            <SearchBar />
        </div>
    )
}

export default Home;

