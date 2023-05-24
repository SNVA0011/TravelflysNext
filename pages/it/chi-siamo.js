import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link"
import Header from '../../component/it/Navbar'
import Footer from "../../component/it/Footer"
import Head from 'next/head'
import BreadHero from "../../component/it/BreadHero";
import CallUkToast from "../../component/CallUkToast";

export default function AboutUs() {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Head>
                <title>Chi Siamo - Travelflys</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <link rel="canonical" href={'https://www.travelflys.com/it/chi-siamo'} />
            </Head>


            <div className='blogdt-single'>

                <div className="call-header d-none d-md-block">
                    <div className="container">
                        <a href="tel:+1 (802)-909-0003" className="footer-number-md">
                            <i className="bi bi-telephone mr-2"></i>
                            <div className="tfn-no d-inline-block">(USA) <span>+1 (802)-909-0003</span>
                            </div>
                        </a>
                        <a href={`tel:+44 (20) 37693132`} className="footer-number-md animdelay-2s">
                            <i className="bi bi-telephone mr-2"></i>
                            <div className="tfn-no d-inline-block">
                                (UK) <span>+44 (20) 37693132</span>
                            </div>
                        </a>
                    </div>
                </div>


                {/*------- CallUkToast -------*/}
                <CallUkToast />
                {/*----- end CallUkToast -----*/}

                <a href="tel:+1 (802)-909-0003" className="footer-number-md">
                    <div className="tfn-no">
                        <p>
                            <i className="bi bi-telephone"></i> Come possiamo aiutare ?<small>sentiti libero di chiedere</small>
                        </p>
                        <span>
                            <i className="bi bi-telephone mr-2 d-md-none"></i> +1 (802)-909-0003
                        </span>
                    </div>
                </a>




                <Header />



                <div className="d-flex align-items-center justify-content-center flex-column page-title page-title--small page-title--blog align-left" >
                    <div className="container">
                        <div className="page-title__content">
                            <h1 className="page-title__name">Chi Siamo </h1>
                        </div>
                    </div>
                    <BreadHero linkhtml={<><ul className="bradcum container">
                        <li className="breadcrumb-item" > <Link href="/it/">Casa</Link> </li>
                        <li className='mr-2'>/</li>
                        <li className=' active text-white' aria-current="page"> Chi Siamo </li> </ul></>} />
                </div>



                <div className='about-uspage full-w pyblock-80'>
                    <Container>
                        <Row>
                            <Col xs={12} xl={12} className='about-font-18 mb-4 about_area'>
                                <p>
                                    Viaggiare non è solo visitare la città, si tratta di esplorare nuovi posti, godersi il
                                    natura per realizzare il sogno e vivere un'esperienza indimenticabile. Dipende
                                    dipende totalmente da te che tipo di ambiente vuoi preferire perché può essere entrambi
                                    calmo quanto frenetico, eccitante e avventuroso. Ma quando si viaggia per motivi
                                    affari in quel momento hai bisogno dell'aiuto di una consulenza professionale.
                                    Ma quando stai cercando un viaggio nel fine settimana, puoi divertirti a modo tuo.
                                </p>

                                <p>Qui a <strong>Travelflys</strong> lo capiamo perfettamente. Guardiamo anche oltre
                                    delle vostre richieste come ciò di cui avete bisogno e ciò che desiderate. Quindi ora non ce n'è bisogno
                                    di essere perplesso perché qui potrai goderti il ​​tuo viaggio nel tuo
                                    forma del cuore desiderata. Puoi anche goderti voli di lusso all'interno del tuo
                                    bilancio. Secondo l'ultima offerta abbiamo il volo più economico per le destinazioni
                                    preferiti.</p>

                                <p>Oltre ai voli, ci occupiamo anche delle esigenze di base dei passeggeri.
                                    passeggeri richiesti durante un viaggio, come soggiorni in
                                    Alberghi. <strong>Travelflys</strong> si basa interamente sulla fiducia dei passeggeri. Sempre
                                    serviamo per soddisfare i passeggeri. Ma devi anche stare con noi e
                                    assicurati che continueranno a tornare da noi. La nostra priorità è fare grandi cose
                                    viaggi per passeggeri che non hanno un budget limitato.</p>

                                <p>Sicurezza dei passeggeri, rispetto del budget, scelta dei prezzi
                                    più economico e soggiornare nel luogo più lussuoso e sontuoso sono l'essenza di un viaggio; E
                                    li guardiamo con grande affetto.</p>

                                <p>Quindi, ora nell'era del mondo digitale. Non devi preoccuparti. devo solo
                                    effettuare una chiamata, inviare l'e-mail ai nostri rappresentanti dell'assistenza
                                    al cliente che è in attesa di pianificare il proprio viaggio. Quindi metti da parte lo stress
                                    e vieni a goderti il ​​tuo viaggio con noi.</p>

                            </Col>
                        </Row>
                    </Container>
                </div>

                <Footer />
            </div>
        </>
    );
}
