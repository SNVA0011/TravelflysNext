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
    const disableEvent = (event) => event.preventDefault();
    const disableSelect = () => false;
    const handleKeyDown = (event) => {
      if (
        event.key === "F12" || 
        (event.ctrlKey && event.shiftKey && ["I", "J", "C"].includes(event.key)) || 
        (event.ctrlKey && event.key === "U")
      ) {
        event.preventDefault();
      }
    };
  
    document.addEventListener("copy", disableEvent);
    document.addEventListener("cut", disableEvent);
    document.addEventListener("contextmenu", disableEvent);
    document.addEventListener("selectstart", disableSelect);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("copy", disableEvent);
      document.removeEventListener("cut", disableEvent);
      document.removeEventListener("contextmenu", disableEvent);
      document.removeEventListener("selectstart", disableSelect);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <Head><meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale = 1.0, user-scalable = no" /></Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
