import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link"
import Header from '../component/Navbar'
import Footer from "../component/Footer"
import Head from 'next/head'
import BreadHero from "../component/BreadHero";

export default function AboutUs() {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>Usairling | About Us | Usairling The Only Way To Go & Fly!</title>
        <meta name="description" content="Usairling vision has always been to develop and enhance the latest technologies into scalable travel solutions for today's savvy traveler.  " />
        <meta name="keywords" content="Usairling, cheap flight booking website, best place to book flight, online flight booking" />
        <link rel="canonical" href={'https://www.usairling.com/about-us'} />
      </Head>

      <Header />

      <div className="page-title page-title--small align-left" >
        <div className="container">
          <div className="page-title__content">
            <h1 className="page-title__name">About Us</h1>
           </div>
        </div>
        <BreadHero linkhtml={<><ul className='bradcum'> <li> 
          <Link href="/">Home</Link> </li> <li className='breadcrumb-item active' aria-current="page"> ABOUT US </li> </ul></>} />
      </div>

      <div className='about-uspage full-w pyblock-80'> 
        <Container>
          <Row>
            <Col xs={12} xl={12} className='about-font-18 mb-5 font-medium'> 
              <p className='mb-4'>Traveling is an activity that anybody may enjoy, and it is the source of joy for some people who appreciate visiting new areas. To make their vacation a success, most people contact a number of travel agencies so that everything may be organised properly. USAirling is dedicated to providing consumers with high-quality travel arrangements at the greatest possible price. We collaborate with you to manage all aspects of travel in a timely, ethical, and cost-effective manner. Our customers receive expert service, and they ensure that the customer benefits from the experience and the distinctive manner of catering our services that we offer.</p>
              <p>USAirling was founded with the goal of providing luxury vacations and unparalleled escorted tours. We not only provide you with a variety of exotic vacation packages, but we also modify them to meet your specific needs. The skilled team that we have takes pride in your careful planning of your vacation. We figure out how to make your vacation extra exceptional and then assist you in planning your ideal vacation. So come talk to us about your goals and desired destinations, and you'll see why our clients come back to us time and time again.</p>
            </Col>

          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
}
