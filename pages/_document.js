import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const { pathname } = ctx;
    const lang = pathname.startsWith("/es") ? "es" : pathname.startsWith("/ru") ? "ru" : pathname.startsWith("/it") ? "it" : "en";
    return { ...initialProps, lang };
  }


  render() {
    const { lang } = this.props;
    return (
      <Html lang={lang}>
        <Head>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" rel="stylesheet" />

      
            {/* <!-- Google Tag Manager --> */}
            <script dangerouslySetInnerHTML={{
              __html: `(function (w, d, s, l, i) {
              w[l] = w[l] || []; w[l].push({
                'gtm.start':
                  new Date().getTime(), event: 'gtm.js'
              }); var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                  'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-MZXPCBQ');`}}></script>
            {/* <!-- End Google Tag Manager --> */}

        </Head>
        <body>


          {/* <!-- Google Tag Manager (noscript) --> */}
          <noscript dangerouslySetInnerHTML={{
            __html: `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MZXPCBQ" height="0" width="0"
            style="display:none;visibility:hidden"></iframe></noscript>`}}></noscript>
          {/* <!-- End Google Tag Manager (noscript) --> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
