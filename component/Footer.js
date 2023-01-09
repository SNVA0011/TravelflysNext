import React from "react"
import Link from "next/link"

export default function Footer() {
  return (
  	<> 
			<section className="banner-contact">
				<div className="container">
					<div className="banner-inner">
						<h2>Look forward to going to the Best Flight. Every single time we Provied.</h2>
						<a href="tel:+1 (802)-341-3448" target="_blank" className="btn">Contact Us</a>
					</div>
				</div>
			</section>
			<footer id="footer" className="footer">
				<div className="container">
					<div className="footer__top">
						<div className="row">
							<div className="col-lg-3">
								<div className="footer__top__info">
								<Link href="/">
									<a className="footer__top__info__logo"><img src='/images/logo-white.svg' alt='logo' /></a>
									</Link>
									<p className="footer__top__info__desc">
									Air Travel can be a necessity or a leisure activity depending upon the passenger. However, in the whole process, the protagonist of the story is the passenger or the customer itself, and
									 keeping the passenger happy is what matters the most.  <Link href="/about-us"><a className="rdmore-fotter">Read more</a></Link>
									</p>
								</div>
							</div>
							<div className="col-lg-3">
								<aside className="footer__top__nav">
									<h3>Company</h3>
									<ul>
										<li><i class="bi bi-caret-right-fill text-sm"></i> <Link href="/about-us">About Us</Link></li>
										<li><i class="bi bi-caret-right-fill text-sm"></i>  <Link href="/flights">Flight</Link></li>
										<li><i class="bi bi-caret-right-fill text-sm"></i>  <Link href="/blog">Blog</Link></li>
										<li><i class="bi bi-caret-right-fill text-sm"></i>  <Link href="/contact">Contact</Link></li>
										<li className="d-none"><i class="bi bi-caret-right-fill text-sm"></i> <Link href="/"><a>Home</a></Link></li> 
										<li className="d-none"><i class="bi bi-caret-right-fill text-sm"></i> <Link href="/es"><a>Casa</a></Link></li>
									</ul>
								</aside>
							</div>
							<div className="col-lg-3">
								<aside className="footer__top__nav">
									<h3>Support</h3>
									<ul>
										<li><i class="bi bi-caret-right-fill text-sm"></i> <Link href="/privacy">Privacy Policy</Link></li>
										<li><i class="bi bi-caret-right-fill text-sm"></i> <Link href="/terms">Terms and Condition</Link></li>
										{/* <li><Link href="/site-map">Sitemap</Link></li> */}

									</ul>
								</aside>
							</div>
							<div className="col-lg-3">
								<aside className="footer__top__nav footer__top__nav--contact">
									<h3>Contact Us</h3>
									<p><i class="bi bi-envelope-fill mr-1"></i> Email: <a href="mailto:support@travelflys.com" className="__cf_email__" data-cfemail="">support@travelflys.com</a></p>
									{/* <p>Phone: 1 (00) 832 2342</p> */}

									<hr className="siguenos"></hr>
									<div className="w-100">
					<span className="pt-1 mb-2 d-block text-light  follow-usfotter">Follow Us</span>
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
									</div>
						
									
								</aside>
							</div>
						</div>
					</div>

</div>
					<div className="footer-disclaimer">
					<div className="container">
					<b>Disclaimer:-</b> Travelflys is a third-party travel booking website, and we 
are not associated with any airlines directly or indirectly. Our main 
aim is to offer smooth travel services to the customers who are in 
search of it. In case you have any query or want to ask any questions 
related to our services, you can contact us directly.
					</div>
					</div>

				
					<div className="footer__bottom footer__top__nav footer__top__nav--contact d-flex justify-content-between flex-wrap align-items-center flex-md-row-reverse">
					<div className="container">
				
						<p className="footer__bottom__copyright  flex-grow-1">2022 © <Link href="/">Travelflys</Link>. All rights reserved.</p>
					 
					</div>
				</div>
			</footer> 

		</>
  );
}
