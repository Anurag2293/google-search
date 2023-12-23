import React, {useState} from 'react';

import { IoSearchOutline } from "react-icons/io5";
import { BiNews } from "react-icons/bi";
import { BsImages } from "react-icons/bs";
import { RiVideoLine } from "react-icons/ri";

const MENU_ITEM = {
    ALL: 'ALL',
    NEWS: 'NEWS',
    IMAGES: 'IMAGES',
    VIDEOS: 'VIDEOS'
}

const Navbar = () => {
    const [isActive, setIsActive] = useState(MENU_ITEM.ALL);

    return (
        <div className='navbar'>
            <div className="menu">
                <a onClick={() => {setIsActive(MENU_ITEM.ALL)}} className={isActive === MENU_ITEM.ALL ? 'active' : ''} href="#"><IoSearchOutline /> <span>All</span></a>
                <a onClick={() => {setIsActive(MENU_ITEM.NEWS)}} className={isActive === MENU_ITEM.NEWS ? 'active' : ''} href="#"><BiNews /> <span>News</span></a>
                <a onClick={() => {setIsActive(MENU_ITEM.IMAGES)}} className={isActive === MENU_ITEM.IMAGES ? 'active' : ''} href="#"><BsImages /> <span>Images</span></a>
                <a onClick={() => {setIsActive(MENU_ITEM.VIDEOS)}} className={isActive === MENU_ITEM.VIDEOS ? 'active' : ''} href="#"><RiVideoLine /> <span>Videos</span></a>
            </div>
            <hr />
        </div>
    )
}

export default Navbar