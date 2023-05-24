import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import Footer from "../../component/Footer";
import Header from "../../component/Navbar";
import BreadHero from "../../component/BreadHero";
import Head from "next/head";
import { useRouter } from "next/router";
import Pageerror from "../../component/Pageerror";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Moment from 'react-moment';
import CallUkToast from "../../component/CallUkToast";

export default function Detail(props, router) {
  const location = useRouter();


  const [loading, setLoading] = useState(false);
  useEffect(() => {
    location.events.on("routeChangeStart", () => {
      window.scrollTo(0, 0);
      setLoading(true);
    });
    location.events.on("routeChangeComplete", () => setLoading(false));
    location.events.on("routeChangeError", () => setLoading(false));
    return () => {
      location.events.off("routeChangeStart", () => {
        window.scrollTo(0, 0);
        setLoading(true);
      });
      location.events.off("routeChangeComplete", () => setLoading(false));
      location.events.off("routeChangeError", () => setLoading(false));
    };
  }, [location.events]);


  // callto show 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



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
    <>

      {props.singleblog?.length > 0 ? (
        <div className="blogdt-single">
          <Head>
            <title>{props.singleblog[0].title}</title>
            <meta name="description" content={props.singleblog[0].description} />
            <meta name="keywords" content={props.singleblog[0].keywords} />
            <link rel="canonical" href={"https://www.travelflys.com/news/" + props.singleblog[0].titleUrl} />
          </Head>

          
            <div className="call-header d-none d-md-block">
              <Container>
                {props.singleblog[0].tfnHeader ?
                <a href={`tel:${props.singleblog[0].tfnHeader}`} className="footer-number-md">
                  <i className="bi bi-telephone mr-2"></i>
                  <div className="tfn-no d-inline-block">
                    (USA) <span>{props.singleblog[0].tfnHeader}</span>
                  </div>
                </a>
                    : ""}

                <a href={`tel:+44 (20) 37693132`} className="footer-number-md animdelay-2s">
                  <i className="bi bi-telephone mr-2"></i>
                  <div className="tfn-no d-inline-block">
                    (UK) <span>+44 (20) 37693132</span>
                  </div>
                </a>
              </Container>
            </div>


          {/*------- CallUkToast -------*/}
          <CallUkToast />
          {/*----- end CallUkToast -----*/}
        

          <Header />


          <div className="blogadda bg-white">
            <div className="d-flex align-items-center justify-content-center flex-column page-title page-title--small page-title--blog text-center ">
              <div className="container">
                <div className="page-title__content">
                  <div className="page-title__name">News Details</div> 
                  <p className="page-title__slogan" dangerouslySetInnerHTML={{
                    __html: props.singleblog[0].heading
                  }}></p>
                </div>
              </div>
              <BreadHero
                linkhtml={
                  <>
                    <ul className="bradcum container">
                      <li>
                        <Link href="/">Home</Link>{" "}
                      </li>
                      <li className="mr-2">/</li>
                      <li>
                        <Link href="/news">News</Link>{" "}
                      </li>
                      {/* <li className="mr-2">/</li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {loading ? "loading..." : props.singleblog[0].heading}{" "}
                    </li> */}
                    </ul>
                  </>
                }
              />
            </div>

            <div className="popular-destination blogaddalist details full-w">
              <Container>
                <Row>
                  <Col xs={12} lg={7} xl={8} className="mb-4">
                    <div className="blogaddalist-round">
                      <div className="blogaddalist-inner">
                        <div className="blog-inner-box2 mb-5 content-ullist">
                          {loading ? (
                            <div className="text-center py-5 my-4 w-100">
                              <div
                                className="spinner-border text-secondary"
                                role="status"
                              >
                                <span className="sr-only"></span>
                              </div>
                            </div>
                          ) : props.singleblog[0].content === "" ? (
                            <p className="pb-2">No Content found</p>
                          ) : (
                            <>
                              <div className="mb-2 text-secondary">
                                - <Moment date={props.singleblog[0].posttime} format="MMM DD, YYYY" />
                              </div>

                              <div
                                className="blog-p mb-5 content-ullist"
                                dangerouslySetInnerHTML={{
                                  __html: props.singleblog[0].content,
                                }}
                              />
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </Col>


                  <Col xs={12} lg={5} xl={4}>
                    <aside className="recent-blogsalide">
                      <div className="post__info">
                        <h3 className="post__title position-relative text-uppercase">
                          Recent News
                        </h3>
                        {props.allblog?.length > 0 ? (
                          <ul>
                            {props.allblog.slice(0, 5).filter((items) => items.status === "Active").map((items, i) => (
                              <li key={i}>
                                <div className="text-left float-left">
                                  <span className="count-s">{i + 1}</span>
                                </div>
                                <div className="overflow-hidden">
                                  <Link href={`/news/${items.titleUrl}`}>
                                    <a
                                      className={
                                        location.asPath ===
                                          "/news/" + items.titleUrl
                                          ? "active"
                                          : "not-active"
                                      }
                                    >
               
                                      <span className="d-block" dangerouslySetInnerHTML={{ __html: items.title }}></span>

                                    </a>
                                  </Link>
                                  <ul className="post__category p-0 m-0">
                                    <li className="p-0 m-0">
                                      <i className="bi bi-calendar4 mr-2"></i>
                                      <span>
                                        <Moment date={items.posttime} format="MMM DD, YYYY" />
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-center">No items found !</p>  
                        )}
                      </div>
                    </aside>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>

          {props.singleblog[0].tfnFooter1 ?
            <>
              <a href={`tel:${props.singleblog[0].tfnFooter1}`} className="footer-number-md">
                <div className="tfn-no">
                  <p>
                    <i className="bi bi-telephone"></i> How Can We Help ?<small>Feel free to  Ask</small>
                  </p>
                  <span>
                    <i className="bi bi-telephone mr-2 d-md-none"></i>
                    {props.singleblog[0].tfnFooter1}
                  </span>
                </div>
              </a>
            </>
            : ""}
        </div>
      ) : (
        <>
          <Header />

          <Pageerror />
        </>
      )}

      {/* {props.singleblog[0] != "" ? (
      
      ) : (
      
      )} */}




      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;

  // single slug
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    id: "",
    title: "",
    titleUrl: `${params.slug}`,
    content: "",
    description: "",
    keywords: "",
    posttime: "",
    status: "",
    heading: "",
    img_url: "",
    siteId: "143",
    categoryName: "",
    blogdes2: "",
    blogTagsName2: "",
    extarTag: "",
    tfnHeader: "",
    tfnFooter1: "",
    tfnFooter2: "",
    tfnFooter3: "",
    tfnPopup: "",
    pageType: "News",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  const res = await fetch(
    "https://cms.travomint.com/news-article/naDataById?authcode=Trav3103s987876",
    requestOptions
  );
  const onejson = await res.json();

  // All blog
  var myHeadersal = new Headers();
  myHeadersal.append("Content-Type", "application/json");

  var rawall = JSON.stringify({
    contentId: "",
    pageType: "News",
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
    method: "POST",
    headers: myHeadersal,
    body: rawall,
    redirect: "follow",
  };
  const resall = await fetch(
    "https://cms.travomint.com/news-article/showNAdata?authcode=Trav3103s987876",
    requestOptions
  );
  const multiplejson = await resall.json();

  return {
    props: {
      singleblog: onejson.response,
      allblog: multiplejson.response,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 60, // In seconds
  };
}



// paths -> slugs which are allowed
export const getStaticPaths = async () => {
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
    "img_url": "",
    "siteId": "143",
    "categoryName": "",
    "blogdes2": "",
    "blogTagsName2": "",
    "extarTag": "",
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
  const res = await fetch("https://cms.travomint.com/travoles-content/showblogdata?authcode=Trav3103s987876", requestOptions)
  const json = await res.json()
  const data = json.response;

  // fallback ->
  let paths = [];

  data.forEach((post) => {
    paths.push({
      params: { slug: post.titleUrl }
    })
  })

  return {
    paths,
    fallback: true
  }
}