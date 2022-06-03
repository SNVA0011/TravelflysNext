import React from "react"
import Link from "next/link"

export default function Footer() {
  return (
    <>
      <section class="banner-contact">
        <div class="container">
          <div class="banner-inner">
            <h2>Attend the Best Flight with enthusiasm. We provided each and every time</h2>
            <a href="tel:+1-00000000000" class="btn" target="_blank">Contact Us</a>
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
                  <p class="footer__top__info__desc">Discover amazing things to do everywhere you go.</p>

                </div>
              </div>
              <div class="col-lg-3">
                <aside class="footer__top__nav">
                  <h3>Company</h3>
                  <ul>
                    <li><Link href="/about-us">About Us</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li className="d-none">
                      <Link href="/">
                        <a className='ripple-effbtn d-inline-block'>
                          <span>Home</span>
                        </a>
                      </Link>
                    </li>

                    <li className="d-none">
                      <Link href="/es">
                        <a className='ripple-effbtn d-inline-block'>
                          <span>Casa</span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </aside>
              </div>
              <div class="col-lg-3">
                <aside class="footer__top__nav">
                  <h3>Support</h3>
                  <ul>
                    <li><Link href="/privacy">Privacy Policy</Link></li>
                    <li><Link href="/terms">Terms and Condition</Link></li>
                    {/* <li><Link href="/site-map">Sitemap</Link></li> */}

                  </ul>
                </aside>
              </div>
              <div class="col-lg-3">
                <aside class="footer__top__nav footer__top__nav--contact">
                  <h3>Contact Us</h3>
                  <p>Email: <a href="mailto:support@Usairling.com" class="__cf_email__" target="_blank">support@Usairling.com</a></p>
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
            <p class="footer__bottom__copyright">2022 © <Link href="/">Usairling</Link>. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
