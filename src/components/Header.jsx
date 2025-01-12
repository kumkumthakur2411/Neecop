import React, { useState } from "react";
import styles from './Header.module.css';
import { CiMenuKebab } from "react-icons/ci";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        console.log("click");
      setIsMenuOpen(!isMenuOpen);
    };
    return(<>
    <div className={styles.nav}>
        <h1 className={styles.logo}>Neecop</h1>
        <div className={styles.nav1}>
            <div className={styles.nav2 }>
                <a href="#">home</a>
                <a href="#">about</a>
                <a href="#">product</a>
                <a href="#">content</a>
                <a href="#">service</a>
                <span></span>            
            </div>
            <CiMenuKebab className={styles.menu} onClick={toggleMenu}/>

        </div>
        
    </div>
    </>)
}
export default Header;