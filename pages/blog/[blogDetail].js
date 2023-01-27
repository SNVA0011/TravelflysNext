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
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

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

    if(countrating == 0){
      alert("Please with rate us!");
      event.target.authorrate.focus();
    }
    else if (event.target.authorcomment.value.length == 0) {
      alert("Please enter your comment!");
      event.target.authorcomment.focus();
      event.target.authorcomment.classList.add("error");
    }
    else if (event.target.authorname.value.length == 0) {
      alert("Please provide your name!");
      event.target.authorname.focus()
      event.target.authorname.classList.add("error");
    }
    else if (event.target.authoremail.value.length == 0) {
      alert("Please provide your email!");
      event.target.authoremail.focus()
      event.target.authoremail.classList.add("error");
    }
    else if (event.target.authornumber.value.length == 0) {
      alert("Please provide your phone number!");
      event.target.authornumber.focus()
      event.target.authornumber.classList.add("error");
    }
    else {

      try {
        let res = await fetch("http://cms.travomint.com/travoles-content/addreview?authcode=Trav3103s987876", {
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


  return (
    <>

      {props.singleblog?.length > 0 ? (
        <div className={props.singleblog[0].tfnHeader ? "blogdt-single" : ""}>
          <Head>
            <title>{props.singleblog[0].title}</title>
            <meta name="description" content={props.singleblog[0].description} />
            <meta name="keywords" content={props.singleblog[0].keywords} />
            <link rel="canonical" href={"https://www.travelflys.com/blog/" + props.singleblog[0].titleUrl} />
          </Head>

          {props.singleblog[0].tfnHeader ?
            <div className="call-header d-none d-md-block">
              <Container>
                <a href={`tel:${props.singleblog[0].tfnHeader}`} className="footer-number-md">
                  <i className="bi bi-telephone mr-2"></i>
                  <div className="tfn-no d-inline-block">
                    (USA) <span>{props.singleblog[0].tfnHeader}</span>
                  </div>
                </a>
              </Container>
            </div>
            : ""}

          <Header />


          <div className="blogadda bg-white">
            <div className="d-flex align-items-center justify-content-center flex-column page-title page-title--small page-title--blog text-center ">
              <div className="container">
                <div className="page-title__content">
                  <div className="page-title__name">Blog Details</div>
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
                        <Link href="/">Home</Link>{" "}
                      </li>
                      <li className="mr-2">/</li>
                      <li>
                        <Link href="/blog">Blog</Link>{" "}
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
                          Recent Posts
                        </h3>
                        {props.allblog?.length > 0 ? (
                          <ul>
                            {props.allblog.slice(0, 5).filter((items) => items.status === "Active").map((items, i) => (
                              <li>
                                <div className="text-left float-left">
                                  <span className="count-s">{i + 1}</span>
                                </div>
                                <div className="overflow-hidden">
                                  <Link href={`/blog/${items.titleUrl}`}>
                                    <a
                                      className={
                                        location.asPath ===
                                          "/blog/" + items.titleUrl
                                          ? "active"
                                          : "not-active"
                                      }
                                    >
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
                          <span className="comment-reply-title ttlcomment">{props.getallcomments?.length} Comment{props.getallcomments?.length > 1 ? "s" : ""}</span>

                          <ol class="commentlist-ol">


                            {props.getallcomments && props.getallcomments.map((item, index) =>
                              <li class="comment-byuser d-flex w-100" key={index}>
                                <div class="author-avatar loaded">
                                  <img src="/images/usercomment.png" class="avatar-img" alt="Avatar" />
                                </div>
                                <div class="right pl-3 pt-2 flex-grow-1">
                                  <span class="author-name">{item.userName}</span> <span class="authordate"> <Moment toNow>{item.reviewDate}</Moment> ago</span>
                                 
                                 <div className="d-flex align-items-center mt-2">
                                 <div class="star-select mt-0">
                                    {[...Array(parseInt(item.reviewRating))].map((elementInArray, index) => (
                                      <i class="bi bi-star-fill active" key={index}></i>
                                    ))}

                                    {[...Array(parseInt(5-item.reviewRating))].map((elementInArray, indx) => (
                                      <i class="bi bi-star-fill" key={indx}></i>
                                    ))}
                                  </div>
                                  <b className="font-14">{item.reviewRating}.0</b>
                                 </div>

                                  <p className="author-text">{item.reviewMessage}</p>

                                </div>
                              </li>
                            )}


                          </ol>

                        </div>
                      </div>
                      : ""}


                    <h3 className="comment-reply-title d-flex align-items-center" id="leavecomment">
                      Leave a Comment
                    </h3>
                    <p className="willbe-pub">Your email address will not be published.</p>
                    <form onSubmit={CommentSubmit} className="leavereply-form">
                      <div className="mb-4 d-flex align-items-center justify-content-between justify-content-md-start">
                        <input type="hidden" name="authorrate" value={countrating}></input>

                        <div className="star-select">
                          <OverlayTrigger placement="top" overlay={<Tooltip>Hated it</Tooltip>} >
                            <i className={"bi bi-star-fill" + (countrating >= 1 ? " active" : "")} onMouseEnter={() => { RateUs(1) }}></i>
                          </OverlayTrigger>

                          <OverlayTrigger placement="top" overlay={<Tooltip>Disliked it</Tooltip>} >
                            <i className={"bi bi-star-fill" + (countrating >= 2 ? " active" : "")} onMouseEnter={() => { RateUs(2) }}></i>
                          </OverlayTrigger>

                          <OverlayTrigger placement="top" overlay={<Tooltip>It was ok</Tooltip>} >
                            <i className={"bi bi-star-fill" + (countrating >= 3 ? " active" : "")} onMouseEnter={() => { RateUs(3) }}></i>
                          </OverlayTrigger>

                          <OverlayTrigger placement="top" overlay={<Tooltip>Liked it</Tooltip>} >
                            <i className={"bi bi-star-fill" + (countrating >= 4 ? " active" : "")} onMouseEnter={() => { RateUs(4) }}></i>
                          </OverlayTrigger>

                          <OverlayTrigger placement="top" overlay={<Tooltip>Loved it</Tooltip>} >
                            <i className={"bi bi-star-fill mr-0" + (countrating >= 5 ? " active" : "")} onMouseEnter={() => { RateUs(5) }}></i>
                          </OverlayTrigger>

                        </div>
                        <div className="startotal badge">
                          {countrating} / 5
                        </div>
                      </div>
                      <div className="mb-3">
                        <textarea className="form-control" name="authorcomment" rows="6" placeholder="Comment"></textarea>
                      </div>

                      <Row>
                        <Col xs={6}>
                          <div className="mb-3">
                            <input className="form-control" name="authorname" type="text" placeholder="Name" required="" />
                          </div>
                        </Col>

                        <Col xs={6}>
                          <div className="mb-3">
                            <input className="form-control" name="authoremail" type="email" placeholder="Email" required="" />
                          </div>
                        </Col>
                      </Row>

                      <div className="mb-3">
                        <input className="form-control" name="authornumber" type="number" placeholder="Phone" pattern="/^-?\d+\.?\d*$/" />
                      </div>

                      <div className="search-place">
                        <p className="form-submit">
                          <input name="submit" type="submit" className="btn btn-site" value="Post Comment" />
                        </p>
                      </div>

                      {message === 'success' ?
                        <div className="alertsw">
                          <div role="alert" class="fade alert alert-success show"><i class="bi bi-check2-circle mr-3"></i> Thank you for submitting review.</div>
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
                          Lowest
                          <span className="d-block">Fare of the Month</span>
                        </p>
                        <p className="calling"><i className="bi bi-arrow-90deg-down"></i> by calling </p>
                        <p className="phone_number">
                          <a href={`tel:${props.singleblog[0].tfnFooter1}`} target="_blank">{props.singleblog[0].tfnFooter1}</a>
                        </p>
                        <p className="unpublished"><span><b>24*7</b> Unlimited Support</span></p>
                        <p className="calling">* This contact number provided is not associated with any organization, or brand except for the Travelflys</p>
                      </div>

                      <div className="cheapbook-light">
                        <div className="inner">
                          <p className="head"><b>Cheapest</b> Deals</p>
                          <p className="sub_head">Group Bookings and Special Offers</p>
                          <p className="sub_head1">Also Help for <b>Flight Cancellation</b> and Fee Waiver As <b>CORONAVIRUS (COVID-19)</b></p>

                        </div>
                      </div>


                    </Col>
                  </Row>
                </Modal.Body>
              </Modal>

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
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  const res = await fetch(
    "https://cms.travomint.com/travoles-content/blogdatabyid?authcode=Trav3103s987876",
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
  });

  var requestOptions = {
    method: "POST",
    headers: myHeadersal,
    body: rawall,
    redirect: "follow",
  };
  const resall = await fetch(
    "https://cms.travomint.com/travoles-content/showblogdata?authcode=Trav3103s987876",
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
    "http://cms.travomint.com/travoles-content/reviewbyurl?authcode=Trav3103s987876",
    requestComment
  );
  const commentjson = await commentall.json();

  return {
    props: {
      singleblog: onejson.response,
      allblog: multiplejson.response,
      getallcomments: commentjson.response,
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
      params: { blogDetail: post.titleUrl }
    })
  })

  return {
    paths,
    fallback: true
  }
}