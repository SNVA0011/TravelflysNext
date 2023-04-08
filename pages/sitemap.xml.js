/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import { getServerSideSitemapLegacy } from 'next-sitemap'
import { GetServerSideProps } from 'next'

const getJsonbyPost = async (url, options) => {
  let dynrequest = await fetch(url,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: options,
      redirect: 'follow'
    });

  dynrequest = await dynrequest.json();
  let data = dynrequest.response
  return data
}


export const getServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')


  let baseUrl = 'https://www.travelflys.com'

  //========== Data Fetching - English (en) ========== 
  let posts = await getJsonbyPost("https://cms.travomint.com/travoles-content/showblogdata?authcode=Trav3103s987876", JSON.stringify({
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
  }))

  // flightsposts
  let flightsposts = await getJsonbyPost("https://cms.travomint.com/travoles-content/site-map?authcode=Trav3103s987876", JSON.stringify({
    "contentId": "",
    "pageType": "",
    "pageValue": "",
    "pageName": "",
    "metaTitle": "",
    "metaKeyword": "",
    "metaDesc": "",
    "otherMeta": "",
    "dealCode": "",
    "dealTitle": "",
    "contentTitle": "",
    "contentData": "",
    "contentImage": "",
    "siteId": "143",
    "status": "",
    "count": "",
    "url": "",
    "modifyBy": "",
    "modifyDate": ""
  }))

  // News
  let newsposts = await getJsonbyPost("https://cms.travomint.com/news-article/showNAdata?authcode=Trav3103s987876", JSON.stringify({
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
  }))

  //========== English (en) ==========
  const staticUrl = [
    { 'url': '', 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "about-us", 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "flights", 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "blog", 'time': '2022-11-30T06:47:34+00:00' }, 
    { 'url': "contact", 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "privacy", 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "terms", 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': 'news', 'time': new Date().toISOString().split('T')[0] + 'T06:47:34+00:00' },
    { 'url': 'blog', 'time': new Date().toISOString().split('T')[0] + 'T06:47:34+00:00' },
    { 'url': 'flights', 'time': new Date().toISOString().split('T')[0] + 'T06:47:34+00:00' }
  ]

  // staticUrl
  const staticSitemaps = staticUrl.map((item) => ({
    loc: `${baseUrl}/${item.url.replace('&', '&amp;')}`,
    lastmod: item.time,
    changefreq: 'daily'
  }));
  // blog
  const blogSitemaps = posts && posts.filter((item) => item.status === "Active").map((item) => ({
    loc: `${baseUrl}/blog/${item.titleUrl.replace('&', '&amp;')}`,
    lastmod: new Date(item.posttime).toISOString().split('T')[0] + 'T06:47:34+00:00',
    changefreq: 'daily'
  }));

  // flights
  const flightsSitemaps = flightsposts && flightsposts.filter((items) => items.status === "Active").filter((items) => items.pageType === "Airline").map((items) => ({
    loc: `${baseUrl}/flights/${items.url.replace('&', '&amp;')}-${items.pageValue.replace('&', '&amp;')}`,
    lastmod: '2022-11-30T06:47:34+00:00',
    changefreq: 'daily'
  }));

  // news
  const newsSitemaps = newsposts && newsposts.filter((items) => items.status === "Active").map((items) => ({
    loc: `${baseUrl}/news/${items.titleUrl.replace('&', '&amp;')}`,
    lastmod: new Date(items.posttime).toISOString().split('T')[0] + 'T06:47:34+00:00',
    changefreq: 'daily'
  }));


  //========== Data Fetching - Spanish (es) ========== 
  let esposts = await getJsonbyPost("https://cms.travomint.com/news-article/showNAdata?authcode=Trav3103s987876", JSON.stringify({
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
  }))


  // esFlightsposts 
  let esFlightsposts = await getJsonbyPost("https://cms.travomint.com/travoles-content/site-map?authcode=Trav3103s987876", JSON.stringify({
    "contentId": "",
    "pageType": "",
    "pageValue": "",
    "pageName": "",
    "metaTitle": "",
    "metaKeyword": "",
    "metaDesc": "",
    "otherMeta": "",
    "dealCode": "",
    "dealTitle": "",
    "contentTitle": "",
    "contentData": "",
    "contentImage": "",
    "siteId": "143",
    "status": "",
    "count": "",
    "url": "",
    "modifyBy": "",
    "modifyDate": ""
  }))

  // esNews 
  let esNewsposts = await getJsonbyPost("https://cms.travomint.com/news-article/showNAdata?authcode=Trav3103s987876", JSON.stringify({
    contentId: "",
    pageType: "noticias",
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
  }))

  //========== Spanish (es) ==========
  const esStaticUrl = [
    { 'url': '', 'time': '2022-11-30T06:47:34+00:00' }, 
    { 'url': "contacto", 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "sobre-nosotras", 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "vuelos", 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "articulos", 'time': '2022-11-30T06:47:34+00:00' }, 
    { 'url': "privacidad", 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "terminos", 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "noticias", 'time': new Date().toISOString().split('T')[0] + 'T06:47:34+00:00' },
    { 'url': "articulos", 'time': new Date().toISOString().split('T')[0] + 'T06:47:34+00:00' },
    { 'url': "vuelos", 'time': new Date().toISOString().split('T')[0] + 'T06:47:34+00:00' },
  ]

  // esStaticUrl
  const esStaticSitemaps = esStaticUrl.map((item) => ({
    loc: `${baseUrl}/es/${item.url.replace('&', '&amp;')}`,
    lastmod: item.time,
    changefreq: 'daily'
  }));
  // blog
  const esBlogSitemaps = esposts && esposts.filter((item) => item.status === "Active").map((item) => ({
    loc: `${baseUrl}/es/articulos/${item.titleUrl.replace('&', '&amp;')}`,
    lastmod: new Date(item.posttime).toISOString().split('T')[0] + 'T06:47:34+00:00',
    changefreq: 'daily'
  }));
  // flights
  const esFlightsSitemaps = esFlightsposts && esFlightsposts.filter((item) => item.status === "Active").filter((item) => item.pageType === "AirlineE").map((item) => ({
    loc: `${baseUrl}/es/vuelos/${item.url.replace('&', '&amp;')}-${item.pageValue.replace('&', '&amp;')}`,
    lastmod: '2022-11-30T06:47:34+00:00',
    changefreq: 'daily'
  }));

  // flights
  const esNewsSitemaps = esNewsposts && esNewsposts.filter((item) => item.status === "Active").map((item) => ({
    loc: `${baseUrl}/es/noticias/${item.titleUrl.replace('&', '&amp;')}`,
    lastmod: new Date(item.posttime).toISOString().split('T')[0] + 'T06:47:34+00:00',
    changefreq: 'daily'
  }));

  //========== Mix (en + es) ==========
  const fields = [
    ...staticSitemaps, ...blogSitemaps, ...flightsSitemaps, ...newsSitemaps,
    ...esStaticSitemaps, ...esBlogSitemaps, ...esFlightsSitemaps, ...esNewsSitemaps
  ];

  return getServerSideSitemapLegacy(ctx, fields)
}

// Default export to prevent next.js errors
export default function Sitemap() { }