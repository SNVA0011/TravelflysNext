import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import { siteId } from "../utils/static"; 


export const getJsonbyPost = async (url, options) => {
  const dynrequest = await fetch(url,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: options,
      redirect: 'follow'
    });
  const getjson = await dynrequest.json();
  const data = getjson.response
  return data
};

export const getServerSideProps = async (ctx) => {
  const baseUrl = 'https://www.travelflys.com'

  //========== Dynamic - english (en) ==========//
  const posts = await getJsonbyPost("https://cms.travomint.com/travoles-content/showblogdata?authcode=Trav3103s987876", JSON.stringify({
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
  }))

  // flightsposts
  const flightsposts = await getJsonbyPost("https://cms.travomint.com/travoles-content/site-map?authcode=Trav3103s987876", JSON.stringify({
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
    "siteId": siteId,
    "status": "",
    "count": "",
    "url": "",
    "modifyBy": "",
    "modifyDate": ""
  }))

  // News
  const newsposts = await getJsonbyPost("https://cms.travomint.com/news-article/showNAdata?authcode=Trav3103s987876", JSON.stringify({
    "contentId": "",
    "pageType": "News",
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
    "siteId": siteId,
    "status": "",
    "count": "",
    "url": "",
    "modifyBy": "",
    "modifyDate": "",
  }))
  //========== End Dynamic - english (en) ==========//


  //============ Dynamic - Spanish (es) ============//
  const esposts = await getJsonbyPost("https://cms.travomint.com/news-article/showNAdata?authcode=Trav3103s987876", JSON.stringify({
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
    "siteId": siteId,
    "pageType": "Articulo",
    "extraTag": "",
    "tfnHeader": "",
    "tfnFooter1": "",
    "tfnFooter2": "",
    "tfnFooter3": "",
    "tfnPopup": ""
  }))


  // esFlightsposts 
  const esFlightsposts = await getJsonbyPost("https://cms.travomint.com/travoles-content/site-map?authcode=Trav3103s987876", JSON.stringify({
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
    "siteId": siteId,
    "status": "",
    "count": "",
    "url": "",
    "modifyBy": "",
    "modifyDate": ""
  }))

  // esNews 
  const esNewsposts = await getJsonbyPost("https://cms.travomint.com/news-article/showNAdata?authcode=Trav3103s987876", JSON.stringify({
    "contentId": "",
    "pageType": "noticias",
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
    "siteId": siteId,
    "status": "",
    "count": "",
    "url": "",
    "modifyBy": "",
    "modifyDate": "",
  }))
  //============ End Dynamic - Spanish (es) ============//

  //================ Dynamic - Ru + It ================//
  const ruposts = await getJsonbyPost("https://cms.travomint.com/news-article/showNAdata?authcode=Trav3103s987876", JSON.stringify({
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
    "siteId": siteId,
    "pageType": "ArticleRU",
    "extraTag": "",
    "tfnHeader": "",
    "tfnFooter1": "",
    "tfnFooter2": "",
    "tfnFooter3": "",
    "tfnPopup": ""
  }))

  const itposts = await getJsonbyPost("https://cms.travomint.com/news-article/showNAdata?authcode=Trav3103s987876", JSON.stringify({
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
    "siteId": siteId,
    "pageType": "ArticleIT",
    "extraTag": "",
    "tfnHeader": "",
    "tfnFooter1": "",
    "tfnFooter2": "",
    "tfnFooter3": "",
    "tfnPopup": ""
  }))
  //============== End Dynamic - Ru + It ==============//


  //============== Static ==============//
  const staticUrl = [
    { 'url': '', 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "about-us", 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "contact", 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "privacy", 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "terms", 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "airlines", 'time': new Date().toISOString().split('T')[0] + 'T06:47:34+00:00' },
    { 'url': 'news', 'time': new Date().toISOString().split('T')[0] + 'T06:47:34+00:00' },
    { 'url': 'blog', 'time': new Date().toISOString().split('T')[0] + 'T06:47:34+00:00' },
    { 'url': 'flights', 'time': new Date().toISOString().split('T')[0] + 'T06:47:34+00:00' },
    { 'url': 'ru', 'time': '2023-05-24T06:47:34+00:00' },
    { 'url': "ru/o-hac", 'time': '2023-05-24T06:47:34+00:00' },
    { 'url': 'ru/blog', 'time': new Date().toISOString().split('T')[0] + 'T06:47:34+00:00' },
    { 'url': 'it', 'time': '2023-05-24T06:47:34+00:00' },
    { 'url': "it/chi-siamo", 'time': '2023-05-24T06:47:34+00:00' },
    { 'url': 'it/articolo', 'time': new Date().toISOString().split('T')[0] + 'T06:47:34+00:00' },
  ]
  const esStaticUrl = [
    { 'url': '', 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "contacto", 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "sobre-nosotras", 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "privacidad", 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "terminos", 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "aerolineas", 'time': new Date().toISOString().split('T')[0] + 'T06:47:34+00:00' },
    { 'url': "noticias", 'time': new Date().toISOString().split('T')[0] + 'T06:47:34+00:00' },
    { 'url': "articulos", 'time': new Date().toISOString().split('T')[0] + 'T06:47:34+00:00' },
    { 'url': "vuelos", 'time': new Date().toISOString().split('T')[0] + 'T06:47:34+00:00' },
  ]
  //============== End Static ==============//


  // Airlines
  const getAirlines = await getJsonbyPost("https://cms.travomint.com/airline_category/showAirlineCategorybySiteIdAndLanguage?authcode=Trav3103s987876", JSON.stringify({
    "siteId": siteId,
    "language": "eng"
  }))
  const getAirlinesEs = await getJsonbyPost("https://cms.travomint.com/airline_category/showAirlineCategorybySiteIdAndLanguage?authcode=Trav3103s987876", JSON.stringify({
    "siteId": siteId,
    "language": "es"
  }))


  //===== Eng mapping =====//
  const staticSitemaps = staticUrl?.map((item) => ({
    loc: `${baseUrl}/${item.url.replace('&', '&amp;')}`,
    lastmod: item.time,
    changefreq: 'daily'
  }));
  // blog
  const blogSitemaps = posts && posts?.filter((item) => item.status === "Active").map((item) => ({
    loc: `${baseUrl}/blog/${item.titleUrl.replace('&', '&amp;')}`,
    lastmod: new Date(item.posttime).toISOString().split('T')[0] + 'T06:47:34+00:00',
    changefreq: 'daily'
  }));

  // flights
  const flightsSitemaps = flightsposts && flightsposts?.filter((items) => items.status === "Active").filter((items) => items.pageType === "Airline").map((items) => ({
    loc: `${baseUrl}/flights/${items.url.replace('&', '&amp;')}-${items.pageValue.replace('&', '&amp;')}`,
    lastmod: '2022-11-30T06:47:34+00:00',
    changefreq: 'daily'
  }));

  // news
  const newsSitemaps = newsposts && newsposts?.filter((items) => items.status === "Active").map((items) => ({
    loc: `${baseUrl}/news/${items.titleUrl.replace('&', '&amp;')}`,
    lastmod: new Date(items.posttime).toISOString().split('T')[0] + 'T06:47:34+00:00',
    changefreq: 'daily'
  }));

  //===== Es mapping =====// 
  const esStaticSitemaps = esStaticUrl?.map((item) => ({
    loc: `${baseUrl}/es/${item.url.replace('&', '&amp;')}`,
    lastmod: item.time,
    changefreq: 'daily'
  }));
  // blog
  const esBlogSitemaps = esposts && esposts?.filter((item) => item.status === "Active").map((item) => ({
    loc: `${baseUrl}/es/articulos/${item.titleUrl.replace('&', '&amp;')}`,
    lastmod: new Date(item.posttime).toISOString().split('T')[0] + 'T06:47:34+00:00',
    changefreq: 'daily'
  }));
  // flights
  const esFlightsSitemaps = esFlightsposts && esFlightsposts?.filter((item) => item.status === "Active").filter((item) => item.pageType === "AirlineE").map((item) => ({
    loc: `${baseUrl}/es/vuelos/${item.url.replace('&', '&amp;')}-${item.pageValue.replace('&', '&amp;')}`,
    lastmod: '2022-11-30T06:47:34+00:00',
    changefreq: 'daily'
  }));

  // flights
  const esNewsSitemaps = esNewsposts && esNewsposts?.filter((item) => item.status === "Active").map((item) => ({
    loc: `${baseUrl}/es/noticias/${item.titleUrl.replace('&', '&amp;')}`,
    lastmod: new Date(item.posttime).toISOString().split('T')[0] + 'T06:47:34+00:00',
    changefreq: 'daily'
  }));

  // italian + russian
  const ruBlogSitemaps = ruposts && ruposts?.filter((item) => item.status === "Active").map((item) => ({
    loc: `${baseUrl}/ru/blog/${item.titleUrl.replace('&', '&amp;')}`,
    lastmod: new Date(item.posttime).toISOString().split('T')[0] + 'T06:47:34+00:00',
    changefreq: 'daily'
  }));
  const itBlogSitemaps = itposts && itposts?.filter((item) => item.status === "Active").map((item) => ({
    loc: `${baseUrl}/it/articolo/${item.titleUrl.replace('&', '&amp;')}`,
    lastmod: new Date(item.posttime).toISOString().split('T')[0] + 'T06:47:34+00:00',
    changefreq: 'daily'
  }));

  // Airlines
  const AirlineSit = getAirlines && getAirlines?.filter((item) => item.status === "Active").map((item) => ({
    loc: `${baseUrl}/airlines/${item.url.replace('&', '&amp;')}`,
    lastmod: new Date(item.postTime).toISOString().split('T')[0] + 'T06:47:34+00:00',
    changefreq: 'daily'
  }));
  const esAirlineSit = getAirlinesEs && getAirlinesEs?.filter((item) => item.status === "Active").map((item) => ({
    loc: `${baseUrl}/es/aerolineas/${item.url.replace('&', '&amp;')}`,
    lastmod: new Date(item.postTime).toISOString().split('T')[0] + 'T06:47:34+00:00',
    changefreq: 'daily'
  }));






  //========== Mix (en + es) ==========//
  const fields = [
    ...staticSitemaps, ...blogSitemaps, ...flightsSitemaps, ...newsSitemaps,
    ...esStaticSitemaps, ...esBlogSitemaps, ...esFlightsSitemaps, ...esNewsSitemaps,
    ...ruBlogSitemaps, ...itBlogSitemaps,
    ...AirlineSit, ...esAirlineSit,
  ];

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {
  //console
}