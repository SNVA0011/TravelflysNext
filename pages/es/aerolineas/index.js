import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import BreadHero from '../../../component/es/BreadHero';
import { Button, Col, Row } from 'react-bootstrap';
import Link from "next/link"
import Head from 'next/head'
import Header from '../../../component/es/Navbar'
import Footer from "../../../component/es/Footer"
import Image from "next/image"
import CallUkToast from '../../../component/CallUkToast';
import { siteId } from '../../../utils/static';
import Moment from 'react-moment';
import ReactHtmlParser from 'react-html-parser';


export default function Flights({ allAirlines }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Head>
        <title>Oficinas de Aerolíneas - Travelfusion</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="canonical" href={'https://www.travelflys.com/es/aerolineas'} />
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
              <i className="bi bi-telephone"></i> Cómo podemos ayudar ?<small>Siéntete libre de preguntar</small>
            </p>
            <span>
              <i className="bi bi-telephone mr-2 d-md-none"></i> +1 (802)-909-0003
            </span>
          </div>
        </a>




        <Header />

        <div className='blogadda'>

          <div className="d-flex align-items-center justify-content-center flex-column page-title page-title--small page-title--blog text-center" >
            <div className="container">
              <div className="page-title__content">
                <h1 className="page-title__name">Oficina de Aerolíneas </h1>
                <p className="page-title__slogan">Las mejores oficinas de aerolíneas</p>
              </div>
            </div>
            <BreadHero linkhtml={<><ul className='bradcum container'>
              <li><Link href="/es/">Casa</Link> </li>
              <li className='mr-2'>/</li>
              <li className='breadcrumb-item active ' aria-current="page">Oficinas de aerolíneas</li> </ul></>} />
          </div>



          <div className='popular-destination blogaddalist full-w'>
            <Container>

              <Row className='content' id="content" >
                <Col md="12" >
                  <h2 className='mb-3'>Una guía completa de aeropuertos en Travelflys.com</h2>

                  <p className='mb-3'>El sitio web Travelflys.com proporciona información actualizada sobre
                     aeropuertos nacionales e internacionales junto con sus servicios y
                     instalaciones. Cuando planifica su viaje a su destino previsto, usted
                     Busque siempre un viaje de vuelo cómodo, seguro y sin complicaciones a
                     llegar a tu destino. Para asegurarte de todas estas cosas, puedes visitar
                     Sitio web de Travelflys y obtén una lista de los diferentes aeropuertos que puedes encontrar
                     con detalles adecuados de los servicios en consecuencia.</p>

                  <p>Si es flexible respecto de dónde le gustaría volar y hacia dónde le gustaría volar,
                     Puede buscar entre las múltiples opciones de aeropuertos en nuestro único sitio web.
                     No es necesario visitar el otro sitio web de un aeropuerto en particular, ya que
                     Puede encontrar todos los enlaces y datos de contacto del aeropuerto aquí en el
                     Sitio web de reservas Travelfly. A través de este sitio web, puede obtener múltiples
                     información del aeropuerto con detalles adicionales, incluido el servicio de equipaje,
                     asistencia especial, atención al cliente, check-in de vuelo, transporte
                     servicio, y más que usted busca en los aeropuertos.</p>
                </Col>
              </Row>


              <hr className='my-5'></hr>
              <h4 className='title title-border-bottom align-center offset-item animate font-weight-bold'>Principales oficinas de aerolíneas</h4>



              {
                allAirlines.length > 0 ?

                  <Row className='alldeals-vi'>
                    {allAirlines.filter((item) => item.status === "Active").map((item, i) => (
                      <Col xs={12} lg={6} xl={4} className="mb-4" key={i}>
                        <div className='post hover__box bog-border h-100 d-flex flex-column splitsm-box airline-bx'>

                          <div className="post__info d-flex align-items-center">
                            <ul className="post__category flex-grow-1">
                              <li>
                                <i className="bi bi-calendar4 mr-2"></i>{" "}
                                <span>
                                  <Moment date={item.postTime} format="MMM DD, YYYY" />
                                </span>
                              </li>
                            </ul> 
                          </div>
                             
                          <div className='media mt-2'>
                            <div className='media-body'>
                             <Link href={`/es/aerolineas/${item.url}`}>
                                  <a>
                              <h3 className='h4 title mt-0'>
                                {ReactHtmlParser(item.airline)}
                              </h3>
                              </a>
                                </Link>
                            </div>
                          </div>

                          <div className="flex-grow-1 mb-3">
                            <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                          </div>

                          <div>
                            <Link href={`/es/aerolineas/${item.url}`}>
                              <a className='btn btn-site ripple-effbtn btn-40'>
                                <span>Leer más <i className="bi bi-arrow-right ml-1"></i></span>
                              </a>
                            </Link>
                          </div>


                        </div>
                      </Col>
                    ))}
                  </Row>
                  : 'No se encontraron artículos !'
              }
            </Container>
          </div>



        </div>

        <Footer />

      </div>
    </>
  )
}


export const getStaticProps = async ({ params }) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "siteId": 109,
    "language": "es"
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  const res = await fetch("https://cms.travomint.com/airline_category/showAirlineCategorybySiteIdAndLanguage?authcode=Trav3103s987876", requestOptions)
  const json = await res.json()
  return {
    props: { allAirlines: json.response },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 60, // In seconds
  }
}