import { useEffect, useState } from 'react'
import Link from "next/link"
import Footer from '../../component/es/Footer';
import Header from "../../component/es/Navbar";
import Head from 'next/head';
import BlogTile from '../../component/es/BlogTile';
import BreadHero from '../../component/es/BreadHero'


export default function Blog(props) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Head>
        <title>Usairling | Obtenga las últimas actualizaciones es Artículos</title>
        <meta name="description" content="Obtenga las últimas actualizaciones en blogs para vuelos, automóviles, reservas de hoteles, etc." />
        <meta name="keywords" content="actualizaciones de reservas de vuelos, actualizaciones de reservas de automóviles, actualizaciones de reservas de hoteles" />
        <link rel="canonical" href={'https://www.usairling.com/es/articulos'} />
      </Head>

      <Header />

      <div className='blogadda'>

      <div className="page-title page-title--small page-title--blog align-left" >
            <div className="container">
              <div className="page-title__content">
                <h1 className="page-title__name">Artículos </h1>
                <p className="page-title__slogan">Deja que nuestros expertos te inspiren</p>
              </div>

            </div>
            <BreadHero linkhtml={<>
              <ul className='bradcum'> 
                <li><Link href="/es/">Home</Link> </li> 
                <li className='breadcrumb-item active' aria-current="page">Artículos</li>
              </ul>
            </>} />
          </div>

        <div className='popular-destination blogaddalist full-w'>
          <BlogTile allbloglist={props.allbloglist} />
        </div>
      </div>

      <Footer />
    </>


  )
}



export async function getServerSideProps() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");


  var raw = JSON.stringify({
    "id": "",
    "title": "",
    "titleUrl": "",
    "content": "",
    "description": "",
    "keywords": "",
    "posttime": "",
    "status": "",
    "heading": "",
    "categoryName": "",
    "siteId": "145",
    "pageType": "Articulo",
    "extraTag": "",
    "tfnHeader": "",
    "tfnFooter1": "",
    "tfnFooter2": "",
    "tfnFooter3": "",
    "tfnPopup": ""
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const res = await fetch("https://cms.travomint.com/news-article/showNAdata?authcode=Trav3103s987876", requestOptions)
  const json = await res.json()
  return {
    props: { allbloglist: json.response }
  }
}

