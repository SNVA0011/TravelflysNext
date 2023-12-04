import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Moment from 'react-moment'
import ReactHtmlParser from 'react-html-parser';


const OtherOffices = ({ MetaAirport, allAirport, path, readMore, relatedBottom, viewMore, viewMorePath, viewMoreBtn, heading }) => {

    return (
        <>
            <div className='popular-destination blogaddalist full-w'>
                <Container>

                    <h4 className='title title-border-bottom align-center offset-item animate font-weight-bold'>
                        {heading[0]}  {MetaAirport[0].airline}   {heading[1]}
                    </h4>

                    {
                        allAirport.length > 0 ?
                            <Row className='alldeals-vi'>
                                {allAirport.filter((item) => item.status === "Active").slice(0, relatedBottom).map((item, i) => (
                                    <Col xs={12} md={6} xl={4} className="mb-4" key={i}>
                                        <div className='post hover__box bog-border h-100 d-flex flex-column splitsm-box airline-bx'>

                                            <div className="post__info d-flex align-items-center">
                                                <ul className="post__category flex-grow-1">
                                                    <li>
                                                        <i className="bi bi-calendar4 mr-2"></i>{" "}
                                                        <span>
                                                            <Moment date={item.postTime} format="MMM DD, YYYY" />
                                                        </span>
                                                    </li>
                                                </ul>
                                                <div className='ml-2'>
                                                    <span className='badge bg-secondary-airline'>{item.pageType}</span>
                                                </div>
                                            </div>

                                            <div className='media mt-2'>
                                                <div className='media-body'>
                                                    <Link href={`${path}/${MetaAirport[0].url}/${item.url}`}>
                                                        <a>
                                                            <h3 className='h4 title mt-0'>
                                                                {ReactHtmlParser(item.heading)}
                                                            </h3>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="flex-grow-1 mb-3">
                                                <p dangerouslySetInnerHTML={{ __html: ReactHtmlParser(item.description) }}></p>
                                            </div>

                                            <div>
                                                <Link href={`${path}/${MetaAirport[0].url}/${item.url}`}>
                                                    <a className='btn btn-site ripple-effbtn btn-40'>
                                                        <span>{readMore} <i className="bi bi-arrow-right ml-1"></i></span>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                            : 'No items found !'
                    }

                    {viewMoreBtn && <div className='text-center mt-4'>
                        <Link href={viewMorePath}>
                            <a className="btn btn-border btn-lg-readmore">
                                {viewMore}
                            </a>
                        </Link>
                    </div>}


                </Container>
            </div>
        </>
    )
}

export default OtherOffices