import React from "react"
import Link from "next/link"

export default function Footer() {
	return (
		<>

			<section className="banner-contact">
				<div className="container">
					<div className="banner-inner">
						<h2>Esperamos ir al mejor vuelo. Cada vez que proporcionamos.</h2>
						<a href="tel:+1 (802)-909-0003" target="_blank" className="btn">Contacta con nosotros</a>
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
											<img src='/images/logo-white.svg' alt='no-image-found' />
										</a>
									</Link>

									<p className="footer__top__info__desc">
									Viajar no es sólo hacer turismo, se trata de explorar nuevos lugares, disfrutar de la naturaleza para cumplir el sueño y conseguir una experiencia inolvidable. <Link href="/es/sobre-nosotras"><a className="rdmore-fotter">Lee mas</a></Link>
									</p>
								</div>
							</div>
							<div className="col-lg-3">
								<aside className="footer__top__nav">
									<h3>Empresa</h3>
									<ul>
										<li><i class="bi bi-caret-right-fill text-sm"></i> <Link href="/es/sobre-nosotras">Sobre nosotros</Link></li>
										<li><i class="bi bi-caret-right-fill text-sm"></i> <Link href="/es/noticias">Noticias</Link></li>
										<li><i class="bi bi-caret-right-fill text-sm"></i> <Link href="/es/vuelos">Vuelo</Link></li>
										<li><i class="bi bi-caret-right-fill text-sm"></i> <Link href="/es/articulos"  >Artículos</Link></li>
										<li><i class="bi bi-caret-right-fill text-sm"></i> <Link href="/es/contacto">Contacto</Link></li>
										<li className="d-none"><i class="bi bi-caret-right-fill text-sm"></i> <Link href="/"><a>Home</a></Link></li>
										<li className="d-none"><i class="bi bi-caret-right-fill text-sm"></i> <Link href="/es"><a>Casa</a></Link></li>
									</ul>
								</aside>
							</div>
							<div className="col-lg-3">
								<aside className="footer__top__nav">
									<h3>Support</h3>
									<ul>
										<li><i class="bi bi-caret-right-fill text-sm"></i> <Link href="/es/privacidad">Política de privacidad</Link></li>
										<li><i class="bi bi-caret-right-fill text-sm"></i> <Link href="/es/terminos">
											Términos y Condiciones</Link></li>

									</ul>
								</aside>
							</div>
							<div className="col-lg-3">
								<aside className="footer__top__nav footer__top__nav--contact">
									<h3>Contacta con nosotros</h3>
									<p><i class="bi bi-envelope-fill mr-1"></i> Email: <a href="mailto:support@travelflys.com" className="__cf_email__" data-cfemail="">support@travelflys.com</a></p>
									{/* <p>Phone: 1 (00) 832 2342</p> */}
									
									<hr className="siguenos"></hr>
									<div className="w-100">
						<span className="pt-1 mb-2 d-block text-light  follow-usfotter">Síguenos</span>
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
					<b>Descargo de responsabilidad:-</b> Travelflys es un sitio web de reserva de viajes de terceros, y nosotros
no están asociados con ninguna aerolínea directa o indirectamente. Nuestro principal
El objetivo es ofrecer servicios de viaje fluidos a los clientes que están en
buscarlo. Por si tienes alguna duda o quieres hacer alguna pregunta
relacionados con nuestros servicios, puede contactarnos directamente.
					</div>
					</div>

			
					<div className="footer__bottom footer__top__nav footer__top__nav--contact d-flex justify-content-between flex-wrap align-items-center flex-md-row-reverse">
					<div className="container">
						<p className="footer__bottom__copyright flex-grow-1 order-lg-2">2022 © <Link href="/es/">Travelflys</Link>. Reservados todos los derechos.</p>
					</div>
				</div>
			</footer>

		</>
	);
}
