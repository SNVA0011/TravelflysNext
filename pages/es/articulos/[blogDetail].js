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



  // RateUs
  const [message, setMessage] = useState("");
  const [countrating, setCountrating] = useState(0);
  const RateUs = (val) => {
    setCountrating(val)
  }

  // CommentSubmit
  const CommentSubmit = async (event) => {
    event.preventDefault();
    document.getElementById('leavecomment').scrollIntoView();

    if (event.target.authorcomment.value.length !== 0) { event.target.authorcomment.classList.remove("error") }
    if (event.target.authorname.value.length !== 0) { event.target.authorname.classList.remove("error") }
    if (event.target.authoremail.value.length !== 0) { event.target.authoremail.classList.remove("error") }
    if (event.target.authornumber.value.length !== 0) { event.target.authornumber.classList.remove("error") }

    if (countrating == 0) {
      alert("¡Califícanos!");
      event.target.authorrate.focus();
    }
    else if (event.target.authorcomment.value.length == 0) {
      alert("¡Por favor ingrese su comentario!");
      event.target.authorcomment.focus();
      event.target.authorcomment.classList.add("error");
    }
    else if (event.target.authorname.value.length == 0) {
      alert("¡Por favor proporcione su nombre!");
      event.target.authorname.focus()
      event.target.authorname.classList.add("error");
    }
    else if (event.target.authoremail.value.length == 0) {
      alert("¡Por favor proporcione su correo electrónico!");
      event.target.authoremail.focus()
      event.target.authoremail.classList.add("error");
    }
    else if (event.target.authornumber.value.length == 0) {
      alert("¡Por favor proporcione su número de teléfono!");
      event.target.authornumber.focus()
      event.target.authornumber.classList.add("error");
    }
    else {

      try {
        let res = await fetch("https://cms.travomint.com/travoles-content/addreview?authcode=Trav3103s987876", {
          method: "POST",
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
          body: JSON.stringify({
            "reviewId": "",
            "userName": event.target.authorname.value,
            "userEmail": event.target.authoremail.value,
            "userPhone": event.target.authornumber.value,
            "reviewMessage": event.target.authorcomment.value,
            "reviewDate": "",
            "reviewRating": event.target.authorrate.value,
            "reviewRpyId": "0",
            "reviewStatus": "Inactive",
            "siteId": "143",
            "reviewUrl": props.singleblog[0].titleUrl
          }),
        });
        if (res.status === 200) {
          event.target.reset();
          setMessage("success");
          setTimeout(function () {
            setMessage("");
          }, 6000);
        } else {
          setMessage("error");
        }
      } catch (err) {
        console.log(err);
      }

    }
  };


  if (location.isFallback) {
    return <>
      <Header />

      <div className='text-center full-w my-5 py-5'>
        <div class="spinner-border text-secondary mr-2" role="status">
        </div>  Loading...
      </div>

      <Footer />
    </>
  }


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
                    <span>{props.singleblog[0].tfnHeader}</span>
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
                    <div className="blogaddalist-round anchorsc-space">
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

                {/*------ Customer Reviews ------*/}
                <Row>
                  <Col xs={12} xl={8} className="mb-4">

                    {props.getallcomments.length > 0 ?
                      <div className="row-comments-col">
                        <div className="comments-list">
                          <span className="comment-reply-title ttlcomment">{props.getallcomments?.length} Comentario{props.getallcomments?.length > 1 ? "s" : ""}</span>

                          <ol class="commentlist-ol">


                            {props.getallcomments && props.getallcomments.map((item, index) =>
                              <li class="comment-byuser d-flex w-100" key={index}>
                                <div class="author-avatar loaded">
                                  <img src="/images/usercomment.png" class="avatar-img" alt="Avatar" />
                                </div>
                                <div class="right pl-3 pt-2 flex-grow-1">
                                  <span class="author-name">{item.userName}</span> <span class="authordate"> <Moment toNow>{item.reviewDate}</Moment> antes de</span>

                                  <div className="d-flex align-items-center mt-2">
                                    <div class="star-select mt-0">
                                      {[...Array(parseInt(item.reviewRating))].map((elementInArray, index) => (
                                        <i class="bi bi-star-fill active" key={index}></i>
                                      ))}

                                      {[...Array(parseInt(5 - item.reviewRating))].map((elementInArray, indx) => (
                                        <i class="bi bi-star-fill" key={indx}></i>
                                      ))}
                                    </div>
                                    <b className="font-14">{item.reviewRating}.0</b>
                                  </div>

                                  <div className="author-text" dangerouslySetInnerHTML={{ __html: item.reviewMessage }}></div>

                                </div>
                              </li>
                            )}


                          </ol>

                        </div>
                      </div>
                      : ""}


                    <h3 className="comment-reply-title d-flex align-items-center" id="leavecomment">
                      Deja un comentario
                    </h3>
                    <p className="willbe-pub">Su dirección de correo electrónico no será publicada.</p>
                    <form onSubmit={CommentSubmit} className="leavereply-form">
                      <div className="mb-4 d-flex align-items-center justify-content-between justify-content-md-start">
                        <input type="hidden" name="authorrate" value={countrating}></input>

                        <div className="star-select">
                          <i className={"bi bi-star-fill" + (countrating >= 1 ? " active" : "")} onClick={() => { RateUs(1) }}>
                            <span>Lo odié</span>
                          </i>

                          <i className={"bi bi-star-fill" + (countrating >= 2 ? " active" : "")} onClick={() => { RateUs(2) }}>
                            <span>No me gustó</span>
                          </i>

                          <i className={"bi bi-star-fill" + (countrating >= 3 ? " active" : "")} onClick={() => { RateUs(3) }}>
                            <span>Estuvo bien</span>
                          </i>

                          <i className={"bi bi-star-fill" + (countrating >= 4 ? " active" : "")} onClick={() => { RateUs(4) }}>
                            <span>Le gustó</span>
                          </i>

                          <i className={"bi bi-star-fill mr-0" + (countrating >= 5 ? " active" : "")} onClick={() => { RateUs(5) }}>
                            <span>Me encantó</span>
                          </i>
                        </div>
                        <div className="startotal badge">
                          {countrating} / 5
                        </div>
                      </div>
                      <div className="mb-3">
                        <textarea className="form-control" name="authorcomment" rows="6" placeholder="Comentario"></textarea>
                      </div>

                      <Row>
                        <Col xs={6}>
                          <div className="mb-3">
                            <input className="form-control" name="authorname" type="text" placeholder="Nombre" required="" />
                          </div>
                        </Col>

                        <Col xs={6}>
                          <div className="mb-3">
                            <input className="form-control" name="authoremail" type="email" placeholder="Correo electrónico" required="" />
                          </div>
                        </Col>
                      </Row>

                      <div className="mb-3">
                        <input className="form-control" name="authornumber" type="number" placeholder="Teléfono" pattern="/^-?\d+\.?\d*$/" />
                      </div>

                      <div className="search-place">
                        <p className="form-submit">
                          <input name="submit" type="submit" className="btn btn-site" value="Publicar Comentario" />
                        </p>
                      </div>

                      {message === 'success' ?
                        <div className="alertsw">
                          <div role="alert" class="fade alert alert-success show"><i class="bi bi-check2-circle mr-2"></i> Gracias por enviar una reseña.</div>
                        </div>
                        : ""}

                    </form>
                  </Col>
                </Row>
                {/*------ End Customer Reviews ------*/}

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

  // All Comments  
  var requestComment = {
    method: "POST",
    body: JSON.stringify({
      "reviewId": "",
      "userName": "",
      "userEmail": "",
      "userPhone": "",
      "reviewMessage": "",
      "reviewDate": "",
      "reviewRating": "",
      "reviewRpyId": "",
      "reviewStatus": "",
      "siteId": "143",
      "reviewUrl": `${params.blogDetail}`
    }),
    redirect: "follow",
    headers: { 'Content-type': 'application/json; charset=UTF-8' }
  };
  const commentall = await fetch(
    "https://cms.travomint.com/travoles-content/reviewbyurl?authcode=Trav3103s987876",
    requestComment
  );
  const commentjson = await commentall.json();

  return {
    props: {
      singleblog: onejson.response,
      allblog: multiplejson.response,
      getallcomments: commentjson.response
    },
    revalidate: 60,
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