import { NavLink } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import NavStyles from './../styles/nav.module.css'
import './../styles/nav.module.css'


export default function NavBar({showExplorerButton = true}) {
    const [isNavBarOpen, setIsNavBarOpen] = useState(false)
    const navRef = useRef<HTMLElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)

    const navToggle = isNavBarOpen
        ? 'nav open'
        : 'nav'


    const toggleMenu = () => {
        setIsNavBarOpen(!isNavBarOpen)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isNavBarOpen && navRef.current && !navRef.current.contains(event.target as Node) && buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
                setIsNavBarOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [isNavBarOpen])

    return (
        <div className={NavStyles.NavBar}>
            <div className={NavStyles.menu}>
                <button ref={buttonRef} onClick={toggleMenu} className={NavStyles.button}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000">
                        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                    </svg>
                </button>
                {showExplorerButton && (
                    <NavLink to='/explorer' className={NavStyles.Explorer_button}>
                        Go to Explorer
                    </NavLink>
                )}
            </div>
            <nav ref={navRef} className={navToggle}>
                <NavLink to='/' onClick={toggleMenu}>Home</NavLink>
                <NavLink to='https://thesimpsonsapi.com/' target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>Api</NavLink>
            </nav>
        </div>
    )
}