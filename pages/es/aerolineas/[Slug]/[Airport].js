import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import Link from "next/link";
import Container from 'react-bootstrap/Container';
import BreadHero from "../../../../component/es/BreadHero";
import Header from '../../../../component/es/Navbar'
import Footer from "../../../../component/es/Footer"
import Pageerror from "../../../../component/es/Pageerror"
import { useRouter } from "next/router";
import CallUkToast from '../../../../component/CallUkToast';
import { siteId } from '../../../../utils/static';
import { Col, Row } from 'react-bootstrap';
import OtherOffices from '../../../..//component/OtherOffices';
import ReactHtmlParser from 'react-html-parser';



export default function Airport({ singleAirport, allAirport }) {
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
        singleAirport?.length > 0 ?
          <>

            <Head>
              <title>{ReactHtmlParser(singleAirport[0].title)}</title>
              <meta name="description" content={ReactHtmlParser(singleAirport[0].description)} />
              <meta name="keywords" content={ReactHtmlParser(singleAirport[0].keyword)} />
              <link rel="canonical" href={`https://www.travelflys.com/es/aerolineas/${singleAirport[0].pageType}/${singleAirport[0].url}`} />
            </Head>


            <div className='blogadda'>


              <div className="d-flex align-items-center justify-content-center flex-column page-title page-title--small page-title--blog text-center">
                <div className="container">
                  <div className="page-title__content">
                    <h1 className="page-title__name">{ReactHtmlParser(singleAirport[0].heading)}</h1>
                    <p className="page-title__slogan" dangerouslySetInnerHTML={{
                      __html: ReactHtmlParser(singleAirport[0].title)
                    }}></p>
                  </div>
                </div>
                <BreadHero linkhtml={<>
                  <ul className="bradcum container">
                    <li><Link href="/es/">Casa</Link> </li>
                    <li className='mr-2'>/</li>
                    <li> <Link href="/es/aerolineas">Oficinas de aerolíneas</Link> </li>
                    <li className='mr-2'>/</li>
                    <li> <Link href={`/es/aerolineas/${singleAirport[0].pageType}`}>{singleAirport[0].pageType.replaceAll('-', ' ')}</Link> </li>
                    <li className='mr-2'>/</li>
                    <li aria-current="page">{singleAirport[0].heading}</li> </ul> </>} />
              </div>


              <div className='popular-destination blogaddalist details full-w'>
                <Container>
                  <div className='blogaddalist-round'>
                    <div className='blogaddalist-inner'>
                      <div className="blog-inner-box2">
                        {singleAirport[0].content.length == 0 ?
                          <p className='pb-2'>No Content found</p>
                          :
                          <>
                            <h2 className='d-flex'><i class="bi bi-arrow-90deg-down epo"></i> {ReactHtmlParser(singleAirport[0].heading)}</h2>
                            <div className='locatinner-wrap'>
                              <Row>
                                <Col xs={12} lg={6} xl={4}>
                                  <div className="locatinner-ldt">
                                    <p className="locdt-p d-flex">
                                     <i className="bi bi-geo-alt"></i> {singleAirport[0].contactInfo} 
                                    </p>
                                    <p className="locdt-p">
                                      <a href={`mailto:${singleAirport[0].email}`} className='d-flex'><i className="bi bi-envelope"></i> {singleAirport[0].email}</a>
                                    </p>
                                    <p className="locdt-p d-flex">
                                      <i className="bi bi-clock-history"></i> Every day - 24hrs
                                    </p>
                                    <hr className='my-4'></hr>
                                    <p className="noteinhead">
                                      <strong>Note:</strong>
                                      <div className='noteinhead-inp'>
                                        {singleAirport[0].note}
                                      </div>
                                    </p>
                                  </div>
                                </Col>
                                <Col xs={12} lg={6} xl={4}>
                                  <div class="locatinner-ldt">
                                    <h4 className='mt-0'>Contact Information :-</h4>
                                    <a href={singleAirport[0].weblink} target="_blank" className='d-flex'><i class="bi bi-globe2"></i>{singleAirport[0].weblink}</a>
                               
                                    <div className='mt-5'>
                                      <h4 class="title-dtair mt-flw">Social Media Links :-</h4>
                                      <div className='footer__top__nav footer__top__nav--contact '>
                                        <ul className='m-0'>
                                          <li class="facebook"><a target="_blank" title="Facebook" href={singleAirport[0].facebookLink}><i class="bi bi-facebook"></i></a></li>
                                          <li class="twitter"><a target="_blank" title="Twitter" href={singleAirport[0].twitterLink}><i class="bi bi-twitter"></i></a></li>
                                          <li class="instagram"><a target="_blank" title="Instagram" href={singleAirport[0].instaLink}><i class="bi bi-instagram"></i></a></li>
                                          <li class="youtube"><a target="_blank" title="Youtube" href={singleAirport[0].youtubeLink}><i class="bi bi-youtube"></i></a></li>
                                        </ul>
                                      </div>

                                    </div>
                                  </div>
                                </Col>
                              </Row>
                            </div>


                            <div className='blog-p  mb-5 content-ullist' dangerouslySetInnerHTML={{ __html: singleAirport[0].content }}></div>

                          </>
                        }
                      </div>
                    </div>
                  </div>
                </Container>

                <hr className='my-5 sepair'></hr>

                {singleAirport && allAirport ?
                  <OtherOffices
                    MetaAirport={[
                      {
                        'airline': 'Other',
                        'url': singleAirport[0].pageType,
                      }
                    ]}
                    heading={['Principales','oficinas']}
                    path={`/es/aerolineas/`}
                    readMore={`Leer más`}
                    viewMore={`Ver más`}
                    viewMoreBtn={true}
                    viewMorePath={`/es/aerolineas/${singleAirport[0].pageType}`}
                    allAirport={allAirport}
                    relatedBottom={6}
                  />
                  : null
                }



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

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");


  // Single Airport
  const res = await fetch("https://cms.travomint.com/airline-blog/showAirlineblogContent?authcode=Trav3103s987876", {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({
      "siteId": siteId,
      "pageType": params.Slug,
      "language": "es",
      "url": params.Airport
    }),
    redirect: 'follow'
  })
  const json = await res.json()


  // All Airport
  const resAir = await fetch("https://cms.travomint.com/airline-blog/showAirlineBlogList?authcode=Trav3103s987876", {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({
      "siteId": siteId,
      "pageType": params.Slug
    }),
    redirect: 'follow'
  });
  const getAirport = await resAir.json();


  return {
    props: {
      singleAirport: json.response,
      allAirport: getAirport.response
    },
    revalidate: 60, // In seconds
  }
}


// paths -> slugs which are allowed
export const getStaticPaths = async () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");


  const resCatg = await fetch("https://cms.travomint.com/airline_category/showAirlineCategorybySiteIdAndLanguage?authcode=Trav3103s987876", {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({
      "siteId": siteId,
      "language": "es"
    }),
    redirect: 'follow'
  })
  const jsonCatg = await resCatg.json()
  const CatgList = jsonCatg.response;

  CatgList.map((item) => (
    asyncGetairline(item.url)
  ));


  let paths = [];
  async function asyncGetairline(url) {
    const res = await fetch("https://cms.travomint.com/airline-blog/showAirlineBlogList?authcode=Trav3103s987876", {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        "siteId": siteId,
        "pageType": url
      }),
      redirect: 'follow'
    })
    const json = await res.json()
    const data = json.response;

    // fallback ->  
    data.forEach((post) => {
      paths.push({
        params: {
          Slug: post.pageType,
          Airport: post.url,
        }
      })
    })
  }

  return {
    paths,
    fallback: true
  }
}


