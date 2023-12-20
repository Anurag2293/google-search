import React from 'react'

const SearchItem = ({ searchItem }) => {
    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const companyUrl = searchItem.displayLink.split('.');
    let company = companyUrl[companyUrl.length - 2];
    company = capitalize(company);

    return (
        <div className='search-item-container'>
            <a href={searchItem.link} target='_blank' >
                <div className='search-item-site-details'>
                    {/* <img className='search-item-image' src={searchItem.pagemap.metatags[0]["og:image"]} alt="Image" /> */}
                    <img className='search-site-image' src={`https://logo.clearbit.com/${searchItem.displayLink}`} alt={`${company} logo`} />
                    <div className='search-site-caption'>
                        <p className='search-site-text'>{company}</p>
                        <p className='search-site-text'>{searchItem.displayLink}</p>
                    </div>
                </div>
                <p className='search-item-title'>
                    {searchItem.title}
                </p>
            </a>
            <p className='search-item-snippet'>{searchItem.snippet}</p>
        </div>
    )
}

export default SearchItem