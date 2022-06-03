import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from "next/link"


export default function Blog(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className='blogadda'>

        <div className='popular-destination blogaddalist full-w mb-5'>
          <Container>
            {
              props.allbloglist?.length > 0 ?
                <Row>

                  {props.showitem ?
                    props.allbloglist.slice(0, props.showitem).map((items, i) => (
                      <Col xs={12} md={6} xl={4} className="mb-3"> 
                      <div className='post postreadmore-card hover__box'> 
                        <div className='wrapper'> 
                        </div> 
                        <div className="post__info">
                          {/* <ul className="post__category">
                            <li>  <span>{(new Date(items.posttime)).getDate() + "/" + ((new Date(items.posttime)).getMonth() + 1) + "/" + (new Date(items.posttime)).getFullYear()}</span></li>
                          </ul> */}
                          <h3 className="post__title">{items.title}</h3>
                          <p>{items.description}</p>
                          <Link href={`/blog/${items.titleUrl}`}>
                            <a className='image_area_partition  btn mt-3'>Read More</a>
                           </Link>
                        </div> 
                      </div>
                    </Col>
                    ))
                    :
                    props.allbloglist.map((items, i) => (
                      <Col xs={12} md={6} xl={4} className="mb-3"> 
                        <div className='post postreadmore-card hover__box'> 
                          <div className='wrapper'> 
                          </div> 
                          <div className="post__info">
                            {/* <ul className="post__category">
                              <li>  <span>{(new Date(items.posttime)).getDate() + "/" + ((new Date(items.posttime)).getMonth() + 1) + "/" + (new Date(items.posttime)).getFullYear()}</span></li>
                            </ul> */}
                            <h3 className="post__title">{items.title}</h3>
                            <p>{items.description}</p>
                            <Link href={`/blog/${items.titleUrl}`}>
                              <a className='image_area_partition  btn mt-3'>Read More</a>
                             </Link>
                          </div> 
                        </div>
                      </Col>
                    ))
                  }


                </Row> : 'No items found !'
            }
          </Container>
        </div>
      </div>
    </>

  )
}


