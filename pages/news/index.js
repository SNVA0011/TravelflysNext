import { useEffect, useState } from 'react'
import Link from "next/link";
import Head from 'next/head';
import Footer from '../../component/Footer';
import Header from "../../component/Navbar";
import NewsTile from '../../component/NewsTile';
import BreadHero from '../../component/BreadHero'


export default function News(props) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='blogdt-single'>

      <div className="call-header d-none d-md-block">
        <div className="container">
          <a href="tel:+1 (802)-341-3448" class="footer-number-md">
            <i class="bi bi-telephone mr-2"></i>
            <div class="tfn-no d-inline-block">(USA) <span>+1 (802)-341-3448</span>
            </div>
          </a>
        </div>
      </div>

      <a href="tel:+1 (802)-341-3448" className="footer-number-md">
        <div className="tfn-no">
          <p>
            <i class="bi bi-telephone"></i> How Can We Help ?<small>Feel free to  Ask</small>
          </p>
          <span>
            <i class="bi bi-telephone mr-2 d-md-none"></i> +1 (802)-341-3448
          </span>
        </div>
      </a>


      <Head>
        <title>Travel News - Travelflys</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="canonical" href={'https://www.travelflys.com/news'} />
      </Head>

      <Header />

      <div className='blogadda'>

        <div className="d-flex align-items-center justify-content-center flex-column page-title page-title--small page-title--blog text-center" >
          <div className="container">
            <div className="page-title__content">
              <h1 className="page-title__name">News </h1>
              <p className="page-title__slogan">Making travel easy</p>
            </div>
          </div>
          <BreadHero linkhtml={<><ul className="bradcum container">
            <li><Link href="/">Home</Link></li>
            <li className='mr-2'>/</li>
            <li aria-current="page">News</li>
          </ul>
          </>} />
        </div>


        <div className='popular-destination blogaddalist full-w'>
          <NewsTile allbloglist={props.allbloglist} />
        </div>

      </div>

      <Footer />
    </div>


  )
}



export const getStaticProps = async ({ params }) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
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
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  const res = await fetch("https://cms.travomint.com/news-article/showNAdata?authcode=Trav3103s987876", requestOptions)
  const json = await res.json()
  return {
    props: { allbloglist: json.response },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 60, // In seconds
  }
}
