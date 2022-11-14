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
        <title>Fights - Travelflys</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="canonical" href={'https://www.travelflys.com/flights'} />
      </Head>


      <Header />

      <div className='blogadda'>

        <div className="page-title page-title--small page-title--blog text-center" >
          <div className="container">
            <div className="page-title__content">
              <h1 className="page-title__name">Flight </h1>
              <p className="page-title__slogan">Check Best Flight With us </p>
            </div>
          </div>
          <BreadHero linkhtml={<><ul className='bradcum '>
            <li><Link href="/" className=''>Home</Link> </li>
            <li className='mr-2'>/</li>
            <li className='breadcrumb-item active ' aria-current="page">Flights</li> </ul></>} />
        </div>



        <div className='popular-destination blogaddalist full-w'>
          <Container>

            <Row className='content' id="content" >
              <Col md="12" >
                <h2>Be wise to get best flight deals quickly</h2>
                <p>A flight is required to book in advance when you need to get massive deals and offers to secure your booking to various destinations. If you wish to choose the best flight to book to your required destination, you can search for the best flights with reward points that you can use to get best flight deals at your suitable time. If you are curious to save more and looking for guidance to secure your booking, you need to know the essential trick you can find with the best customer representative team to assist you soo</p>


                <h2>How to get the best deal on flight?</h2>
                <p>If you are willing to get the cheapest deal for the flight you have selected for the booking, you need to go through the trick provided by the professional team. If you are willing to get best deals on flights, you can achieve the safest deal to manage your flight that you can book at the lowest rate smoothly.</p>


                <h2>Go through the ways to get the best deal on flight:</h2>

                <ul>
                  <li> First, keep your searches secret and ensure you can find the best flight with the deals and offers.</li>

                  <li>You can use the flight search by just getting the search engines that you can gain from the various websites.</li>

                  <li>Make sure you can identify the cheapest day to fly out from your present location and get a request for the deals using points.</li>

                  <li>If you have secured the free points and offers to achieve the best deals, you can fly for free and get valid details for a deal on flights.</li>

                  <li>You can book connecting flights where you can secure your booking with massive deals using miles and offers.</li>

                  <li>Ensure you can find the cheapest place to fly where you can imagine getting the best deals on flight after discussing your trip with the agent smoothly.</li>
                </ul>

                <p>If you wish to get further details and valid information to get best flight deals, get in touch with the best customer representative team to assist you at your convenient time smoothly.</p>

              </Col>
            </Row>


            <hr className='my-5'></hr>
            <h4 className='title title-border-bottom align-center offset-item animate font-weight-bold'>Top Flights Deals</h4>


            {
              props.allflights.length > 0 ?

                <Row className='alldeals-vi'>
                  {props.allflights.filter((items) => items.pageType === "Airline").map((items, i) => (
                    <Col xs={12} lg={6} xl={4} className="mb-4" key={i}>
                      <div className='blogaddalist-inner border p-3 departurevg'>
                        <div className='media'>
                        <i className="fa-solid fa-plane-departure d-flex align-items-center justify-content-center">
                          <Image src="/images/departures.png" alt='departures' width={40} height={40}></Image>
                          </i>
                          <div className='media-body'>
                            <h3 className='h4 title'>{items.pageName}-{items.pageValue}</h3>
                            <hr className="mx-row-hr" />
                            <Link href={`/flights/${items.url}-${items.pageValue}`}>
                              <a className='btn btn-site ripple-effbtn btn-40'>
                                <span>Read more</span>
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