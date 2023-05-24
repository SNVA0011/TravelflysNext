import React from "react"
import Link from "next/link"

export default function Footer() {
	return (
		<>

			<section className="banner-contact">
				<div className="container">
					<div className="banner-inner">
						<h2>Мы надеемся пойти на лучший рейс. Каждый раз предоставляем.</h2>
						<a href="tel:+1 (802)-909-0003" target="_blank" className="btn">Связаться с нами</a>
					</div>
				</div>
			</section>
			<footer id="footer" className="footer">
				<div className="container">
					<div className="footer__top">
						<div className="row">
							<div className="col-lg-3">
								<div className="footer__top__info">
									<Link href="/ru">
										<a className="footer__top__info__logo">
											<img src='/images/logo-white.svg' alt='no-image-found' />
										</a>
									</Link>

									<p className="footer__top__info__desc">
										Путешествие – это не просто осмотр достопримечательностей, это знакомство с новыми местами, наслаждение природой для осуществления мечты и получения незабываемых впечатлений. <Link href="/ru/o-hac"><a className="rdmore-fotter">Читать далее</a></Link>
									</p>
								</div>
							</div>
							<div className="col-lg-3">
								<aside className="footer__top__nav">
									<h3>Компания</h3>
									<ul> 
										<li><i className="bi bi-caret-right-fill text-sm"></i> <Link href="/ru/o-hac">о нас</Link></li> 
										<li><i className="bi bi-caret-right-fill text-sm"></i> <Link href="/ru/blog"  >Блог</Link></li> 

										<li className="d-none"><i className="bi bi-caret-right-fill text-sm"></i> <Link href="/"><a>Home</a></Link></li>
										<li className="d-none"><i className="bi bi-caret-right-fill text-sm"></i> <Link href="/es"><a>Casa</a></Link></li>
										<li className="d-none"><i className="bi bi-caret-right-fill text-sm"></i> <Link href="/ru"><a>дом</a></Link></li>
										<li className="d-none"><i className="bi bi-caret-right-fill text-sm"></i> <Link href="/it"><a>casa</a></Link></li>
									</ul>
								</aside>
							</div>
							<div className="col-lg-3"> 
							</div>
							<div className="col-lg-3">
								<aside className="footer__top__nav footer__top__nav--contact">
									<h3>Связаться с нами</h3>
									<p><i className="bi bi-envelope-fill mr-1"></i> Электронная почта: <a href="mailto:support@travelflys.com" className="__cf_email__" data-cfemail="">support@travelflys.com</a></p>
									{/* <p>Phone: 1 (00) 832 2342</p> */}
									
									<hr className="siguenos"></hr>
									<div className="w-100">
										<span className="pt-1 mb-2 d-block text-light  follow-usfotter">Подписывайтесь на нас</span>
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
						<b>Отказ от ответственности.</b> Travelflys — это сторонний веб-сайт по бронированию путешествий, и мы
						Они не связаны ни с одной авиакомпанией прямо или косвенно. наш главный
						Цель состоит в том, чтобы предложить беспрепятственные туристические услуги клиентам, которые находятся в
						ищите это. Если у вас есть сомнения или вы хотите задать вопрос
						связанных с нашими услугами, вы можете связаться с нами напрямую.
					</div>
					</div>

			
					<div className="footer__bottom footer__top__nav footer__top__nav--contact d-flex justify-content-between flex-wrap align-items-center flex-md-row-reverse">
					<div className="container">
						<p className="footer__bottom__copyright flex-grow-1 order-lg-2">{new Date().getFullYear()} © <Link href="/ru/">Travelflys</Link>.  Все права защищены.</p>
					</div>
				</div>
			</footer>

		</>
	);
}
