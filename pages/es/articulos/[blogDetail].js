import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import Footer from "../../../component/es/Footer";
import Header from "../../../component/es/Navbar";
import BreadHero from "../../../component/es/BreadHero";
import Head from "next/head";
import { useRouter } from "next/router";
import Pageerror from "../../../component/es/Pageerror";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Moment from 'react-moment';
import Modal from 'react-bootstrap/Modal';


export default function BlogDetails(props, router) {
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
  const [calltoshow, setCalltoShow] = useState(false);
  const callFunClose = () => setCalltoShow(false);
  const callFunShow = () => setCalltoShow(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    setTimeout(() => {
      callFunShow()
    }, 20000);
  }, []);


  return (
    <>

      {props.singleblog?.length > 0 ? (
        <div className={props.singleblog[0].tfnHeader ? "blogdt-single" : ""}>
          <Head>
            <title>{props.singleblog[0].title}</title>
            <meta name="description" content={props.singleblog[0].description} />
            <meta name="keywords" content={props.singleblog[0].keywords} />
            <link
              rel="canonical"
              href={
                "https://www.travelflys.com/es/articulos/" +
                props.singleblog[0].titleUrl
              }
            />
          </Head>

          {props.singleblog[0].tfnHeader ?
            <div className="call-header d-none d-md-block">
              <Container>
                <a href={`tel:${props.singleblog[0].tfnHeader}`} className="footer-number-md">
                  <i class="bi bi-telephone mr-2"></i>
                  <div className="tfn-no d-inline-block">
                    (USA) <span>{props.singleblog[0].tfnHeader}</span>
                  </div>
                </a>
              </Container>
            </div>
            : ""}


          <Header />


          <div className="blogadda bg-white">
            <div className="d-flex align-items-center justify-content-center flex-column page-title page-title--small page-title--blog text-center">
              <div className="container">
                <div className="page-title__content">
                  <div className="page-title__name">Detalles del blog</div>
                  <p className="page-title__slogan">
                    {loading ? "loading..." : props.singleblog[0].heading}
                  </p>
                </div>
              </div>
              <BreadHero
                linkhtml={
                  <>
                    <ul className="bradcum container">
                      <li>
                        <Link href="/es/">Casa</Link>{" "}
                      </li>
                      <li className="mr-2">/</li>
                      <li>
                        <Link href="/es/articulos">Artículos</Link>{" "}
                      </li>
                      {/* <li className="mr-2">/</li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {loading ? "loading..." : props.singleblog[0].title}{" "}
                    </li>{" "} */}
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
                                <span className="sr-only">Loading...</span>
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
                                className="blog-p  mb-5 content-ullist"
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
                          Recent Posts
                        </h3>
                        {props.allblog?.length > 0 ? (
                          <>
                            <ul>
                              {props.allblog.slice(0, 5).filter((items) => items.status === "Active").map((items, i) => (
                                <li>
                                  <div className="text-left float-left">
                                    <span className="count-s">{i + 1}</span>
                                  </div>
                                  <div className="overflow-hidden">
                                    <Link href={`/es/articulos/${items.titleUrl}`}>
                                      <a className={location.asPath === "/es/articulos/" + items.titleUrl ? "active" : "not-active"} >
                                        {items.title}
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
                          </>
                        ) : (
                          "No items found !"
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

              <Modal show={calltoshow} onHide={callFunClose}
                className="cheapbook-modal"
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton className="justify-content-end">
                </Modal.Header>
                <Modal.Body className="py-0 text-center">
                  <Row>
                    <Col xs="12" md="6" className="bg-callcustomcare">

                    </Col>
                    <Col xs="12" md="6" className="callcustomcare-content flex-column d-flex justify-content-between ">
                    <div class="cheapbook-contact">
                        <p class="head1">
                          Más bajo
                          <span className="d-block">Tarifa del mes</span>
                        </p>
                        <p class="calling"><i class="bi bi-arrow-90deg-down"></i> llamando </p>
                        <p class="phone_number">
                          <a href={`tel:${props.singleblog[0].tfnFooter1}`} target="_blank">{props.singleblog[0].tfnFooter1}</a>
                        </p>
                        <p class="unpublished"><span><b>24*7</b> Soporte Ilimitado</span></p>
                        <p class="calling">* Este número de contacto proporcionado no está asociado con ninguna organización o marca, excepto Travelflys</p>
                      </div>
                     
                      <div className="cheapbook-light">
                        <div className="inner">
                          <p class="head"><b>Lo mas barato</b> ofertas</p>
                          <p class="sub_head">Reservas de Grupos y Ofertas Especiales</p>
                          <p class="sub_head1">También ayuda para <b>Cancelación del vuelo</b> y exención de tarifas como <b>CORONAVIRUS (COVID-19)</b></p>

                        </div>
                      </div>
 
                    </Col>
                  </Row>
                </Modal.Body>
              </Modal>


              <a href={`tel:${props.singleblog[0].tfnFooter1}`} className="footer-number-md">
                <div className="tfn-no">
                  <p>
                    <i class="bi bi-telephone"></i> Cómo podemos ayudar ?<small>Siéntete libre de preguntar</small>
                  </p>
                  <span>
                    <i class="bi bi-telephone mr-2 d-md-none"></i>
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


      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;

  // single blogDetail
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    id: "",
    title: "",
    titleUrl: `${params.blogDetail}`,
    content: "",
    description: "",
    keywords: "",
    posttime: "",
    status: "",
    heading: "",
    categoryName: "",
    siteId: "143",
    pageType: "Articulo",
    extraTag: "",
    tfnHeader: "",
    tfnFooter1: "",
    tfnFooter2: "",
    tfnFooter3: "",
    tfnPopup: "",
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
    id: "",
    title: "",
    titleUrl: "",
    content: "",
    description: "",
    keywords: "",
    posttime: "",
    status: "",
    heading: "",
    categoryName: "",
    siteId: "143",
    pageType: "Articulo",
    extraTag: "",
    tfnHeader: "",
    tfnFooter1: "",
    tfnFooter2: "",
    tfnFooter3: "",
    tfnPopup: "",
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
  const data = json.response;

  // fallback ->
  let paths = [];

  data.forEach((post) => {
    paths.push({
      params: { blogDetail: post.titleUrl }
    })
  })

  return {
    paths,
    fallback: true
  }
}