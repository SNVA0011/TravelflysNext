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
                            <Link href="/es/">
                                <a onClick={() => window.innerWidth < 1200 ? setExpanded(false) : ''} className={'navbar-brand ' + (location.pathname === "/" ? 'active' : '')}>
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
                                        <Link href="/es/">
                                            <a onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} 
                                            className={'nav-link ' + (location.pathname === "/es" ? 'active' : '')}>
                                                Casa
                                            </a>
                                        </Link>
                                    </li>
                                    <li className='nav-item mx-lg-2'>
                                        <Link href="/es/sobre-nosotras">
                                            <a onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} 
                                            className={'nav-link ' + (location.pathname === "/es/sobre-nosotras" ? 'active' : '')}>
                                                Sobre
                                            </a>
                                        </Link></li>
                                    <li className='nav-item mx-lg-2'>
                                        <Link href="/es/vuelos">
                                            <a onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} 
                                            className={'nav-link ' + (location.pathname === "/es/vuelos" || location.pathname === "/es/vuelos/[Airline]" ? 'active' : '' ? 'active' : '')}>
                                                vuelo
                                            </a>
                                        </Link>
                                    </li>
                                    <li className='nav-item mx-lg-2'>
                                        <Link href="/es/articulos">
                                            <a onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} 
                                            className={'nav-link ' + (location.pathname === "/es/articulos" || location.pathname === "/es/articulos/[blogDetail]" ? 'active' : '')}>
                                                Artículos
                                            </a>
                                        </Link>
                                    </li>
                                    <li className='nav-item mx-lg-2'>
                                        <Link href="/es/contacto">
                                            <a onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} 
                                            className={'nav-link ' + (location.pathname === "/es/contacto" ? 'active' : '')}>
                                                contacto
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








