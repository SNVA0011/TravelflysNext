import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import BreadHero from '../component/BreadHero';
import { Button, Col, Row } from 'react-bootstrap';
import Link from "next/link"
import Head from 'next/head'
import Header from '../component/Navbar'
import Footer from "../component/Footer"
import Image from "next/image"


export default function Flights(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <> 
      <Head>
        <title>Usairling | Check Best and Cheap Flight With us Online</title>
        <meta name="description" content="Usairling is a reliable source for flight deals where your can book flights for all destinations across South America or world at the lowest airfares with us. " />
        <meta name="keywords" content="Usairling, cheap flight booking website, best place to book flight, online flight booking" />
        <link rel="canonical" href={'https://www.usairling.com/flights'} />
      </Head>


      <Header />

      <div className='blogadda'>

        <div className="page-title page-title--small page-title--blog align-left" >
          <div className="container">
            <div className="page-title__content">
              <h1 className="page-title__name">Flight </h1>
              <p className="page-title__slogan">Check Best Flight With us </p>
            </div>
          </div>
          <BreadHero linkhtml={<><ul className='bradcum'> <li > <Link href="/">Home</Link> </li> <li className='breadcrumb-item active' aria-current="page">Flights</li> </ul></>} />
        </div>


        <div className='popular-destination blogaddalist full-w m-0 pb-2'>
          <Container>
            <Row className='about-uspage privacy__policy full-w pyblock-80 my-5' id="content" >
              <Col md="12" >
                <h2>Be wise to get best flight deals quickly</h2>
                <p>A flight is required to book in advance when you need to get massive deals and offers to secure your booking to various destinations. If you wish to choose the best flight to book to your required destination, you can search for the best flights with reward points that you can use to get best flight deals at your suitable time. If you are curious to save more and looking for guidance to secure your booking, you need to know the essential trick you can find with the best customer representative team to assist you soo</p>


                <h2 className='mt-5 mb-2'>How to get the best deal on flight?</h2>
                <p>If you are willing to get the cheapest deal for the flight you have selected for the booking, you need to go through the trick provided by the professional team. If you are willing to get best deals on flights, you can achieve the safest deal to manage your flight that you can book at the lowest rate smoothly.</p>


                <h2 className='mt-5 mb-2'>Go through the ways to get the best deal on flight:</h2>

                <ul>
                  <li> First, keep your searches secret and ensure you can find the best flight with the deals and offers.</li>

                  <li>You can use the flight search by just getting the search engines that you can gain from the various websites.</li>

                  <li>Make sure you can identify the cheapest day to fly out from your present location and get a request for the deals using points.</li>

                  <li>If you have secured the free points and offers to achieve the best deals, you can fly for free and get valid details for a deal on flights.</li>

                  <li>You can book connecting flights where you can secure your booking with massive deals using miles and offers.</li>

                  <li>Ensure you can find the cheapest place to fly where you can imagine getting the best deals on flight after discussing your trip with the agent smoothly.</li>
                </ul>
                <br />
                <p>If you wish to get further details and valid information to get best flight deals, get in touch with the best customer representative team to assist you at your convenient time smoothly.</p>

              </Col>
            </Row>
          </Container>
        </div>
      </div>



      <section className="top_airlines_area">
        <Container>
          <Row className='justify-content-center'>
            <Col xs={12} md={12}>
              <h2 className="title title-border-bottom align-center offset-item animate">Popular Airlines</h2>
      
      
      
              {
              props.allflights.length > 0 ?

                <Row className='alldeals-vi justify-content-center'>
                  {props.allflights.filter((items) => items.pageType === 'Airline').map((items, i) => (
                    <Col xs={12} lg={4} sm={6} className="mb-4">
                      <Link href={`/flights/${items.url}-${items.pageValue}`}>
                        <a className="airplane-iconbx sm d-flex align-items-center h-100">
                        <div className="cities__thumb hover__box__thumb">
                        <Image src="/images/airplane-icon.png" alt="airlineone" width={58} height={58} layout='responsive'/>
                          
                        </div>
                        <div className="cities__info flex-grow-1">
                          <h3 className="cities__capital">{items.pageName}-{items.pageValue}</h3>
                        </div>
                        </a>
                      </Link>
                    </Col>
                  ))}
                </Row> 
                : 'No items found !'
            }
            </Col>
 

          </Row>
        </Container>
      </section>

      <Footer />

    </>
  )
}







export async function getServerSideProps() {
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
    "siteId": "145",
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