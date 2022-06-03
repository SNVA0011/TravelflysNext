import React, { useContext, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container' 
import Link from "next/link"
import Footer from '../../../component/es/Footer';
import Header from "../../../component/es/Navbar";
import BreadHero from '../../../component/es/BreadHero';
import Head from 'next/head'
import { useRouter } from 'next/router';
import Pageerror from "../../../component/es/Pageerror"

export default function BlogDetails(props, router) {
  const location = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Head>
        <title>{props.singleblog[0].title}</title>
        <meta name="description" content={props.singleblog[0].description} />
        <meta name="keywords" content={props.singleblog[0].keywords} />
        <link rel="canonical" href={'https://www.usairling.com/es/articulos' + props.singleblog[0].titleUrl} />
      </Head>

      <Header />

      {
        props.singleblog[0] != '' ?

          <div className='blogadda'>

            <div className="page-title page-title--small page-title--blog align-left" >
              <div className="container">
                <div className="page-title__content">
                  <h1 className="page-title__name">
                    {props.singleblog[0].title}
                  </h1> 
 
                    <BreadHero linkhtml={<><ul className='bradcum'> 
                  <li><Link href="/es/">Casa</Link> </li>
                  <li><Link href="/es/articulos">Articulos</Link></li> 
                  <li className='breadcrumb-item active' aria-current="page">
                  {props.singleblog[0].title}</li> </ul></>} />

                </div>
              </div>
            </div>

            <div className='popular-destination blogaddalist details full-w'>
              <Container>
                <div className='blogaddalist-round about-uspage privacy__policy full-w pyblock-80'>
                  <div className='blogaddalist-inner'>

                    <div className="blog-inner-box2">
                      {
                        props.singleblog[0].content === '' ?
                          <p className='pb-2'>No Content found</p>
                          :
                          <div dangerouslySetInnerHTML={{ __html: props.singleblog[0].content }}></div>
                      }
                    </div>

                  </div>
                </div>
              </Container>
            </div>

          </div>

          : <Pageerror />
      }


      <Footer />


    </>
  )
}



export async function getServerSideProps(context) {
  const { params } = context

  // single blogDetail 
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    "id": "",
    "title": "",
    "titleUrl": `${params.blogDetail}`,
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

  const res = await fetch("https://cms.travomint.com/news-article/naDataById?authcode=Trav3103s987876", requestOptions)
  const onejson = await res.json()

  return {
    props: ({
      singleblog: onejson.response
    })
  }
}
