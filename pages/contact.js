import React, { useEffect } from 'react'
import Header from '../component/Navbar'
import Footer from '../component/Footer'
import Head from 'next/head'
import BreadHero from '../component/BreadHero'
import Link from 'next/link'
import CallUkToast from '../component/CallUkToast'

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
        <title>Contact us - Travelflys</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="canonical" href={'https://www.travelflys.com/contact'} />
      </Head>

      <Header />

      <div className="d-flex align-items-center justify-content-center flex-column page-title page-title--small text-center">
        <div className="container">
          <div className="page-title__content">
            <h1 className="page-title__name">Contact Us</h1>
          </div>
        </div> 
        <BreadHero
          linkhtml={
            <>
              <ul className="bradcum container">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li className='mr-2'>/</li>
                <li className="breadcrumb-item active" aria-current="page">
                  Contact
                </li>
              </ul>
            </>
          }
        />
      </div>

      <div className="about-uspage full-w pyblock-80">
        <div className="site-content site-contact">
          <div className="container mb-5">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-text">
                  <h2>Our Offices</h2>
                  <div className="contact-box">
                    <h3>London (HQ)</h3>
                    <p>Unit TAP.E, 80 Long Lane, London, SE1 4GT</p>

                    <a href="#">Get Direction</a>
                  </div>
                  <div className="contact-box">
                    <h3>Paris</h3>
                    <p>Station F, 2 Parvis Alan Turing, 8742, Paris France</p>

                    <a href="#">Get Direction</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-form">
                  <h2>Get in touch with us</h2>
                  <form action="#" method="POST" className="form-underline">
                    <div className="field-inline">
                      <div className="field-input">
                        <input
                          type="text"
                          name="first_name"
                          
                          placeholder="First Name"
                        />
                      </div>
                      <div className="field-input">
                        <input
                          type="text"
                          name="last_name"
                          
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="field-input">
                      <input
                        type="email"
                        name="email"
                        
                        placeholder="Email"
                      />
                    </div>
                    <div className="field-input">
                      <input
                        type="tel"
                        name="tel"
                        
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="field-textarea">
                      <textarea name="message" placeholder="Message"></textarea>
                    </div>
                    <div className="field-submit">
                      <input
                        type="submit"
                        
                        className="btn"
                        aria-label="submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
