import { useContext } from 'react'
import { useNavigate } from "react-router-dom";

import SearchContext from '../context/search/SearchContext';
import SearchBar from '../components/SearchBar';

const Home = () => {
    const navigate = useNavigate();
	const { searchQuery, setSearchQuery } = useContext(SearchContext);

    return (
        <div className='home-container'>
            <div className="logo">
                <img alt="Google" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/>
            </div>
            <div className='home-search-section'>
                <SearchBar />
            </div>
            <div className="home-buttons">
                <button 
                    className="button" 
                    type="button"
                    onClick={() => navigate(`/search?q=${searchQuery}`)}
                >Google Search</button>
                <button className="button" type="button">I'm Feeling Lucky</button>
            </div>
        </div>
    )
}

export default Home;