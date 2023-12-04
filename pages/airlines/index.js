import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import BreadHero from '../../component/BreadHero';
import { Button, Col, Row } from 'react-bootstrap';
import Link from "next/link"
import Head from 'next/head'
import Header from '../../component/Navbar'
import Footer from "../../component/Footer"
import Image from "next/image"
import CallUkToast from '../../component/CallUkToast';
import { siteId } from '../../utils/static';
import Moment from 'react-moment';
import ReactHtmlParser from 'react-html-parser';


export default function Flights({ allAirlines }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Head>
        <title>Airlines Offices - Travelflys</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="canonical" href={'https://www.travelflys.com/airlines'} />
      </Head>

      <div className='blogdt-single'>
        <div className="call-header d-none d-md-block">
          <div className="container">
            <a href="tel:+1 (802)-341-3448" className="footer-number-md">
              <i className="bi bi-telephone mr-2"></i>
              <div className="tfn-no d-inline-block">(USA) <span>+1 (802)-341-3448</span>
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

        <a href="tel:+1 (802)-341-3448" className="footer-number-md">
          <div className="tfn-no">
            <p>
              <i className="bi bi-telephone"></i> How Can We Help ?<small>Feel free to  Ask</small>
            </p>
            <span>
              <i className="bi bi-telephone mr-2 d-md-none"></i> +1 (802)-341-3448
            </span>
          </div>
        </a>




        <Header />

        <div className='blogadda'>

          <div className="d-flex align-items-center justify-content-center flex-column page-title page-title--small page-title--blog text-center" >
            <div className="container">
              <div className="page-title__content">
                <h1 className="page-title__name">Airlines Offices </h1>
                <p className="page-title__slogan">Best Airlines Offices</p>
              </div>
            </div>
            <BreadHero linkhtml={<><ul className='bradcum container'>
              <li><Link href="/" className=''>Home</Link> </li>
              <li className='mr-2'>/</li>
              <li className='breadcrumb-item active ' aria-current="page">Airlines Offices</li> </ul></>} />
          </div>



          <div className='popular-destination blogaddalist full-w'>
            <Container>

              <Row className='content' id="content" >
                <Col md="12" >
                  <h2 className='mb-3'>A comprehensive guide to airports at Travelflys.com</h2>

                  <p className='mb-3'>The Travelflys.com website provides up-to-date information about
                    domestic and international airports along with their services and
                    facilities. When you plan your tour to your intended destination, you
                    always look for a comfortable, safe, and hassle-free flight journey to
                    reach your destination. To ensure all these things, you can visit
                    Travelflys website and get a list of the different airports you can find
                    with adequate details of services accordingly.</p>

                  <p>If you are flexible about where you would like to fly from and fly to,
                    you can search with the multiple airport options on our single website.
                    You don't need to visit the other website for a particular airport, as
                    you can find all the airport's links and contact details here on the
                    Travelfly booking website. Through this website, you may get multiple
                    airport information with additional details, including baggage service,
                    special assistance, customer support, flight check-in, transportation
                    service, and more that you seek at the airports.</p>
                </Col>
              </Row>


              <hr className='my-5'></hr>
              <h4 className='title title-border-bottom align-center offset-item animate font-weight-bold'>Top Airlines Offices</h4>



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
                             <Link href={`/airlines/${item.url}`}>
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
                            <Link href={`/airlines/${item.url}`}>
                              <a className='btn btn-site ripple-effbtn btn-40'>
                                <span>Read more <i className="bi bi-arrow-right ml-1"></i></span>
                              </a>
                            </Link>
                          </div>


                        </div>
                      </Col>
                    ))}
                  </Row>
                  : <p className="text-center">No items found !</p>
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
    "siteId": siteId,
    "language": "eng"
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