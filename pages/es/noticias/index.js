import { useEffect, useState } from 'react'
import Link from "next/link";
import Head from 'next/head';
import Footer from "../../../component/es/Footer";
import Header from "../../../component/es/Navbar";
import BreadHero from "../../../component/es/BreadHero";
import NewsTile from '../../../component/es/NewsTile';
import CallUkToast from '../../../component/CallUkToast';


export default function News(props) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='blogdt-single'>

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
            <i className="bi bi-telephone"></i> Cómo podemos ayudar ?<small>Siéntete libre de preguntar</small>
          </p>
          <span>
            <i className="bi bi-telephone mr-2 d-md-none"></i> +1 (802)-909-0003
          </span>
        </div>
      </a>


      <Head>
        <title>Noticias de viajes - Travelflys</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="canonical" href={'https://www.travelflys.com/es/noticias/'} />
      </Head>

      <Header />

      <div className='blogadda'>

        <div className="d-flex align-items-center justify-content-center flex-column page-title page-title--small page-title--blog text-center" >
          <div className="container">
            <div className="page-title__content">
              <h1 className="page-title__name">Noticias </h1>
              <p className="page-title__slogan">Haciendo que viajar sea fácil</p>
            </div>
          </div>
          <BreadHero linkhtml={<><ul className="bradcum container">
            <li><Link href="/es/">Casa</Link></li>
            <li className='mr-2'>/</li>
            <li aria-current="page">Noticias</li>
          </ul>
          </>} />
        </div>


        <div className='popular-destination blogaddalist full-w'>
          <NewsTile allbloglist={props.allbloglist} />
        </div>

      </div>

      <Footer />
    </div>


  )
}



export const getStaticProps = async ({ params }) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    contentId: "",
    pageType: "noticias",
    pageValue: "",
    pageName: "",
    metaTitle: "",
    metaKeyword: "",
    metaDesc: "",
    otherMeta: "",
    dealCode: "",
    dealTitle: "",
    contentTitle: "",
    contentData: "",
    contentImage: "",
    siteId: "143",
    status: "",
    count: "",
    url: "",
    modifyBy: "",
    modifyDate: "",
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

