import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import '../styles/globals.css'
import '../styles/responsive.css'
import React, { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const lang = pathname.startsWith("/es") ? "es" : pathname.startsWith("/ru") ? "ru" : pathname.startsWith("/it") ? "it" : "en";
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
