import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link"
import Header from '../../component/ru/Navbar'
import Footer from "../../component/ru/Footer"
import Head from 'next/head'
import BreadHero from "../../component/ru/BreadHero";
import CallUkToast from "../../component/CallUkToast";

export default function AboutUs() {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
     <>
        
        <Head>
        <title>O нас - Travelflys</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="canonical" href={'https://www.travelflys.com/ru/o-hac'} />
    </Head>
    
        <div className='blogdt-single'>

            <div className="call-header d-none d-md-block">
                <div className="container">
                    <a href="tel:+1 (802)-909-0003" className="footer-number-md">
                        <i className="bi bi-telephone mr-2"></i>
                        <div className="tfn-no d-inline-block">(USA) <span>+1 (802)-909-0003</span>
                        </div>
                    </a>
                    <a href={`tel:+44 (20) 37693132`} className="footer-number-md animdelay-2s">
                        <i className="bi bi-telephone mr-2"></i>
                        <div className="tfn-no d-inline-block">
                            (UK) <span>+44 (20) 37693132</span>
                        </div>
                    </a>
                </div>
            </div>


            {/*------- CallUkToast -------*/}
            <CallUkToast />
            {/*----- end CallUkToast -----*/}

            <a href="tel:+1 (802)-909-0003" className="footer-number-md">
                <div className="tfn-no">
                    <p>
                        <i className="bi bi-telephone"></i> Как мы можем помочь ?<small>не стейсняйся спросить</small>
                    </p>
                    <span>
                        <i className="bi bi-telephone mr-2 d-md-none"></i> +1 (802)-909-0003
                    </span>
                </div>
            </a>



            <Header />



            <div className="d-flex align-items-center justify-content-center flex-column page-title page-title--small page-title--blog align-left" >
                <div className="container">
                    <div className="page-title__content">
                        <h1 className="page-title__name">О нас </h1>
                    </div>
                </div>
                <BreadHero linkhtml={<><ul className="bradcum container">
                    <li className="breadcrumb-item" > <Link href="/ru/">Дом</Link> </li>
                    <li className='mr-2'>/</li>
                    <li className=' active text-white' aria-current="page">o нас</li> </ul></>} />
            </div>



            <div className='about-uspage full-w pyblock-80'>
                <Container>
                    <Row>
                        <Col xs={12} xl={12} className='about-font-18 mb-4 about_area'>
                            <p>
                                Путешествие — это не просто осмотр достопримечательностей, это изучение новых мест, наслаждение
                                природа, чтобы осуществить мечту и получить незабываемые впечатления. Зависит от
                                полностью зависит от вас, какую среду вы хотите предпочесть, потому что это может быть как
                                спокойный, как беспокойный, захватывающий и авантюрный. Но при путешествии по причинам
                                бизнес в то время вам нужна помощь профессионального совета.
                                Но когда вы ищете поездку на выходные, вы можете развлечься по-своему.
                            </p>

                            <p>Мы в <strong>Travelflys</strong> прекрасно понимаем это. Мы также просматриваем
                                ваших запросов, таких как то, что вам нужно и что вы хотите. Так что теперь нет необходимости
                                недоумения, потому что здесь вы сможете насладиться поездкой в
                                желаемая форма сердца. Вы также можете наслаждаться роскошными рейсами в пределах вашего
                                бюджет. Согласно последнему предложению у нас самый дешевый рейс по направлениям
                                избранное.</p>

                            <p>Помимо перелетов, мы также заботимся об основных потребностях пассажиров.
                                пассажиров, необходимых во время поездки, таких как пребывание в
                                Отели. <strong>Travelflys</strong> полностью основан на доверии пассажиров. Всегда
                                мы служим, чтобы удовлетворить пассажиров. Но и ты должен быть с нами и
                                убедитесь, что они будут продолжать возвращаться к нам. Нашим приоритетом является создание отличного
                                поездки для пассажиров, которых не смущает небольшой бюджет.</p>

                            <p>Безопасность пассажиров, соблюдение бюджета, выбор цены
                                дешевле и пребывание в самом роскошном и роскошном месте - суть поездки; и
                                мы смотрим на них с большой любовью.</p>

                            <p>Итак, сейчас век цифрового мира. Вам не о чем беспокоиться. просто должен
                                позвоните, отправьте электронное письмо нашим сервисным представителям
                                для клиента, который ждет, чтобы спланировать свою поездку. Так что отложите стресс в сторону
                                и приезжайте и наслаждайтесь поездкой с нами.</p>

                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
     </>
    );
}
