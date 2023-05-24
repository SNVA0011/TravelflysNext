import { useEffect, useState } from 'react'
import Link from 'next/link'
import Footer from '../../component/ru/Footer'
import Header from '../../component/ru/Navbar'
import Head from 'next/head'
import BlogTile from '../../component/ru/BlogTile'
import BreadHero from '../../component/ru/BreadHero'
import CallUkToast from '../../component/CallUkToast'

export default function Blog(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='blogdt-single'>


      <Head>
        <title>Статьи</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link
          rel="canonical"
          href={'https://www.travelflys.com/ru/blog'}
        />
      </Head>



      <div className="call-header d-none d-md-block">
        <div className="container">
          <a href="tel:+1 (802)-909-0003" className="footer-number-md">
            <i className="bi bi-telephone mr-2"></i>
            <div className="tfn-no d-inline-block">(USA) <span>+1 (802)-909-0003</span>
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


      <a href="tel:+1 (802)-909-0003" className="footer-number-md">
        <div className="tfn-no">
          <p>
            <i className="bi bi-telephone"></i> Как мы можем помочь ?<small>не стейсняйся спросить</small>
          </p>
          <span>
            <i className="bi bi-telephone mr-2 d-md-none"></i> +1 (802)-909-0003
          </span>
        </div>
      </a>



      <Header />

      <div className="blogadda">
        <div className="d-flex align-items-center justify-content-center flex-column page-title page-title--small page-title--blog text-center">
          <div className="container">
            <div className="page-title__content">
              <h1 className="page-title__name">Статьи </h1>
              <p className="page-title__slogan">Пусть наши специалисты вдохновят вас</p>
            </div>
          </div>
          <BreadHero
            linkhtml={
              <>
                <ul className="bradcum container">
                  <li>
                    <Link href="/ru/">Дом</Link>
                  </li>
                  <li className="mr-2">/</li>
                  <li aria-current="page">Статьи</li>
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
    "pageType": "ArticleRU",
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
