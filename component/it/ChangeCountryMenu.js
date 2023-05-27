import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import Link from 'next/link';
import { useRouter } from 'next/router';
import DropdownButton from 'react-bootstrap/DropdownButton'


export default function ChangeCountryMenu() {
    const location = useRouter();
    const [lang, setLang] = useState('IT');
    const [curr, setCurr] = useState('INR');
    const [expanded, setExpanded] = useState(false);

    // loadingpage
    const [loadingpage, setLoading] = useState(false);
    useEffect(() => {
        location.events.on('routeChangeStart', () => { window.scrollTo(0, 0); setLoading(true) });
        location.events.on('routeChangeComplete', () => setLoading(false));
        location.events.on('routeChangeError', () => setLoading(false));
        return () => {
            location.events.off('routeChangeStart', () => { window.scrollTo(0, 0); setLoading(true) });
            location.events.off('routeChangeComplete', () => setLoading(false));
            location.events.off('routeChangeError', () => setLoading(false));
        };
    }, [location.events]);

    // showmn
    const [showmn, setShowmn] = useState(false);
    const showDropdown = (e) => {
        setShowmn(!showmn);
    }
    const hideDropdown = e => {
        setShowmn(false);
    }


    return (
        <DropdownButton title={<><span><img src="https://flaglog.com/codes/standardized-rectangle-120px/IT.png" className='eps-rec' /> {lang} </span> </>} variant="outline-secondary" className='order-lg-3 ml-auto mr-3 mr-lg-0 ml-0 ml-lg-3 btnlang'>
 
            <div className='curr-block px-2'>
                <h5 className='mb-4'>Seleziona la lingua</h5>
                <Row className='form-row'>
                    <Col xs="6" className='mb-3'>
                        <Dropdown.Item as={Link} href="/">
                            <a className={'btlangst btn'}>
                                <div><img src="https://flaglog.com/codes/standardized-rectangle-120px/GB.png" /></div>
                                <div>English</div>
                                <i class="bi bi-check-circle-fill"></i>
                            </a>
                        </Dropdown.Item>
                    </Col>
                    <Col xs="6" className='mb-3'>
                        <Dropdown.Item as={Link} href="/es" locale="es">
                            <a className={'d-flex btlangst btn'}>
                                <div className='flex-grow-1'>
                                    <div><img src="https://flaglog.com/codes/standardized-rectangle-120px/ES.png" /></div>
                                    <div>Spanish</div>
                                </div>
                                <div>
                                    <i class="bi bi-check-circle-fill"></i>
                                </div>
                            </a>
                        </Dropdown.Item>
                    </Col>
                    <Col xs="6" className='mb-3'>
                        <Dropdown.Item as={Link} href="/ru" locale="ru">
                            <a className={'d-flex btlangst btn'}>
                                <div className='flex-grow-1'>
                                    <div><img src="https://flaglog.com/codes/standardized-rectangle-120px/RU.png" /></div>
                                    <div>Russian</div>
                                </div>

                                <div>
                                    <i class="bi bi-check-circle-fill"></i>
                                </div>
                            </a>
                        </Dropdown.Item>
                    </Col>
                    <Col xs="6" className='mb-3'>
                        <Dropdown.Item as={Link} href="/it" locale="it">
                            <a className={'d-flex btlangst btn active'}>
                                <div className='flex-grow-1'>
                                    <div><img src="https://flaglog.com/codes/standardized-rectangle-120px/IT.png" /></div>
                                    <div>Italian</div>
                                </div>

                                <div>
                                    <i class="bi bi-check-circle-fill"></i>
                                </div>
                            </a>
                        </Dropdown.Item>
                    </Col>
                </Row>
            </div>
        </DropdownButton>
    )
}
