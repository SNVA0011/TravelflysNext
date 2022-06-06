import React from "react"
import Link from "next/link"

export default function Footer() {
	return (
		<>

			<section className="banner-contact">
				<div className="container">
					<div className="banner-inner">
						<h2>Esperamos ir al mejor vuelo. Cada vez que proporcionamos.</h2>
						<a href="tel:+1-0000000000" target="_blank" className="btn">Contacta con nosotros</a>
					</div>
				</div>
			</section>
			<footer id="footer" className="footer">
				<div className="container">
					<div className="footer__top">
						<div className="row">
							<div className="col-lg-3">
								<div className="footer__top__info">
									<Link href="/es">
										<a className="footer__top__info__logo">
											<img src='/images/logo.svg' alt='no-image-found' />
										</a>
									</Link>

									<p className="footer__top__info__desc">
										Descubre cosas increíbles para hacer donde quiera que vayas.</p>

								</div>
							</div>
							<div className="col-lg-3">
								<aside className="footer__top__nav">
									<h3>Empresa</h3>
									<ul>
										<li><Link href="/es/sobre-nosotras"  >Sobre nosotros</Link></li>
										<li><Link href="/es/articulos"  >Artículos</Link></li>
										<li><Link href="/es/contacto">Contacto</Link></li>
										<li className="d-none"><Link href="/"><a>Home</a></Link></li> 
										<li className="d-none"><Link href="/es"><a>Casa</a></Link></li>
									</ul>
								</aside>
							</div>
							<div className="col-lg-3">
								<aside className="footer__top__nav">
									<h3>Support</h3>
									<ul>
										<li><Link href="/es/privacidad">Política de privacidad</Link></li>
										<li><Link href="/es/terminos">
											Términos y Condiciones</Link></li>

									</ul>
								</aside>
							</div>
							<div className="col-lg-3">
								<aside className="footer__top__nav footer__top__nav--contact">
									<h3>Contacta con nosotros</h3>
									<p>Email: <a href="mailto:support@travelflys.com" className="__cf_email__" data-cfemail="">support@travelflys.com</a></p>
									{/* <p>Phone: 1 (00) 832 2342</p> */}
									<ul>
										<li className="facebook">
											<a target='_blank' title="Facebook" href="https://www.facebook.com/travelflys">
												<i className="fa-brands fa-facebook"></i>
											</a>
										</li>
										<li className="twitter">
											<a target='_blank' title="Twitter" href="https://twitter.com/travelflys">
												<i className="fa-brands fa-twitter"></i>
											</a>
										</li>
										<li className="youtube">
											<a target='_blank' title="Instagram" href="https://www.instagram.com/travelflys">
												<i className="fa-brands fa-instagram"></i>
											</a>
										</li>
										<li className="instagram">
											<a target='_blank' title="Pinterest" href="https://www.pinterest.com/travelflys">
												<i className="fa-brands fa-pinterest"></i>
											</a>
										</li>
									</ul>
								</aside>
							</div>
						</div>
					</div>
					<div className="footer__bottom">
						<p className="footer__bottom__copyright">2022 © <Link href="/es/">travelflys</Link>. Reservados todos los derechos.</p>
					</div>
				</div>
			</footer>

		</>
	);
}
