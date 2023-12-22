import { useContext } from 'react'
import { useNavigate } from "react-router-dom";

import SearchContext from '../context/search/SearchContext';
import GoogleSearchIcon from '../components/GoogleSearchIcon';

const Home = () => {
    const navigate = useNavigate();
	const { searchQuery, setSearchQuery } = useContext(SearchContext);

    return (
        <div className='home-container'>
            <div className="logo">
                <img alt="Google" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/>
            </div>
            <div className="search-bar">
                <GoogleSearchIcon className="search-icon" />
                <input 
                    className="input-bar" 
                    type="text" 
                    title="Search"
                    placeholder="Search Google or type a URL"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && navigate(`/search?q=${searchQuery}`)} 
                />
                <a href="#"> 
                    <img className="search-voice"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/716px-Google_mic.svg.png"
                    title="Search by Voice" /></a>
            </div>
            <div className="home-buttons">
                <button className="button" type="button">Google Search</button>
                <button className="button" type="button">I'm Feeling Lucky</button>
            </div>
        </div>
    )
}

export default Home;