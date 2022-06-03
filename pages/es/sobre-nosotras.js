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
    <>
      <Head>
        <title>Usairling | Sobre Nosotros | Usairling ¡La única manera de ir y volar!</title>
        <meta name="description" content="La visión de Usairling siempre ha sido desarrollar y mejorar las últimas tecnologías en soluciones de viaje escalables para el viajero inteligente de hoy." />
        <meta name="keywords" content="Usairling, sitio web de reserva de vuelos baratos, el mejor lugar para reservar vuelos, reserva de vuelos en línea" />
        <link rel="canonical" href={'https://www.usairling.com/es/sobre-nosotras'} />
      </Head>

      <Header />

      <div className="page-title page-title--small align-left" >
        <div className="container">
          <div className="page-title__content">
            <h1 className="page-title__name">Sobre nosotros</h1>
          </div>
        </div>
        <BreadHero linkhtml={<><ul className='bradcum'>
          <li className="breadcrumb-item" > <Link href="/es/">casa</Link> </li> <li className='breadcrumb-item active' aria-current="page">Sobre nosotras </li> </ul></>} />
      </div>

      <div className='about-uspage full-w pyblock-80'>
        <Container>
          <Row>
            <Col xs={12} xl={12} className='about-font-18 mb-5'> 
              <p>Viajar es una actividad que cualquiera puede disfrutar, y es la fuente de alegría para algunas personas que aprecian visitar nuevas áreas. Para que sus vacaciones sean un éxito, la mayoría de la gente se pone en contacto con varias agencias de viajes para que todo se organice correctamente. USAirling se dedica a brindar a los consumidores arreglos de viaje de alta calidad al mejor precio posible. Colaboramos con usted para administrar todos los aspectos de los viajes de manera oportuna, ética y rentable. Nuestros clientes reciben un servicio experto y se aseguran de que el cliente se beneficie de la experiencia y la forma distintiva de atender nuestros servicios que ofrecemos.

              </p>                            <br></br>
              <p className='mr-4'>USAirling se fundó con el objetivo de brindar vacaciones de lujo y recorridos guiados incomparables. No solo le brindamos una variedad de paquetes de vacaciones exóticos, sino que también los modificamos para satisfacer sus necesidades específicas. El equipo capacitado que tenemos se enorgullece de su cuidadosa planificación de sus vacaciones. Descubrimos cómo hacer que sus vacaciones sean más excepcionales y luego lo ayudamos a planificar sus vacaciones ideales. Así que venga a hablarnos sobre sus objetivos y destinos deseados, y verá por qué nuestros clientes vuelven a nosotros una y otra vez.</p>
            </Col>

          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
}
