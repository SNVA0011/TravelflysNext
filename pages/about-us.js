import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link"
import Header from '../component/Navbar'
import Footer from "../component/Footer"
import Head from 'next/head'
import BreadHero from "../component/BreadHero";
import CallUkToast from "../component/CallUkToast";


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
            <i class="bi bi-telephone"></i> How Can We Help ?<small>Feel free to  Ask</small>
          </p>
          <span>
            <i class="bi bi-telephone mr-2 d-md-none"></i> +1 (802)-341-3448
          </span>
        </div>
      </a>

            <Head>
                <title>About us - Travelflys</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <link rel="canonical" href={'https://www.travelflys.com/about-us'} />
            </Head>

            <Header />

            <div className="d-flex align-items-center justify-content-center flex-column page-title page-title--small text-center" >
                <div className="container">
                    <div className="page-title__content">
                        <h1 className="page-title__name">About Us</h1>
                    </div>
                </div>
                <BreadHero linkhtml={<><ul className="bradcum container">
                    <li><Link href="/">Home</Link></li>
                    <li className='mr-2'>/</li>
                    <li className='breadcrumb-item active' aria-current="page">ABOUT US</li>
                </ul></>} />
            </div>



            <div className='about-uspage full-w pyblock-80'>
                <Container>
                    <Row>
                        <Col xs={12} xl={12} className='about-font-18 mb-4 about_area'>
                            <p>Air Travel can be a necessity or a leisure activity depending upon the passenger.
                                However, in the whole process, the protagonist of the story is the passenger or
                                the customer itself, and keeping the passenger happy is what matters the most.
                                The aviation industry itself believes in providing transparent guidance and
                                support to its passengers, and <strong>Travelflys</strong> is the platform that helps in filling up
                                the bridge between the passengers and the airline.</p>
                            <p>In the growing Internet era, we all tend to do effective work in the least possible
                                time, and that is why we at <strong>Travelflys</strong> allow you to make, manage and get the
                                required assistance from a single web page.</p>
                            <p>We know situations can somehow turn out to be against your situation. It can be
                                hard to make a successful booking or manage your booking accordingly; we
                                have a dedicated team of support professionals working throughout to provide
                                the best assistance to our customers.</p>
                            <p>If you are thinking about your next trip, do not give it a second thought and give
                                us a chance to make your experience more thrilling and mesmerizing. You can
                                take us by our word because we promise to provide a transparent commitment of
                                services while you choose us for your next international or domestic trip.</p>
                            <p>The choice is up to you, you can surf through our website and check different
                                deals and complete packages, or if you wish to get a new offer or you are flying
                                with us for the first time, you can call our customer support team and get a
                                customized offer to have a delightful and significant trip. Please hurry up and
                                move through the booking section to get the best in the market prices through
                                our platform <strong>Travelflys</strong> for your instant convenience and have a matchless
                                experience by flying through us to your desired destinations.</p>


                        </Col>

                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    );
}
