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

        <div className={'popular-destination blogaddalist full-w ' + (props.nulltopsp ? '' : '')}>
          <Container>
            {
              props.allbloglist?.length > 0 ?
                <Row>

                  {props.showitem ?
                    props.allbloglist.slice(0, props.showitem).filter((items) => items.status === 'Active').map((items, i) => (
                      <Col xs={12} md={6} xl={4} key={i} className="mb-4">
                        <div className='post hover__box bog-border h-100 d-flex flex-column'>
                          <div className='wrapper'></div>

                        <div className='flex-grow-1'>
                        <div className="post__info">
                            <ul className="post__category">
                              <li>  <i className="bi bi-calendar4 mr-2"></i>  <span>{(new Date(items.posttime)).getDate() + "/" + ((new Date(items.posttime)).getMonth() + 1) + "/" + (new Date(items.posttime)).getFullYear()}</span></li>
                            </ul>
                            <h3 className="post__title">{items.title}</h3>
                            <div className='blog-p  mb-4 content-ullist' dangerouslySetInnerHTML={{ __html: items.description }} />

                          </div>
                        </div>
                          <Link href={`/es/articulos/${items.titleUrl}`}>
                            <a className='btn btn-site ripple-effbtn btn-40'>
                            Lee mas <i className="bi bi-arrow-right ml-1"></i>
                             </a>
                          </Link>
                        </div>

                      </Col>
                    ))
                    :
                    props.allbloglist.filter((items) => items.status === 'Active').map((items, i) => (
                      <Col xs={12} md={6} xl={4} key={i} className="mb-4">
                      <div className='post hover__box bog-border h-100 d-flex flex-column'>
                        <div className='wrapper'></div>

                      <div className='flex-grow-1'>
                      <div className="post__info">
                          <ul className="post__category">
                            <li>  <i className="bi bi-calendar4 mr-2"></i>  <span>{(new Date(items.posttime)).getDate() + "/" + ((new Date(items.posttime)).getMonth() + 1) + "/" + (new Date(items.posttime)).getFullYear()}</span></li>
                          </ul>
                          <h3 className="post__title">{items.title}</h3>
                          <div className='blog-p  mb-4 content-ullist' dangerouslySetInnerHTML={{ __html: items.description }} />

                        </div>
                      </div>
                        <Link href={`/es/articulos/${items.titleUrl}`}>
                          <a className='btn btn-site ripple-effbtn btn-40'>
                          Lee mas <i className="bi bi-arrow-right ml-1"></i>
                           </a>
                        </Link>
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


