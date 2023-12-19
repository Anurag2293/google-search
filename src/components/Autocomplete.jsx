import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Autocomplete = ({ options }) => {
    const [activeOption, setActiveOption] = useState(0);
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [showOptions, setShowOptions] = useState(false);
    const [userInput, setUserInput] = useState('');
    
    const onChange = (e) => {
        const userInput = e.currentTarget.value;

        const filteredOptions = options.filter(
            (optionName) =>
                optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        setActiveOption(0);
        setFilteredOptions(filteredOptions);
        setShowOptions(true);
        setUserInput(userInput);
    };

    const onClick = (e) => {
        setActiveOption(0);
        setFilteredOptions([]);
        setShowOptions(false);
        setUserInput(e.currentTarget.innerText);
    };

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            setActiveOption(0);
            setShowOptions(false);
            setUserInput(filteredOptions[activeOption]);
        } else if (e.keyCode === 38) {
            if (activeOption === 0) {
                return;
            }
            setActiveOption(activeOption - 1);
        } else if (e.keyCode === 40) {
            if (activeOption === filteredOptions.length - 1) {
                return;
            }
            setActiveOption(activeOption + 1);
        }
    };

    let optionList;
    if (showOptions && userInput) {
        if (filteredOptions.length) {
            optionList = (
                <ul className="options">
                    {filteredOptions.map((optionName, index) => {
                        let className = index === activeOption ? 'option-active' : '';
                        return (
                            <li className={className} key={optionName} onClick={onClick}>
                                {optionName}
                            </li>
                        );
                    })}
                </ul>
            );
        } else {
            optionList = (
                <div className="no-options">
                    <em>No Option!</em>
                </div>
            );
        }
    }

    return (
        <React.Fragment>
            <div className="search">
                <input
                    type="text"
                    className="search-box"
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={userInput}
                />
                <input type="submit" value="" className="search-btn" />
            </div>
            {optionList}
        </React.Fragment>
    );
};

Autocomplete.propTypes = {
    options: PropTypes.instanceOf(Array).isRequired
};

export default Autocomplete;
