import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import Link from "next/link";
import Container from 'react-bootstrap/Container';
import BreadHero from "../../component/BreadHero";
import Header from '../../component/Navbar'
import Footer from "../../component/Footer"
import Pageerror from "../../component/Pageerror"


export default function Airline(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  console.log('props.singleflight-', props.singleflight)

  return (
    <>
   <Header />

      {
        props.singleflight?.length > 0 ?
          <>

            <Head>
              <title>{props.singleflight[0].metaTitle}</title>
              <meta name="description" content={props.singleflight[0].metaDesc} />
              <meta name="keywords" content={props.singleflight[0].metaKeyword} />
              <link rel="canonical" href={`https://www.travelflys.com/flights/${props.singleflight[0].url}-${props.singleflight[0].pageValue}`} />
            </Head>

         
            <div className='blogadda'>

              
            <div className="page-title page-title--small page-title--blog text-center">
            <div className="container">
                    <div className="page-title__content">
                      <h1 className="page-title__name">{props.singleflight[0].metaTitle}</h1>
                       <BreadHero linkhtml={<>
                        <ul className='bradcum'>
                          <li> <Link href="/">Home</Link> </li>
                          <li className='mr-2'>/</li> 
                          <li> <Link href="/flights">FLIGHTS</Link> </li>
                          <li className='mr-2'>/</li> 
                           <li aria-current="page">{props.singleflight[0].metaTitle}</li> </ul> </>} />
                    </div>
                  </div>
              </div>

 
              <div className='popular-destination blogaddalist details full-w'>
                <Container>
                <div className='blogaddalist-round'>
                      <div className='blogaddalist-inner'> 
                        <div className="blog-inner-box2">
                        {props.singleflight[0].contentData.length == 0 ?
                          <p className='pb-2'>No Content found</p>
                          :
                          <div  className='blog-p  mb-5 content-ullist' dangerouslySetInnerHTML={{ __html: props.singleflight[0].contentData }}></div>
                        }
                        </div>
                      </div>
                    </div>
                </Container>
              </div>
            </div>
          </>
          :  <Pageerror />
      }


      <Footer />
    </>
  )
}


export async function getServerSideProps(context) {
  const { params } = context
  const pageurl = params.Airline

  var cityname = pageurl.split("-")[2]
  let actualURLParts = pageurl.split("-")

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
 
  var raw = JSON.stringify({
    "contentId": "",
    "pageType": "Airline",
    "pageValue": cityname,
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
    "url": actualURLParts[0] + '-' + actualURLParts[1],
    "modifyBy": "",
    "modifyDate": ""
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const res = await fetch("https://cms.travomint.com/travoles-content/showcontent?authcode=Trav3103s987876", requestOptions)
  const json = await res.json()
  return {
    props: { singleflight: json.response }
  }
}