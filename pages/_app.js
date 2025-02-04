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

  useEffect(() => {
    try {
      const disableCopy = (event) => event.preventDefault();
      const disableSelect = () => false;
  
      document.addEventListener("copy", disableCopy);
      document.addEventListener("cut", disableCopy);
      document.addEventListener("contextmenu", disableCopy);
      document.addEventListener("selectstart", disableSelect);
  
      return () => {
        document.removeEventListener("copy", disableCopy);
        document.removeEventListener("cut", disableCopy);
        document.removeEventListener("contextmenu", disableCopy);
        document.removeEventListener("selectstart", disableSelect);
      };
    } catch (error) {
      console.error("Error in useEffect:", error);
    }
  }, []);


  return (
    <>
      <Head><meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale = 1.0, user-scalable = no" /></Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
