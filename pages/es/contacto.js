import React, { useEffect } from 'react'
import Header from '../../component/es/Navbar'
import Footer from '../../component/es/Footer'
import Head from 'next/head'
import BreadHero from '../../component/es/BreadHero'
import Link from 'next/link'

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Head>
        <title>Contacto - airlingster</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="canonical" href={'https://www.travelflys.com/es/contacto'} />
      </Head>

      <Header />

      <div className="page-title page-title--small text-center">
        <div className="container">
          <div className="page-title__content">
            <h1 className="page-title__name">Contacta con nosotros</h1>
            <p className="page-title__slogan">Cuéntanos Contáctanos</p>
          </div>
        </div>
        <BreadHero
          linkhtml={
            <>
              <ul className="bradcum">
                <li>
                  <Link href="/es/">Casa</Link>
                </li>
                <li className='mr-2'>/</li>
                <li className="breadcrumb-item active" aria-current="page">
                  contacto
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
                  <h2>Nuestras Oficinas</h2>
                  <div className="contact-box">
                    <h3>London (HQ)</h3>
                    <p>Unit TAP.E, 80 Long Lane, London, SE1 4GT</p> <a href="#">Get Direction</a> </div>
                  <div className="contact-box">
                    <h3>Paris</h3>
                    <p>Station F, 2 Parvis Alan Turing, 8742, Paris France</p> <a href="#">Obtener dirección</a> </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="contact-form">
                  <h2>Ponte en contacto con nosotras</h2>
                  <form action="#" method="POST" className="form-underline">
                    <div className="field-inline">
                      <div className="field-input">
                        <input type="text" name="primer nombre" placeholder="primer nombre" /> </div>
                      <div className="field-input">
                        <input type="text" name="Apellido" placeholder="Apellido" /> </div>
                    </div>
                    <div className="field-input">
                      <input type="email" name="Email" placeholder="Email" /> </div>
                    <div className="field-input">
                      <input type="tel" name="tel" placeholder="Número de teléfono" /> </div>
                    <div className="field-textarea">
                      <textarea name="Mensaje" placeholder="Mensaje"></textarea>
                    </div>
                    <div className="field-submit">
                      <input type="submit" value="Enviar mensaje " className="btn" /> </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </>
  )
}
