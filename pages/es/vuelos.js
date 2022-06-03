import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import BreadHero from '../../component/es/BreadHero'
import { Button, Col, Row } from 'react-bootstrap'
import Link from 'next/link'
import Head from 'next/head'
import Header from '../../component/es/Navbar'
import Footer from '../../component/es/Footer'
import Image from 'next/image'

export default function Flights(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Head>
        <title>
          Usairling | Verifique el mejor y más barato vuelo con nosotros en
          línea
        </title>
        <meta
          name="description"
          content="Usairling es una fuente confiable de ofertas de vuelos donde puede reservar vuelos para todos los destinos de América del Sur o del mundo con las tarifas aéreas más bajas con nosotros."
        />
        <meta
          name="keywords"
          content="Usairling, cheap flight booking website, best place to book flight, online flight booking"
        />
        <link rel="canonical" href={'https://www.usairling.com/es/vuelos'} />
      </Head>

      <Header />

      <div className="blogadda">
        <div className="page-title page-title--small page-title--blog align-left">
          <div className="container">
            <div className="page-title__content">
              <h1 className="page-title__name">Vuelo</h1>
              <p className="page-title__slogan">Ver Mejor Vuelo Con Nosotros</p>
            </div>
          </div>



          <BreadHero
            linkhtml={
              <>
                <ul className="bradcum">
                  <li>
                    <Link href="/es/">Casa</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Vuelo
                  </li>
                </ul>
              </>
            }
          />



        </div>

        <div className="popular-destination blogaddalist full-w m-0 pb-2">
          <Container className=" pb-2">
            <Row   className="about-uspage privacy__policy full-w pyblock-80 my-5"
              id="content">
              <Col md="12">
                <h2>
                  Sea inteligente para obtener las mejores ofertas de vuelos
                  rápidamente
                </h2>

                <p>
                  Se requiere un vuelo para reservar con anticipación cuando
                  necesita obtener ofertas y ofertas masivas para asegurar su
                  reserva a varios destinos. Si desea elegir el mejor vuelo para
                  reservar a su destino requerido, puede buscar los mejores
                  vuelos con puntos de recompensa que puede usar para obtener
                  las mejores ofertas de vuelos en el momento adecuado. Si tiene
                  curiosidad por ahorrar más y busca orientación para asegurar
                  su reserva, necesita conocer el truco esencial que puede
                  encontrar con el mejor equipo de representantes del cliente
                  para ayudarlo.
                </p>

                <h2 className="mt-4 mb-2">
                  ¿Cómo conseguir la mejor oferta en vuelo?
                </h2>

                <p>
                  Si está dispuesto a obtener la oferta más barata para el vuelo
                  que ha seleccionado para la reserva, debe seguir el truco
                  proporcionado por el equipo profesional. Si está dispuesto a
                  obtener las mejores ofertas en vuelos, puede lograr la oferta
                  más segura para administrar su vuelo que puede reservar a la
                  tarifa más baja sin problemas.
                </p>

                <h2 className="mt-4 mb-2">
                  Revise las formas de obtener la mejor oferta en vuelo:
                </h2>

                <ul>
                  <li>
                    En primer lugar, mantenga sus búsquedas en secreto y
                    asegúrese de que puede encontrar el mejor vuelo con las
                    promociones y ofertas.
                  </li>

                  <li>
                    Puede usar la búsqueda de vuelos simplemente obteniendo los
                    motores de búsqueda que puede obtener de los diversos sitios
                    web.
                  </li>

                  <li>
                    Asegúrese de que puede identificar el día más barato para
                    volar desde su ubicación actual y obtener una solicitud de
                    ofertas usando puntos.
                  </li>

                  <li>
                    Si ha asegurado los puntos gratis y las ofertas para lograr
                    las mejores ofertas, puede volar gratis y obtener detalles
                    válidos para una oferta en vuelos.
                  </li>

                  <li>
                    Puede reservar vuelos de conexión donde puede asegurar su
                    reserva con ofertas masivas usando millas y ofertas.
                  </li>

                  <li>
                    Asegúrese de que puede encontrar el lugar más barato para
                    volar donde pueda imaginar obtener las mejores ofertas en
                    vuelos después de discutir su viaje con el agente sin
                    problemas.
                  </li>
                </ul>

                <p>
                  Si desea obtener más detalles e información válida para
                  obtener las mejores ofertas de vuelos, póngase en contacto con
                  el mejor equipo de representantes del cliente para que lo
                  ayude en el momento que le resulte más conveniente..
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <section className="top_airlines_area">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={12}>
              <h2 className="title title-border-bottom align-center offset-item animate">
                 Aerolíneas Populares 
              </h2>

              {props.allflights.length > 0 ? (
                <Row className="alldeals-vi justify-content-center">
                  {props.allflights
                    .filter((items) => items.pageType === 'AirlineE')
                    .map((items, i) => (
                      <Col xs={12} lg={4} sm={6} className="mb-4">
                        <Link href={`/es/vuelos/${items.url}-${items.pageValue}`}>
                          <a className="airplane-iconbx sm d-flex align-items-center h-100">
                            <div className="cities__thumb hover__box__thumb">
                              <Image
                                src="/images/airplane-icon.png"
                                alt="airlineone"
                                width={58}
                                height={58}
                                layout="responsive"
                              />
                            </div>
                            <div className="cities__info flex-grow-1">
                              <h3 className="cities__capital">
                                {items.pageName}-{items.pageValue}
                              </h3>
                            </div>
                          </a>
                        </Link>
                      </Col>
                    ))}
                </Row>
              ) : (
                'No items found !'
              )}
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  var myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')
  var raw = JSON.stringify({
    contentId: '',
    pageType: '',
    pageValue: '',
    pageName: '',
    metaTitle: '',
    metaKeyword: '',
    metaDesc: '',
    otherMeta: '',
    dealCode: '',
    dealTitle: '',
    contentTitle: '',
    contentData: '',
    contentImage: '',
    siteId: '145',
    status: '',
    count: '',
    url: '',
    modifyBy: '',
    modifyDate: '',
  })

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  }

  const res = await fetch(
    'https://cms.travomint.com/travoles-content/site-map?authcode=Trav3103s987876',
    requestOptions,
  )
  const json = await res.json()
  return {
    props: { allflights: json.response },
  }
}
