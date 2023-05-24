import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import Link from "next/link";
import Container from 'react-bootstrap/Container';
import BreadHero from "../../../component/es/BreadHero";
import Header from '../../../component/es/Navbar'
import Footer from "../../../component/es/Footer"
import Pageerror from "../../../component/es/Pageerror"
import { useRouter } from "next/router";
import CallUkToast from '../../../component/CallUkToast';



export default function Airline(props) {
  const location = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])



  if (location.isFallback) {
    return <>
      <Header />

      <div className='text-center full-w my-5 py-5'>
        <div className="spinner-border text-secondary mr-2" role="status">
        </div> 
      </div>

      <Footer />
    </>
  }


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


      <Header />

      {
        props.singleflight?.length > 0 ?
          <>

            <Head>
              <title>{props.singleflight[0].metaTitle}</title>
              <meta name="description" content={props.singleflight[0].metaDesc} />
              <meta name="keywords" content={props.singleflight[0].metaKeyword} />
              <link rel="canonical" href={`https://www.travelflys.com/es/vuelos/${props.singleflight[0].url}-${props.singleflight[0].pageValue}`} />
            </Head>


            <div className='blogadda'>


              <div className="d-flex align-items-center justify-content-center flex-column page-title page-title--small page-title--blog text-center">
                <div className="container">
                  <div className="page-title__content">
                    <div className="page-title__name">  Detalles del vuelo </div> 
                    <p className="page-title__slogan" dangerouslySetInnerHTML={{
                      __html: props.singleflight[0].metaTitle }}></p>
                  </div>
                </div>

                <BreadHero linkhtml={<>
                  <ul className="bradcum container">
                    <li> <Link href="/es/">Casa</Link> </li>
                    <li className='mr-2'>/</li>
                    <li> <Link href="/es/vuelos">VUELOS</Link> </li>
                    <li className='mr-2'>/</li>
                    <li aria-current="page">{props.singleflight[0].metaTitle}</li> </ul> </>} />
              </div>


              <div className='popular-destination blogaddalist details full-w'>
                <Container>
                  <div className='blogaddalist-round'>
                    <div className='blogaddalist-inner'>
                      <div className="blog-inner-box2">
                        {props.singleflight[0].contentData.length == 0 ?
                          <p className='pb-2'>No Content found</p>
                          :
                          <div className='blog-p  mb-5 content-ullist' dangerouslySetInnerHTML={{ __html: props.singleflight[0].contentData }}></div>
                        }
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          </>
          : <Pageerror />
      }


      <Footer />
    </div>
  )
}


export async function getStaticProps(context) {
  const { params } = context
  const pageurl = params.Airline

  var cityname = pageurl.split("-")[2]
  let actualURLParts = pageurl.split("-")

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    contentId: "",
    pageType: "AirlineE",
    pageValue: cityname,
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
    url: actualURLParts[0] + '-' + actualURLParts[1],
    modifyBy: "",
    modifyDate: "",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const res = await fetch("https://cms.travomint.com/travoles-content/showcontent?authcode=Trav3103s987876", requestOptions)
  const json = await res.json()
  return {
    props: { singleflight: json.response },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 60, // In seconds
  }
}



// paths -> slugs which are allowed
export const getStaticPaths = async () => {
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
  const data = json.response;

  // fallback ->
  let paths = [];

  data.forEach((post) => {
    paths.push({
      params: { Airline: post.url + "-" + post.pageValue }
    })
  })

  return {
    paths,
    fallback: true
  }
}