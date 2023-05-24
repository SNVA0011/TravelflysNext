import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import Footer from "../../../component/ru/Footer";
import Header from "../../../component/ru/Navbar";
import BreadHero from "../../../component/ru/BreadHero";
import Head from "next/head";
import { useRouter } from "next/router";
import Pageerror from "../../../component/ru/Pageerror";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Moment from 'react-moment';
import Modal from 'react-bootstrap/Modal';
import CallUkToast from "../../../component/CallUkToast";


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
    }, 6000);
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
      alert("Оцените нас!");
      event.target.authorrate.focus();
    }
    else if (event.target.authorcomment.value.length == 0) {
      alert("Пожалуйста, введите свой комментарий!");
      event.target.authorcomment.focus();
      event.target.authorcomment.classList.add("error");
    }
    else if (event.target.authorname.value.length == 0) {
      alert("Пожалуйста, укажите ваше имя!");
      event.target.authorname.focus()
      event.target.authorname.classList.add("error");
    }
    else if (event.target.authoremail.value.length == 0) {
      alert("Пожалуйста, укажите свой адрес электронной почты!");
      event.target.authoremail.focus()
      event.target.authoremail.classList.add("error");
    }
    else if (event.target.authornumber.value.length == 0) {
      alert("Пожалуйста, укажите свой номер телефона!");
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
 


  // ipaddress number 
  const [dataIp, setDataIp] = useState([]);
  const [isLoading, setLoadingIp] = useState(false);
  useEffect(async () => {
    setLoadingIp(true);
    await fetch("http://stest2.hunterwave.com/ipaddress").then((res) => res.json()).then(async (data) => {
      const reqopt = {
        method: "POST",
        body: JSON.stringify({
          "countryCode": data.response.countryCode,
          "siteId": "143",
          "countrytfn": "",
          "status": ""
        }),
        redirect: "follow",
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
      }
      await fetch("https://cms.travomint.com/ip/getClientiptfnBysiteId?authcode=Trav3103s987876", reqopt).then((res) => res.json()).then((data) => {
        setDataIp(data.response || []);
        setLoadingIp(false);
      }).catch((error) => {
        setLoadingIp(false);
        setDataIp([]);
        console.log('Error - ', error)
      });

    }).catch((error) => {
      setLoadingIp(false);
      setDataIp([]);
      console.log('Error : countrycode -', error)
    });
  }, []);


  function decode(str) { 
    let txt = new DOMParser().parseFromString(str, "text/html"); 
    return txt.documentElement.textContent;

  }



    // isFallback
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
            <title>{decode(props.singleblog[0].title)}</title>
            <meta name="description" content={decode(props.singleblog[0].description)} />
            <meta name="keywords" content={decode(props.singleblog[0].keywords)} />
            <link
              rel="canonical"
              href={
                "https://www.travelflys.com/ru/blog/" +
                props.singleblog[0].titleUrl
              }
            />
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
          <CallUkToast numberjson={{ "data": dataIp, "status": isLoading }}

            numberbyurl={[{
              "code": props.singleblog[0].contImag1 || "",
              "number": props.singleblog[0].countryNum1 || "",
            },
            {
              "code": props.singleblog[0].contImag2 || "",
              "number": props.singleblog[0].countryNum2 || "",
            },
            {
              "code": props.singleblog[0].contImag3 || "",
              "number": props.singleblog[0].countryNum3 || "",
            }
            ]} />
          {/*----- end CallUkToast -----*/}



          <Header />



          <div className="blogadda bg-white">
            <div className="d-flex align-items-center justify-content-center flex-column page-title page-title--small page-title--blog text-center">
              <div className="container">
                <div className="page-title__content">
                  <div className="page-title__name">подробности блога</div> 
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
                        <Link href="/ru/">Дом</Link>{" "}
                      </li>
                      <li className="mr-2">/</li>
                      <li>
                        <Link href="/ru/blog">Статьи</Link>{" "}
                      </li> 
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
                                <span className="sr-only"></span>
                              </div>
                            </div>
                          ) : props.singleblog[0].content === "" ? (
                            <p className="pb-2">Контент не найден</p>
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
                           Недавние Посты
                        </h3>
                        {props.allblog?.length > 0 ? (
                          <>
                            <ul>
                              {props.allblog.slice(0, 5).filter((items) => items.status === "Active").map((items, i) => (
                                <li key={i}>
                                  <div className="text-left float-left">
                                    <span className="count-s">{i + 1}</span>
                                  </div>
                                  <div className="overflow-hidden">
                                    <Link href={`/ru/blog/${items.titleUrl}`}>
                                      <a className={location.asPath === "/ru/blog/" + items.titleUrl ? "active" : "not-active"} >
                        
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
                          </>
                        ) : (
                            <p className="text-center">Ничего не найдено !</p>  
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

                          <ol className="commentlist-ol">


                            {props.getallcomments && props.getallcomments.map((item, index) =>
                              <li className="comment-byuser d-flex w-100" key={index}>
                                <div className="author-avatar loaded">
                                  <img src="/images/usercomment.png" className="avatar-img" alt="Avatar" />
                                </div>
                                <div className="right pl-3 pt-2 flex-grow-1">
                                  <span className="author-name">{item.userName}</span> <span className="authordate"> <Moment toNow>{item.reviewDate}</Moment> до</span>

                                  <div className="d-flex align-items-center mt-2">
                                    <div className="star-select mt-0">
                                      {[...Array(parseInt(item.reviewRating))].map((elementInArray, index) => (
                                        <i className="bi bi-star-fill active" key={index}></i>
                                      ))}

                                      {[...Array(parseInt(5 - item.reviewRating))].map((elementInArray, indx) => (
                                        <i className="bi bi-star-fill" key={indx}></i>
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
                     Оставить комментарий
                    </h3>
                    <p className="willbe-pub">Ваш электронный адрес не будет опубликован.</p>
                    <form onSubmit={CommentSubmit} className="leavereply-form">
                      <div className="mb-4 d-flex align-items-center justify-content-between justify-content-md-start">
                        <input type="hidden" name="authorrate" value={countrating}></input>

                        <div className="star-select">
                          <i className={"bi bi-star-fill" + (countrating >= 1 ? " active" : "")} onClick={() => { RateUs(1) }}>
                            <span>я ненавидел это</span>
                          </i>

                          <i className={"bi bi-star-fill" + (countrating >= 2 ? " active" : "")} onClick={() => { RateUs(2) }}>
                            <span>Мне не понравилось</span>
                          </i>

                          <i className={"bi bi-star-fill" + (countrating >= 3 ? " active" : "")} onClick={() => { RateUs(3) }}>
                            <span>Это было хорошо</span>
                          </i>

                          <i className={"bi bi-star-fill" + (countrating >= 4 ? " active" : "")} onClick={() => { RateUs(4) }}>
                            <span>ему понравилось</span>
                          </i>

                          <i className={"bi bi-star-fill mr-0" + (countrating >= 5 ? " active" : "")} onClick={() => { RateUs(5) }}>
                            <span>я любил</span>
                          </i>
                        </div>
                        <div className="startotal badge">
                          {countrating} / 5
                        </div>
                      </div>
                      <div className="mb-3">
                        <textarea className="form-control" name="authorcomment" rows="6" placeholder="Комментарий"></textarea>
                      </div>

                      <Row>
                        <Col xs={6}>
                          <div className="mb-3">
                            <input className="form-control" name="authorname" type="text" placeholder="Имя" required="" />
                          </div>
                        </Col>

                        <Col xs={6}>
                          <div className="mb-3">
                            <input className="form-control" name="authoremail" type="email" placeholder="Электронная почта" required="" />
                          </div>
                        </Col>
                      </Row>

                      <div className="mb-3">
                        <input className="form-control" name="authornumber" type="number" placeholder="Телефон" pattern="/^-?\d+\.?\d*$/" />
                      </div>

                      <div className="search-place">
                        <p className="form-submit">
                          <input name="submit" type="submit" className="btn btn-site" value="Оставить комментарий" />
                        </p>
                      </div>

                      {message === 'success' ?
                        <div className="alertsw">
                          <div role="alert" className="fade alert alert-success show"><i className="bi bi-check2-circle mr-2"></i> Благодарим за отзыв.</div>
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
                      <div className="cheapbook-contact">
                        <p className="head1">
                          Ниже
                          <span className="d-block">курс месяца</span>
                        </p>
                        <p className="calling"><i className="bi bi-arrow-90deg-down"></i> вызов </p>
                        <p className="phone_number">
                          <a href={`tel:${props.singleblog[0].tfnFooter1}`} target="_blank">{props.singleblog[0].tfnFooter1}</a>
                        </p>
                        <p className="unpublished"><span><b>24*7</b> Неограниченная поддержка</span></p>
                        <p className="calling">* Этот предоставленный контактный номер не связан с какой-либо организацией или брендом, кроме Travelflys.</p>
                      </div>

                      <div className="cheapbook-light">
                        <div className="inner">
                          <p className="head"><b>Самый дешевый</b> предложения</p>
                          <p className="sub_head">Групповые бронирования и специальные предложения</p>
                          <p className="sub_head1">Это также помогает для <b>отмена рейса</b> и освобождение от платы как <b>КОРОНАВИРУС (COVID-19)</b></p>

                        </div>
                      </div>

                    </Col>
                  </Row>
                </Modal.Body>
              </Modal>


              <a href={`tel:${props.singleblog[0].tfnFooter1}`} className="footer-number-md">
                <div className="tfn-no">
                  <p>
                    <i className="bi bi-telephone"></i> Как мы можем помочь ?<small>не стейсняйся спросить</small>
                  </p>
                  <span>
                    <i className="bi bi-telephone mr-2 d-md-none"></i>
                    {props.singleblog[0].tfnFooter1}
                  </span>
                </div>
              </a>
            </>
            : ""}

          <Footer />
        </div>
      ) : (
        <>
          <Header />

          <Pageerror />

            <Footer />
        </>
      )}


    
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
    pageType: "ArticleRU",
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
    pageType: "ArticleRU",
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