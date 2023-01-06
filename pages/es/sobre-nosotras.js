import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link"
import Header from '../../component/es/Navbar'
import Footer from "../../component/es/Footer"
import Head from 'next/head'
import BreadHero from "../../component/es/BreadHero";

export default function AboutUs() {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='blogdt-single'>

<div className="call-header d-none d-md-block">
        <div className="container">
          <a href="tel:+1 (802)-341-3448" class="footer-number-md">
            <i class="bi bi-telephone mr-2"></i>
            <div class="tfn-no d-inline-block">(USA) <span>+1 (802)-341-3448</span>
            </div>
          </a>
        </div>
      </div>

      <a href="tel:+1 (802)-341-3448" className="footer-number-md">
        <div className="tfn-no">
          <p>
            <i class="bi bi-telephone"></i> ¿Tiene una consulta relacionada con viajes?<small>Pregunta a los expertos</small>
          </p>
          <span>
            <i class="bi bi-telephone mr-2 d-md-none"></i> (USA)  +1 (802)-341-3448
          </span>
        </div>
      </a>
    
        
            <Head>
                <title>sobre nosotras - travelflys</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <link rel="canonical" href={'https://www.travelflys.com/es/sobre-nosotras'} />
            </Head>

            <Header />



            <div className="page-title page-title--small page-title--blog align-left" >
                <div className="container">
                    <div className="page-title__content">
                        <h1 className="page-title__name">Sobre Nosotros </h1> 
                    </div>
                </div>
                <BreadHero linkhtml={<><ul className="bradcum container">
                            <li className="breadcrumb-item" > <Link href="/es/">Casa</Link> </li>
                            <li className='mr-2'>/</li>
                            <li className=' active text-white' aria-current="page"> sobre nosotras </li> </ul></>} />
            </div>



            <div className='about-uspage full-w pyblock-80'>
                <Container>
                    <Row>
                        <Col xs={12} xl={12} className='about-font-18 mb-4 about_area'>
                            <p>
                                Viajar no es sólo hacer turismo, se trata de explorar nuevos lugares, disfrutar de la
                                naturaleza para cumplir el sueño y conseguir una experiencia inolvidable. Depende
                                totalmente de usted qué tipo de ambiente quiere preferir porque puede ser tanto
                                tranquilo como agitado, emocionante y aventurero. Pero cuando se viaja por motivos
                                de negocios en ese momento se necesita la ayuda de un asesoramiento profesional.
                                Pero cuando busca un viaje de fin de semana, entonces podrá disfrutar a su manera.
                            </p>

                            <p>Aquí, en <strong>Travelflys</strong> entendemos completamente esto. También miramos por encima
                                de sus consultas como lo que necesita y lo que quiere. Así que ahora no hay necesidad
                                de estar desconcertado porque aquí usted será capaz de disfrutar de su viaje en su
                                forma deseada de corazón. También podrá disfrutar de vuelos de lujo dentro de su
                                presupuesto. Según la última oferta tenemos el vuelo más barato para los destinos
                                preferidos.</p>

                            <p>Además de los vuelos, también nos ocupamos de las necesidades básicas de los
                                pasajeros que se requieren durante un viaje, como las estancias en
                                hoteles. <strong>Travelflys</strong> se basa totalmente en la confianza de los pasajeros. Siempre
                                servimos para satisfacer a los pasajeros. Pero también hay que estar con nosotros y
                                asegurarse de que seguirán viniendo a nosotros. Nuestra prioridad es hacer grandes
                                viajes para los pasajeros que no se vean afectados por un pequeño presupuesto.</p>

                            <p>La seguridad de los pasajeros, el cumplimiento del presupuesto, la elección del precio
                                más barato y la estancia en el lugar más lujoso y fastuoso son la esencia de un viaje; y
                                los miramos con mucho cariño.</p>

                            <p>Así que, ahora en la era del mundo digital. No tiene que preocuparse. Sólo tiene que
                                hacer una llamada, enviar el correo electrónico a nuestros representantes de atención
                                al cliente que están esperando para planificar su viaje. Así que deje el estrés a un lado
                                y venga a disfrutar de su viaje con nosotros.</p>

                        </Col> 
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    );
}
