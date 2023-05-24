import React from "react"
import Link from "next/link"

export default function Footer() {
	return (
		<>

			<section className="banner-contact">
				<div className="container">
					<div className="banner-inner">
						<h2>Speriamo di andare al miglior volo. Ogni volta che forniamo.</h2>
						<a href="tel:+1 (802)-909-0003" target="_blank" className="btn">Contattaci</a>
					</div>
				</div>
			</section>
			<footer id="footer" className="footer">
				<div className="container">
					<div className="footer__top">
						<div className="row">
							<div className="col-lg-3">
								<div className="footer__top__info">
									<Link href="/it">
										<a className="footer__top__info__logo">
											<img src='/images/logo-white.svg' alt='no-image-found' />
										</a>
									</Link>

									<p className="footer__top__info__desc">
										Viaggiare non è solo visitare la città, si tratta di esplorare nuovi posti, godersi la natura per realizzare il sogno e vivere un'esperienza indimenticabile.
										 <Link href="/it/chi-siamo"><a className="rdmore-fotter">Per saperne di più</a></Link>
									</p>
								</div>
							</div>
							<div className="col-lg-3">
								<aside className="footer__top__nav">
									<h3>Attività commerciale</h3>
									<ul>
										<li><i className="bi bi-caret-right-fill text-sm"></i> <Link href="/it/chi-siamo">Chi Siamo</Link></li>
										<li><i className="bi bi-caret-right-fill text-sm"></i> <Link href="/it/articolo"  >Articolo</Link></li>

										<li className="d-none"><i className="bi bi-caret-right-fill text-sm"></i> <Link href="/"><a>Home</a></Link></li>
										<li className="d-none"><i className="bi bi-caret-right-fill text-sm"></i> <Link href="/it"><a>Casa</a></Link></li>
										<li className="d-none"><i className="bi bi-caret-right-fill text-sm"></i> <Link href="/ru"><a>дом</a></Link></li>
										<li className="d-none"><i className="bi bi-caret-right-fill text-sm"></i> <Link href="/it"><a>casa</a></Link></li>
									</ul>
								</aside>
							</div>
							<div className="col-lg-3">

							</div>
							<div className="col-lg-3">
								<aside className="footer__top__nav footer__top__nav--contact">
									<h3>Contattaci</h3>
									<p><i className="bi bi-envelope-fill mr-1"></i> E-mail: <a href="mailto:support@travelflys.com" className="__cf_email__" data-cfemail="">support@travelflys.com</a></p>
									{/* <p>Phone: 1 (00) 832 2342</p> */}

									<hr className="siguenos"></hr>
									<div className="w-100">
										<span className="pt-1 mb-2 d-block text-light  follow-usfotter">Seguici</span>
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
						<b>Disclaimer:-</b> Travelflys è un sito Web di prenotazione di viaggi di terze parti e noi
						Non sono associati ad alcuna compagnia aerea direttamente o indirettamente. il nostro principale
						L'obiettivo è offrire servizi di viaggio senza soluzione di continuità ai clienti che si trovano in
						cercalo. Nel caso in cui abbiate dei dubbi o vogliate fare una domanda
						relativi ai nostri servizi, potete contattarci direttamente.
					</div>
				</div>


				<div className="footer__bottom footer__top__nav footer__top__nav--contact d-flex justify-content-between flex-wrap align-items-center flex-md-row-reverse">
					<div className="container">
						<p className="footer__bottom__copyright flex-grow-1 order-lg-2">2022 © <Link href="/it/">Travelflys</Link>. Tutti i diritti riservati.</p>
					</div>
				</div>
			</footer>

		</>
	);
}
