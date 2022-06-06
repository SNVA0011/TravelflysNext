import React from 'react';
import Link from "next/link"
import Image from "next/image"


export default function PopularDestinations() {
	return (
		<>
			{/* PopularDestinations */}
			<div className="cities">
				<div className="container">
					<h2 className="title title-border-bottom align-center offset-item animate">Aerolíneas populares</h2>
					<div className="cities__contentt ">
						<div className="row">
							<div className="col-xl-3 col-lg-4 col-sm-6 col-12">
								<Link href="/es/#">
									<a className="cities__item hover__box">
										<div className="cities__thumb hover__box__thumb">
											<Image src="/images/airlineone.jpg" alt="southwest Airlines" width={640} height={427} />
										</div>

										<div className="cities__info">
											<h3 className='cities__capital'>southwest Airlines</h3>										</div>
									</a>
								</Link>
							</div>
							<div className="col-xl-3 col-lg-4 col-sm-6 col-12">
								<Link href="/es/#">
									<a className="cities__item hover__box">
										<div className="cities__thumb hover__box__thumb">
											<Image src="/images/airlineone.jpg" alt="Delta Airlines" width={640} height={427} />

										</div>

										<div className="cities__info">
											<h3 className='cities__capital'>Delta Airlines</h3>
										</div>
									</a>
								</Link>
							</div>
							<div className="col-xl-3 col-lg-4 col-sm-6 col-12">
								<Link href="/es/#">
									<a className="cities__item hover__box">
										<div className="cities__thumb hover__box__thumb">
											<Image src="/images/airlineone.jpg" alt="Aer Lingus" width={640} height={427} />

										</div>

										<div className="cities__info">
											<h3 className='cities__capital'>United Airlines</h3>
										</div>
									</a>
								</Link>
							</div>
							<div className="col-xl-3 col-lg-4 col-sm-6 col-12">
								<Link href="/es/#">
									<a className="cities__item hover__box">
										<div className="cities__thumb hover__box__thumb">
											<Image src="/images/airlineone.jpg" alt="airlineone" width={640} height={427} />

										</div>

										<div className="cities__info">
											<h3 className='cities__capital'>Copa Airlines</h3>
										</div>
									</a>
								</Link>
							</div>
							<div className="col-xl-3 col-lg-4 col-sm-6 col-12">
								<Link href="/es/#">
									<a className="cities__item hover__box">
										<div className="cities__thumb hover__box__thumb">
											<Image src="/images/airlineone.jpg" alt="Aer Lingus" width={640} height={427} />

										</div>

										<div className="cities__info">
											<h3 className='cities__capital'>Alaska Airlines</h3>
										</div>
									</a>
								</Link>
							</div>
							<div className="col-xl-3 col-lg-4 col-sm-6 col-12">
								<Link href="/es/#">
									<a className="cities__item hover__box">
										<div className="cities__thumb hover__box__thumb">
											<Image src="/images/airlineone.jpg" alt="Aer Lingus" width={640} height={427} />

										</div>

										<div className="cities__info">
											<h3 className='cities__capital'>British Airways</h3>
										</div>
									</a>
								</Link>
							</div>
							<div className="col-xl-3 col-lg-4 col-sm-6 col-12">
								<Link href="/es/#">
									<a className="cities__item hover__box">
										<div className="cities__thumb hover__box__thumb">
											<Image src="/images/airlineone.jpg" alt="Aer Lingus" width={640} height={427} />

										</div>

										<div className="cities__info">
											<h3 className='cities__capital'>KLM</h3>
										</div>
									</a>
								</Link>
							</div>
							<div className="col-xl-3 col-lg-4 col-sm-6 col-12">
								<Link href="/es/#">
									<a className="cities__item hover__box">
										<div className="cities__thumb hover__box__thumb">
											<Image src="/images/airlineone.jpg" alt="Aer Lingus" width={640} height={427} />

										</div>

										<div className="cities__info">
											<h3 className='cities__capital'>SWISS</h3>
										</div>
									</a>
								</Link>
							</div>

						</div>
					</div>
				</div>
			</div>
		</>
	)
}



