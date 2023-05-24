import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Moment from 'react-moment';


export default function Blog(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 

  return (
    <>
      <div className="blogadda">
        <div
          className={
            "popular-destination blogaddalist full-w " +
            (props.nulltopsp ? "" : "")
          }
        >
          <Container>
            {props.allbloglist?.length > 0 ? (
              <Row>
                {props.showitem
                  ? props.allbloglist.slice(0, props.showitem).filter((items) => items.status === "Active").map((items, i) => (
                        <Col xs={12} md={6} xl={4} key={i} className="mb-4">
                          <div className="post hover__box bog-border h-100 d-flex flex-column splitsm-box">
                            <div className="wrapper"></div>

                            <div className="flex-grow-1">
                              <div className="post__info">
                                <ul className="post__category">
                                  <li>
                                    {" "}
                                    <i className="bi bi-calendar4 mr-2"></i>{" "}
                                    <span>
                                    <Moment date={items.posttime} format="MMM DD, YYYY" />  
                                    </span>
                                  </li>
                                </ul>
                                {/* <h3 className="post__title">{items.title}</h3> */}
                                <div className="blog-p  mb-4 content-ullist">
                                   <div className="d-inline" dangerouslySetInnerHTML={{  __html: items.content.substr(0, 240) }}></div>
                                   <p>...</p>
                                  </div>
                              </div>
                            </div>
                            <Link href={`/blog/${items.titleUrl}`}>
                              <a className="btn btn-site ripple-effbtn btn-40">
                                Read more{" "}
                                <i className="bi bi-arrow-right ml-1"></i>
                              </a>
                            </Link>
                          </div>
                        </Col>
                      ))
                  : props.allbloglist.filter((items) => items.status === "Active").map((items, i) => (
                        <Col xs={12} md={6} xl={4} key={i} className="mb-4">
                          <div className="post hover__box bog-border h-100 d-flex flex-column splitsm-box">
                            <div className="wrapper"></div>

                            <div className="flex-grow-1">
                              <div className="post__info">
                                <ul className="post__category">
                                  <li>
                                    {" "}
                                    <i className="bi bi-calendar4 mr-2"></i>{" "}
                                    <span>
                                    <Moment date={items.posttime} format="MMM DD, YYYY" />  
                                    </span>
                                  </li>
                                </ul>
                                {/* <h3 className="post__title">{items.title}</h3> */}
                                <div className="blog-p  mb-4 content-ullist">
                                   <div className="d-inline" dangerouslySetInnerHTML={{  __html: items.content.substr(0, 240) }}></div>
                                   <p>...</p>
                               </div>

                              </div>
                            </div>
                            <Link href={`/blog/${items.titleUrl}`}>
                              <a className="btn btn-site ripple-effbtn btn-40">
                                Read more{" "}
                                <i className="bi bi-arrow-right ml-1"></i>
                              </a>
                            </Link>
                          </div>
                        </Col>
                        
                      ))}
                    
              </Row>
            ) : (
                <p className="text-center">No items found !</p>
            )}
          </Container>
        </div>
      </div>
    </>
  );
}
