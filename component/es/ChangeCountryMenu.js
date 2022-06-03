import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link';
import { useRouter } from 'next/router'; 
import DropdownButton from 'react-bootstrap/DropdownButton' 


export default function ChangeCountryMenu() {
    const location = useRouter();
    const [lang, setLang] = useState('ES');
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

    return (
        <DropdownButton title={<><span> {lang} </span> </>} variant="outline-secondary"  className='order-lg-3 ml-auto mr-3 mr-lg-0 btnlang'>
        <div className='curr-block px-2'>
            <h5 className='mb-3'>Seleccione El Idioma</h5>

            {loadingpage ? 
            <div className='text-center py-4'>
             <div className="spinner-border text-secondary" role="status">
             <span className="sr-only">Loading...</span>
           </div>
           </div>
                    :
            <Row>
            <Col xs="12" md="12" className='mb-2'>
                        <Dropdown.Item as={Link} href="/" onClick={(e) => { setLang('EN') }}>
                            <a className={'btn btn-site ripple-effbtn btn-40 btn-block text-center dropdown-item'}>
                                <span>English</span>
                            </a>
                        </Dropdown.Item>
                    </Col>
                    <Col xs="12" md="12">
                        <Dropdown.Item as={Link} href="/es" locale="es" onClick={(e) => { setLang('ES') }}>
                            <a className={'btn btn-site ripple-effbtn btn-40 btn-block text-center dropdown-item active'}>
                                <span>Spanish</span>
                            </a>
                        </Dropdown.Item>
                    </Col>
            </Row>
}
        </div>
    
    
        {/* <Dropdown.Divider className='my-3'/> */}
        {/* <div className='curr-block'>
        <h5>Select Currency</h5>
      <Row className='selcur-rew'>
                <Col xs="6" md="3">
                <Dropdown.Item onClick={(e)=>{setCurr('USD')}}  className='btn btn-site whitebt ripple-effbtn btn-40 btn-block text-center'><span>
                    <b className='USD flg'></b>
                    USD</span></Dropdown.Item>
                </Col>
                <Col xs="6" md="3">
                <Dropdown.Item onClick={(e)=>{setCurr('INR')}}  className='btn btn-site whitebt ripple-effbtn btn-40 btn-block text-center'><span>
                    <b className='INR flg'></b>
                    INR</span></Dropdown.Item>
                </Col>
                <Col xs="6" md="3">
                <Dropdown.Item onClick={(e)=>{setCurr('AUD')}}  className='btn btn-site whitebt ripple-effbtn btn-40 btn-block text-center'><span>
                    <b className='AUD flg'></b>
                    AUD</span></Dropdown.Item>
                </Col>
                <Col xs="6" md="3">
                <Dropdown.Item onClick={(e)=>{setCurr('GBP')}}  className='btn btn-site whitebt ripple-effbtn btn-40 btn-block text-center'><span>
                    <b className='GBP flg'></b>
                    GBP</span></Dropdown.Item>
                </Col>
    
                <Col xs="6" md="3">
                <Dropdown.Item onClick={(e)=>{setCurr('AED')}}  className='btn btn-site whitebt ripple-effbtn btn-40 btn-block text-center'><span>
                    <b className='AED flg'></b>
                    AED</span></Dropdown.Item>
                </Col>
                <Col xs="6" md="3">
                <Dropdown.Item onClick={(e)=>{setCurr('EUR')}}  className='btn btn-site whitebt ripple-effbtn btn-40 btn-block text-center'><span>
                    <b className='EUR flg'></b>
                    EUR</span></Dropdown.Item>
                </Col>
                <Col xs="6" md="3">
                <Dropdown.Item onClick={(e)=>{setCurr('CA')}}  className='btn btn-site whitebt ripple-effbtn btn-40 btn-block text-center'><span>
                    <b className='CA flg'></b>
                    CA</span></Dropdown.Item>
                </Col>
            </Row>  
        </div> */}
    </DropdownButton>
    )
}
