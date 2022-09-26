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

export default function BlogDetails(props, router) {
  const location = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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


  return (
    <>
      <Header />

      {props.singleblog.length != 0 && props.singleblog[0].status === "Active" ? (
        <>
          <Head>
            <title>{props.singleblog[0].title}</title>
            <meta
              name="description"
              content={props.singleblog[0].description}
            />
            <meta name="keywords" content={props.singleblog[0].keywords} />
            <link
              rel="canonical"
              href={
                "https://www.travelflys.com/blog/" +
                props.singleblog[0].titleUrl
              }
            />
          </Head>

          <div className="blogadda">
            <div className="page-title page-title--small page-title--blog text-center ">
              <div className="container">
                <div className="page-title__content">
                  <h2 className="page-title__name">
                    {loading ? "loading..." : props.singleblog[0].heading}
                  </h2>
                </div>
              </div>
              <BreadHero
                linkhtml={
                  <>
                    <ul className="bradcum">
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
                            <div
                              className="blog-p  mb-5 content-ullist"
                              dangerouslySetInnerHTML={{
                                __html: props.singleblog[0].content,
                              }}
                            />
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
                            {props.allblog.slice(0, 5).map((items, i) => (
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
                                        {new Date(items.posttime).getDate() +
                                          "/" +
                                          (new Date(items.posttime).getMonth() +
                                            1) +
                                          "/" +
                                          new Date(
                                            items.posttime
                                          ).getFullYear()}
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
              </Container>
            </div>
          </div>
        </>
      ) : (
        <Pageerror />
      )}

      {/* {props.singleblog[0] != "" ? (
      
      ) : (
      
      )} */}

      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
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

  return {
    props: {
      singleblog: onejson.response,
      allblog: multiplejson.response,
    },
  };
}
