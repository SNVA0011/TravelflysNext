import React from "react"
import Link from "next/link"

export default function Footer() {
  return (

    <>
      <section class="banner-contact">
        <div class="container">
          <div class="banner-inner">
            <h2>Asista al Best Flight con entusiasmo. Proporcionamos todas y cada una de las veces</h2>
            <a href="tel:+1-0000000000" class="btn">Contacta con nosotros</a>
          </div>
        </div>
      </section>
      <footer id="footer" class="footer">
        <div class="container">
          <div class="footer__top">
            <div class="row">
              <div class="col-lg-3">
                <div class="footer__top__info">
                  <Link href="/">
                    <a class="footer__top__info__logo">
                      <img src='/images/logo.svg' width={166} height={29} alt="logo" />
                    </a>
                  </Link>
                  <p class="footer__top__info__desc">
                    Descubre cosas increíbles para hacer donde quiera que vayas.</p>

                </div>
              </div>
              <div class="col-lg-3">
                <aside class="footer__top__nav">
                  <h3>Empresa</h3>
                  <ul>
                    <li><Link href="/es/sobre-nosotras"  >Sobre nosotros</Link></li>
                    <li><Link href="/es/articulos"  >Artículos</Link></li>
                    <li><Link href="/es/contacto" title="Contact">Contacto</Link></li>
                    <li className="d-none">
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </li>

                    <li className="d-none">
                      <Link href="/es">
                        <span>Casa</span>
                      </Link>
                    </li> 
                  </ul>
                </aside>
              </div>
              <div class="col-lg-3">
                <aside class="footer__top__nav">
                  <h3>Apoyo</h3>
                  <ul>
                    <li><Link href="/es/privacidad" title="Contact" >Política de privacidad</Link></li>
                    <li><Link href="/es/terminos" title="terminos" >Términos y Condiciones</Link></li>
                    {/* <li><Link href="/es/site-map" title="Contact" >
mapa del sitio</Link></li> */}

                  </ul>
                </aside>
              </div>
              <div class="col-lg-3">
                <aside class="footer__top__nav footer__top__nav--contact">
                  <h3>Contacta con nosotros</h3>
                  <p>Email: <a href="mailto:support@Usairling.com<" class="__cf_email__" target="_blank">support@Usairling.com</a></p>
                  {/* <p>Phone: 1 (00) 832 2342</p> */}
                  <ul>
                    <li class="facebook">
                      <a title="Facebook" href="https://www.facebook.com/USAirling" target="_blank">
                        <i class="fa-brands fa-facebook"></i>
                      </a>
                    </li>
                    <li class="twitter">
                      <a title="Twitter" href="https://www.twitter.com/USAirling" target="_blank">
                        <i class="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li class="youtube">
                      <a title="pinterest" href="https://www.pinterest.com/usairling" target="_blank">
                        <i class="fa-brands fa-pinterest"></i>
                      </a>
                    </li>
                    <li class="instagram">
                      <a title="Instagram" href="https://www.instagram.com/usairling" target="_blank">
                        <i class="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
          <div class="footer__bottom">
            <p class="footer__bottom__copyright">2022 © <Link href="/es/">Usairling</Link>.
              Reservados todos los derechos.</p>
          </div>
        </div>
      </footer>

    </>
  );
}
