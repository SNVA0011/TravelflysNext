import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import Link from "next/link";
import Container from 'react-bootstrap/Container';
import BreadHero from "../../../component/BreadHero";
import Header from '../../../component/Navbar'
import Footer from "../../../component/Footer"
import Pageerror from "../../../component/Pageerror"
import { useRouter } from "next/router";
import CallUkToast from '../../../component/CallUkToast';
import { siteId } from '../../../utils/static';
import Moment from 'react-moment';
import { Col, Row } from 'react-bootstrap';
import OtherOffices from '../../../component/OtherOffices';
import ReactHtmlParser from 'react-html-parser';



export default function Slug({ allAirport, MetaAirport }) {
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


      <CallUkToast />

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

      {
        allAirport?.length > 0 && MetaAirport?.length > 0 ?
          <>

            <Head>
              <title>{ReactHtmlParser(MetaAirport[0].title)}</title>
              <meta name="description" content={ReactHtmlParser(MetaAirport[0].description)} />
              <meta name="keywords" content={ReactHtmlParser(MetaAirport[0].keyword)} />
              <link rel="canonical" href={`https://www.travelflys.com/airlines/${MetaAirport[0].url}`} />
            </Head>


            <div className='blogadda'>


              <div className="d-flex align-items-center justify-content-center flex-column page-title page-title--small page-title--blog text-center">
                <div className="container">
                  <div className="page-title__content">
                    <h1 className="page-title__name">{ReactHtmlParser(MetaAirport[0].airline)}</h1>
                    <p className="page-title__slogan" dangerouslySetInnerHTML={{
                      __html: ReactHtmlParser(MetaAirport[0].title)
                    }}></p>
                  </div>
                </div>
                <BreadHero linkhtml={<>
                  <ul className="bradcum container">
                    <li> <Link href="/">Home</Link> </li>
                    <li className='mr-2'>/</li>
                    <li> <Link href="/airlines">Airlines office</Link> </li>
                    <li className='mr-2'>/</li>
                    <li aria-current="page">{ReactHtmlParser(allAirport[0].title)}</li> </ul> </>} />
              </div>

              <OtherOffices
                  MetaAirport={MetaAirport}
                  heading={['Top','Offices']}
                  path={`/airlines`}
                  readMore={`Read more`}
                  viewMore={`View more`}
                  viewMoreBtn={false}
                  allAirport={allAirport}
                  relatedBottom={allAirport.length}
                /> 

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
  const pageurl = params.Slug

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");


  // Meta Tags 
  const res = await fetch("https://cms.travomint.com/airline_category/showAirlineCategoryBySiteIdAndUrl?authcode=Trav3103s987876", {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({
      "siteId": siteId,
      "language": "eng",
      "url": pageurl
    }),
    redirect: 'follow'
  });
  const getMeta = await res.json();


  // All Airport
  const resAir = await fetch("https://cms.travomint.com/airline-blog/showAirlineBlogList?authcode=Trav3103s987876", {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({
      "siteId": siteId,
      "pageType": pageurl
    }),
    redirect: 'follow'
  });
  const getAirport = await resAir.json();

  return {
    props: {
      MetaAirport: getMeta.response,
      allAirport: getAirport.response
    }, 
    revalidate: 60, // In seconds
  }
}



// paths -> slugs which are allowed
export const getStaticPaths = async () => {
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
  const res = await fetch("https://cms.travomint.com/travoles-content/site-map?authcode=Trav3103s987876", requestOptions)
  const json = await res.json()
  const data = json.response;

  // fallback ->
  let paths = [];

  data.forEach((post) => {
    paths.push({
      params: { Slug: post.url }
    })
  })

  return {
    paths,
    fallback: true
  }
}

