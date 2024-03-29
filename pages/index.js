import Head from 'next/head'
import PopularDestinations from '../component/PopularDestination'
import Enginebox from '../component/Enginebox'
import Footer from '../component/Footer'
import Header from '../component/Navbar'
import BlogTile from '../component/BlogTile';
import Link from "next/link"
import { siteId } from '../utils/static'

export default function Home(props) {
  return (
  <>
  
  <Head>
    <title>Travelflys | Travel Agency | Flight Booking | Ticket cancellation | Online Reservation</title>
    <meta name="description" content="Find the best fares at Travelflys on International and domestic flight tickets. Also find the ways to solve customer service issues faster and easier than ever." />
    <meta name="keywords" content="" />
    <link rel="canonical" href={'https://www.travelflys.com'} /> 
  </Head>
  
    <div className='homepage'> 

      <Header />

      <div className='business-main'>
        <main id="main" className="site-main overflow">
          <Enginebox />

          <PopularDestinations />

          <div className="blogs">
            <div className="container p-0">
              <h2 className="title title-border-bottom align-center offset-item animate">From Our Blog</h2>
              <div className="news__content offset-item animate">
                <BlogTile allbloglist={props.allbloglist} showitem={3}  nulltopsp='true' />
                <div className="align-center button-wrap mt-4">
                  <Link href="/blog">
                    <a className="btn btn-border btn-lg-readmore">
                      View more
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>


        </main> 
      </div>

      <Footer />

    </div>
  </>
  )
}




export const getStaticProps = async ({ params }) => {
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
    "siteId": siteId,
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
  return {
    props: { allbloglist: json.response },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 60, // In seconds
  }
}

