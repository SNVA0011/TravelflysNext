import { useEffect, useState } from 'react'
import Link from 'next/link'
import Footer from '../../component/es/Footer'
import Header from '../../component/es/Navbar'
import Head from 'next/head'
import BlogTile from '../../component/es/BlogTile'
import BreadHero from '../../component/es/BreadHero'

export default function Blog(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='blogdt-single'>

<div className="call-header d-none d-md-block">
        <div className="container">
          <a href="tel:+1 (802)-909-0003" class="footer-number-md">
            <i class="bi bi-telephone mr-2"></i>
            <div class="tfn-no d-inline-block"><span>+1 (802)-909-0003</span>
            </div>
          </a>
        </div>
      </div>


      <a href="tel:+1 (802)-909-0003" className="footer-number-md">
        <div className="tfn-no">
          <p>
            <i class="bi bi-telephone"></i> Cómo podemos ayudar ?<small>Siéntete libre de preguntar</small>
          </p>
          <span>
            <i class="bi bi-telephone mr-2 d-md-none"></i> +1 (802)-909-0003
          </span>
        </div>
      </a>

    
      <Head>
        <title>Artículos</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link
          rel="canonical"
          href={'https://www.travelflys.com/es/articulos'}
        />
      </Head>

      <Header />

      <div className="blogadda">
        <div className="d-flex align-items-center justify-content-center flex-column page-title page-title--small page-title--blog text-center">
          <div className="container">
            <div className="page-title__content">
              <h1 className="page-title__name">Artículos </h1>
              <p className="page-title__slogan">Deja que nuestras expertas te inspiren</p>
            </div>
          </div>
          <BreadHero
            linkhtml={
              <>
                <ul className="bradcum container">
                  <li> 
                    <Link href="/es/">Casa</Link>
                  </li>
                  <li className="mr-2">/</li>
                  <li aria-current="page">Artículos</li>
                </ul>
              </>
            }
          />
        </div>

        <div className="popular-destination blogaddalist full-w">
          <BlogTile allbloglist={props.allbloglist} />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  var myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')

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
    "siteId": "143",
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
    props: { allbloglist: json.response },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 60, // In seconds
  }
}
