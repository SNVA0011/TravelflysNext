import React from "react"
import Link from "next/link"

export default function Footer() {
  return (
  	<> 
			<section className="banner-contact">
				<div className="container">
					<div className="banner-inner">
						<h2>Look forward to going to the Best Flight. Every single time we Provied.</h2>
						<a href="tel:+0-00000000000" className="btn">Contact Us</a>
					</div>
				</div>
			</section>
			<footer id="footer" className="footer">
				<div className="container">
					<div className="footer__top">
						<div className="row">
							<div className="col-lg-3">
								<div className="footer__top__info">
									<a className="footer__top__info__logo"><img src='/images/logo.svg' alt='logo' /></a>
									<p className="footer__top__info__desc">Discover amazing things to do everywhere you go.</p>
								</div>
							</div>
							<div className="col-lg-3">
								<aside className="footer__top__nav">
									<h3>Company</h3>
									<ul>
										<li><Link href="/about-us">About Us</Link></li>
										<li><Link href="/blog">Blog</Link></li>
										<li><Link href="/contact">Contact</Link></li>
										<li className="d-none"><Link href="/"><a>Home</a></Link></li> 
										<li className="d-none"><Link href="/es"><a>Casa</a></Link></li>
									</ul>
								</aside>
							</div>
							<div className="col-lg-3">
								<aside className="footer__top__nav">
									<h3>Support</h3>
									<ul>
										<li><Link href="/privacy">Privacy Policy</Link></li>
										<li><Link href="/terms">Terms and Condition</Link></li>
										{/* <li><Link href="/site-map">Sitemap</Link></li> */}

									</ul>
								</aside>
							</div>
							<div className="col-lg-3">
								<aside className="footer__top__nav footer__top__nav--contact">
									<h3>Contact Us</h3>
									<p>Email: <a href="mailto:support@travelflys.com" className="__cf_email__" data-cfemail="">support@travelflys.com</a></p>
									{/* <p>Phone: 1 (00) 832 2342</p> */}
									<ul>
										<li className="facebook">
											<a target='_blank' title="Facebook" href="https://www.facebook.com/travelflys">
                      <i className="bi bi-facebook"></i>
											</a>
										</li>
										<li className="twitter">
											<a target='_blank' title="Twitter" href="https://twitter.com/travelflys">
                      <i className="bi bi-twitter"></i>
											</a>
										</li>
										<li className="youtube">
										<a target='_blank' title="Pinterest" href="https://www.pinterest.com/travelflys">
												<i className="bi bi-pinterest"></i>
											</a>
										</li>
										<li className="instagram">
										<a target='_blank' title="Instagram" href="https://www.instagram.com/travel_flys">
												<i className="bi bi-instagram"></i>
											</a> 
										</li>
									</ul>
								</aside>
							</div>
						</div>
					</div>
					<div className="footer__bottom">
						<p className="footer__bottom__copyright">2022 © <Link href="/">travelflys</Link>. All rights reserved.</p>
					</div>
				</div>
			</footer> 

		</>
  );
}
