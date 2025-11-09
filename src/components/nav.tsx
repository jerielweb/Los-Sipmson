import { NavLink } from "react-router-dom"
import { useState, useEffect, useRef } from "react"

export default function NavBar() {
    const [isNavBarOpen, setIsNavBarOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const navToggle = isNavBarOpen
        ? 'navbar active'
        : 'navbar'

    const toggleMenu = () => {
        setIsNavBarOpen(!isNavBarOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isNavBarOpen && navRef.current && !navRef.current.contains(event.target as Node) && buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
                setIsNavBarOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isNavBarOpen]);

    return (
        <>
            <button ref={buttonRef} onClick={toggleMenu} className='toggle-menu'>
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
            </button>
            <nav ref={navRef} className={navToggle}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/charathers.tsx'>Charathers</NavLink>
            </nav>
        </>
    )
}