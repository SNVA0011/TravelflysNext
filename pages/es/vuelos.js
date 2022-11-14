import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import BreadHero from '../../component/es/BreadHero';
import { Button, Col, Row } from 'react-bootstrap';
import Link from "next/link"
import Head from 'next/head'
import Header from '../../component/es/Navbar'
import Footer from "../../component/es/Footer"
import Image from "next/image"


export default function Flights(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Head>
        <title>Vuelos</title>
        <meta name="description" content="Get Latest information about Airlines, holiday packages, flight tickets booking deals and the airlines latest policies through our blog." />
        <meta name="keywords" content="last minute flights, Flight booking online, cheap airlines ticket booking, cheap flight tickets, airlines reservations online, airlines reservations, Flight booking, Airline Tickets, Travel Agency" />
        <link rel="canonical" href={'https://www.travelflys.com/es/vuelos'} />
      </Head>

      <Header />

      <div className='blogadda'>

        <div className="page-title page-title--small page-title--blog text-center" >
            <div className="container">
              <div className="page-title__content">
                <h1 className="page-title__name">Vuelos</h1>
                <span>Más reciente <span>Vuelos</span></span>
                <BreadHero linkhtml={<><ul className='bradcum '> 
                <li > <Link href="/es/">Casa</Link> </li>
                <li className='mr-2'>/</li> 
                <li className='breadcrumb-item active text-white' aria-current="page">Vuelos</li> </ul></>} />
              </div>
            </div>
          </div>



        <div className='popular-destination blogaddalist full-w'>
          <Container>

          <Row>
                <Col md="12" id="content" >
                  <h2>Sea inteligente para obtener las mejores ofertas de vuelos rápidamente</h2>
                  <p>Se requiere un vuelo para reservar con anticipación cuando necesita obtener ofertas y ofertas masivas para asegurar su reserva a varios destinos. Si desea elegir el mejor vuelo para reservar a su destino requerido, puede buscar los mejores vuelos con puntos de recompensa que puede usar para obtener las mejores ofertas de vuelos en el momento adecuado. Si tiene curiosidad por ahorrar más y busca orientación para asegurar su reserva, necesita conocer el truco esencial que puede encontrar con el mejor equipo de representantes del cliente para ayudarlo.</p>
                  <h2>¿Cómo conseguir la mejor oferta en vuelo?</h2>
                  <p>Si está dispuesto a obtener la oferta más barata para el vuelo que ha seleccionado para la reserva, debe seguir el truco proporcionado por el equipo profesional. Si está dispuesto a obtener las mejores ofertas en vuelos, puede lograr la oferta más segura para administrar su vuelo que puede reservar a la tarifa más baja sin problemas.</p>
                  <h2>Revise las formas de obtener la mejor oferta en vuelo:</h2>
                  <ul>
                    <li>En primer lugar, mantenga sus búsquedas en secreto y asegúrese de que puede encontrar el mejor vuelo con las promociones y ofertas.</li>
                    <li>You can use the flight search by just getting the search engines that you can gain from the various websites.</li>
                    <li>Puede utilizar la búsqueda de vuelos simplemente obteniendo los motores de búsqueda que puede obtener de los distintos sitios web.</li>
                    <li>Si ha asegurado los puntos gratuitos y las ofertas para lograr las mejores ofertas, puede volar gratis y obtener detalles válidos para una oferta en vuelos.</li>
                    <li>Puede reservar vuelos de conexión donde puede asegurar su reserva con ofertas masivas usando millas y ofertas.</li>
                    <li>Si desea obtener más detalles e información válida para obtener las mejores ofertas de vuelos, póngase en contacto con el mejor equipo de representantes del cliente para que lo ayude en el momento que le resulte más conveniente.</li>
                  </ul>
                  <p></p>
                </Col>
              </Row>


            <hr className='my-5'></hr>
            <h4 className='title title-border-bottom align-center offset-item animate font-weight-bold'>Principales ofertas de vuelos</h4>


            {
              props.allflights.length > 0 ?

                <Row className='alldeals-vi'>
                  {props.allflights.filter((items) => items.pageType === "AirlineE").map((items, i) => ( 
                    <Col xs={12} lg={6} xl={4} className="mb-4" key={i}>
                      <div className='blogaddalist-inner border p-3 departurevg'>
                        <div className='media'>
                          <i className="fa-solid fa-plane-departure d-flex align-items-center justify-content-center">
                          <Image src="/images/departures.png" alt='departures' width={40} height={40}></Image>
                          </i>
                          <div className='media-body'>
                            <h3 className='h4 title'>{items.pageName}-{items.pageValue}</h3>
                            <hr className="mx-row-hr" />
                            <Link href={`/es/vuelos/${items.url}-${items.pageValue}`}>
                              <a className='btn btn-site ripple-effbtn btn-40'>
                                <span>Lee mas</span>
                              </a>
                            </Link>
                          </div>
                        </div>


                      </div>
                    </Col>
                  ))}
                </Row>
                : 'No items found !'
            }
          </Container>
        </div>







      </div>

      <Footer />

    </>
  )
}


export const getStaticProps = async ({ params }) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "contentId": "",
    "pageType": "",
    "pageValue": "",
    "pageName": "",
    "metaTitle": "",
    "metaKeyword": "",
    "metaDesc": "",
    "otherMeta": "",
    "dealCode": "",
    "dealTitle": "",
    "contentTitle": "",
    "contentData": "",
    "contentImage": "",
    "siteId": "143",
    "status": "",
    "count": "",
    "url": "",
    "modifyBy": "",
    "modifyDate": ""
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const res = await fetch("https://cms.travomint.com/travoles-content/site-map?authcode=Trav3103s987876", requestOptions)
  const json = await res.json()
  return {
    props: { allflights: json.response }
  }
}