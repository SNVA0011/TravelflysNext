import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Link from "next/link"
import ChangeCountryMenu from './ChangeCountryMenu';
import { useRouter } from 'next/router';
export default function Header() {
    const location = useRouter();

    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <header id="header" className="site-header p-0">
                <Navbar collapseOnSelect expanded={expanded} bg="" expand="lg">
                    <Container>
                        <Navbar.Brand>
                            <Link href="/">
                                <a onClick={() => window.innerWidth < 1200 ? setExpanded(false) : ''} className={'navbar-brand '+ (location.pathname === "/" ? 'active' : '')}>
                                <img src='/images/logo.svg' alt='logo' width={211}></img>
                                </a>
                            </Link>
                        </Navbar.Brand>
                        <ChangeCountryMenu />
                        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''}></Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <ul className='navbar-nav'>
                                    <li className='nav-item mx-lg-2'>
                                        <Link href="/">
                                            <a onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} className={'nav-link ' + (location.pathname === "/" ? 'active' : '')}>
                                            Home
                                            </a>
                                            </Link>
                                    </li>
                                    <li className='nav-item mx-lg-2'>
                                        <Link href="/about-us">
                                            <a onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} className={'nav-link ' + (location.pathname === "/about-us" ? 'active' : '')}>
                                            About
                                            </a>
                                            </Link></li>
                                    <li className='nav-item mx-lg-2'>
                                        <Link href="/flights">
                                            <a onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} className={'nav-link ' + (location.pathname === "/flights" || location.pathname === "/flights/[Airline]" ? 'active' : '' ? 'active' : '')}>
                                            Flight
                                            </a>
                                            </Link>
                                    </li>
                                    <li className='nav-item mx-lg-2'>
                                        <Link href="/blog">
                                            <a onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} className={'nav-link ' + (location.pathname === "/blog" || location.pathname === "/blog/[blogDetail]" ? 'active' : '')}>
                                            Blog
                                            </a>
                                            </Link>
                                    </li>
                                    <li className='nav-item mx-lg-2'>
                                        <Link href="/contact">
                                            <a onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} className={'nav-link ' + (location.pathname === "/contact" ? 'active' : '')}>
                                            Contact
                                            </a>
                                            </Link></li>
                                </ul>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <div className='new_header_area_empty full-w'></div>

        </>
    )
}








