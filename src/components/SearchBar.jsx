import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import SearchContext from '../context/search/SearchContext'
import GoogleSearchIcon from './SearchIcon'

const SearchBar = () => {
    const navigate = useNavigate()
    const { searchQuery, setSearchQuery } = useContext(SearchContext)

    return (
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
                <img 
                    className="search-voice"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/716px-Google_mic.svg.png"
                    title="Search by Voice" 
                />
            </a>
        </div>
    )
}

export default SearchBar;