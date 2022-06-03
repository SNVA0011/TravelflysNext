import React, { useEffect } from 'react'
import Head from 'next/head'
import BreadHero from "../../component/es/BreadHero";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from "next/link"
import Footer from '../../component/es/Footer';
import Header from "../../component/es/Navbar";


export default function Terms() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <> 
            <Head>
            <title>Usairling | Términos y condiciones</title>
                <meta name="description" content="Usairling no actúa como mandante, pero hace arreglos con proveedores externos, como, entre otros, aerolíneas, operadores turísticos, proveedores y consolidadores." />
                <meta name="keywords" content="Usairling, cheap flight booking website, best place to book flight, online flight booking" />
                <link rel="canonical" href={'https://www.usairling.com/es/terminos'} />
            </Head>

            <Header /> 

         
            <div class="page-title page-title--small align-left" >
                <div class="container">
                    <div class="page-title__content">
                        <h1 class="page-title__name">Términos y condiciones</h1>
                        <p class="page-title__slogan">Te digo los términos</p>
                    </div>
                </div>
                <BreadHero linkhtml={<><ul className='bradcum'> <li> <Link href="/es/">Casa</Link> </li> <li className='breadcrumb-item active' aria-current="page"> Términos</li> </ul></>} />
            </div>



            <div className='about-uspage privacy__policy full-w pyblock-80  mb-5'>
                <Container>
                    <Row>
                        <Col xs={12} xl={12} className='about-font-18'>
                            <h2 className='sub-title'>Términos y condiciones</h2>
                            <p>Usairling no actúa como mandante, pero hace arreglos con proveedores externos, como, entre otros, aerolíneas, operadores turísticos, proveedores y consolidadores.</p>
                            <p>Al usar este Sitio, usted reconoce que las tarifas ofrecidas por Usairling y las compañías afiliadas son el resultado de negociaciones entre Usairling y los Proveedores de viajes e incluyen ciertas tarifas retenidas por ellos por sus servicios, impuestos y otros cargos. Al reservar con cualquier Proveedor de viajes a través de este Sitio, usted autoriza a Usairling y a las compañías afiliadas a realizar reservas o celebrar un contrato en su nombre con Proveedores de viajes por el precio total que se muestra, incluidas dichas tarifas y cualquier impuesto o cargo aplicable relacionado con el Proveedor de viajes o Servicios de Cheapoflightticket.</p>

                            <p>Usairling no será responsable de los errores o inexactitudes en el Sitio, ni de la falla de los Proveedores de viajes de los que obtiene servicios a través de este Sitio, incluidos, entre otros, las aerolíneas, los operadores turísticos, los proveedores y los consolidadores. Usairling, al proporcionar servicios de gestión de viajes, no respalda, garantiza ni asegura los productos o servicios proporcionados por un proveedor externo, la situación financiera de dichos proveedores o el reembolso a usted de cualquier pérdida como resultado de la situación financiera de dichos proveedores. proveedor. En el caso de que un proveedor incumpla antes de prestarle el servicio cuando se haya realizado un pago, su único recurso para obtener un reembolso será el proveedor incumplidor o cualquier otro tercero responsable, a menos que dicha pérdida haya sido causada únicamente por Usairling. En aquellas situaciones en las que un proveedor incumpla antes de prestar los servicios, puede presentar cualquier recurso contra el proveedor para obtener un reembolso, según lo permita la ley o los estatutos.</p>
                            <p>
                                Salvo que se indique expresamente en este documento, Usairling no asume ninguna responsabilidad por las acciones relacionadas con los servicios de viaje fuera del control de Usairling o sus empleados. Usairling no es responsable de ningún acto, error, omisión, lesión, pérdida, accidente, daño, retraso, incumplimiento, irregularidad o cualquier consecuencia de los mismos, que pueda ser ocasionado por negligencia, incumplimiento o cualquier otro acto o inacción de cualquier Proveedor de viajes. Usairling no será responsable de ninguna fluctuación en el precio o cambio en el horario, el equipo o el alojamiento de cualquier servicio de viaje, que ocurra después de la reserva y el pago de dicho servicio. Usairling no será responsable de ninguna cancelación, exceso de reservas, retrasos, cambios de ruta, huelgas, incidentes meteorológicos o gubernamentales que afecten a su reserva de viaje realizada con nosotros. Usairling no será responsable de la representación de los productos y servicios de viaje disponibles por cualquier proveedor de productos y servicios de viaje, incluidos, entre otros, fotografías, servicios enumerados, calificaciones y descuentos.
                            </p>

                            <p>Usairling actúa como un servicio que brinda un servicio de valor agregado a los consumidores y agentes de viajes minoristas. Usairling no tiene control ni asume ninguna responsabilidad por las acciones de los proveedores de los que obtiene productos o servicios de viaje</p>


                            <p>Usairling no será responsable de la conversión de moneda final o de las tarifas cuando se pague después de que se haya realizado una reserva de viaje con nosotros para productos y servicios de viajes internacionales. Usted acepta y reconoce que las tasas de cambio varían y que cualquier precio cotizado en el Sitio en moneda local es una guía y no es vinculante para nosotros ni para el Proveedor de viajes.</p>


                            <p>Una vez que se realizan y pagan ciertas reservas de viaje, es posible que no sean reembolsables en su totalidad o que se aplique una penalización por la cancelación o la solicitud de reembolso por parte del proveedor de productos y servicios de viaje. Una vez emitidos los billetes puede haber penalización por cancelaciones y devoluciones. No tenemos control sobre los precios impresos en los boletos, aunque algunos boletos pueden tener impreso BT (tarifa a granel), algunos pueden tener un valor específico, que puede ser diferente (más bajo o más alto) que la tarifa cobrada.</p>

                            <p>Los descuentos ofrecidos pueden variar según una serie de factores, incluidas las aerolíneas utilizadas, la clase de servicio, el destino, la época del año (temporada baja, media o alta), el aviso previo proporcionado, los requisitos mínimos de estadía cumplidos y la cantidad de vuelos.</p>
                            <p>Usairling no garantiza, respalda, valida ni promociona los productos y servicios de otros anunciantes que se anuncian en nuestro Sitio.</p>

                            <p>Al reservar con nosotros, se puede formar un contrato entre usted y un Proveedor de viajes, y se pueden aplicar Términos y condiciones adicionales a su reserva y compra de bienes y servicios relacionados con viajes. Lea detenidamente los Términos y condiciones adicionales proporcionados por dicho Proveedor de viajes. Por la presente, acepta estar sujeto a todos los Términos y condiciones de compra impuestos por cualquier Proveedor de viajes con el que elija contratar, incluidos, entre otros, el pago de todos los montos a su vencimiento y el cumplimiento de las reglas y restricciones del Proveedor de viajes con respecto a la disponibilidad. y uso de tarifas, productos o servicios. Algunos proveedores de viajes pueden solicitarle que presente una tarjeta de crédito o un depósito en efectivo al momento del check-in para cubrir los gastos adicionales incurridos durante el uso de los productos o servicios reservados. Dicho depósito no está relacionado con ningún pago recibido por Usairling por la reserva de su billete de avión. Usted comprende que cualquier violación de las reglas y restricciones de un Proveedor de Viajes puede resultar en la cancelación de su(s) reserva(s), en la denegación del acceso al Elemento de Servicio o servicios respectivos, en la pérdida de cualquier monto pagado por dicha(s) reserva(s), y /o en nuestro cargo de su cuenta por cualquier costo en el que incurramos como resultado de dicha violación.</p>

                            <h3>DISPUTAS</h3>

                            <p>Usairling está comprometido con la satisfacción del cliente, por lo que si tiene un problema o disputa, intentaremos resolver sus inquietudes. Acepta darnos la oportunidad de resolver cualquier disputa o reclamo relacionado de alguna manera con el sitio web, cualquier trato con nuestros agentes de servicio al cliente, cualquier servicio o producto proporcionado, cualquier representación hecha por nosotros o nuestra Política de privacidad ("Reclamaciones") poniéndose en contacto con Atención al cliente.</p>


                            <h3>ACTIVIDADES PROHIBIDAS</h3>

                            <p>El contenido y la información de Usairling (incluidos, entre otros, el precio y la disponibilidad de los servicios de viaje), así como la infraestructura utilizada para proporcionar dicho contenido e información, son propiedad nuestra o de nuestros proveedores y proveedores. Si bien puede hacer copias limitadas de su itinerario de viaje (y documentos relacionados) para viajes o reservas de servicios realizadas a través de Usairling, acepta no modificar, copiar, distribuir, transmitir, mostrar, realizar, reproducir, publicar, licenciar, crear obras derivadas. de, transferir, vender o revender cualquier información, software, productos o servicios obtenidos de o a través de Usairling. Además, acepta no:</p>

                            <ul>
                                <li> utilizar Usairling o su contenido para fines comerciales;</li>
                                <li> Hacer cualquier reserva especulativa, falsa o fraudulenta o cualquier reserva anticipada a la demanda;</li>
                                <li> 3. Acceder, monitorear o copiar cualquier contenido o información de Usairling utilizando cualquier robot, araña, raspador u otro medio automatizado o cualquier proceso manual para cualquier propósito sin nuestro permiso expreso por escrito;</li>
                                <li> 4. Violar las restricciones en cualquier encabezado de exclusión de robots en Usairling o eludir o eludir otras medidas empleadas para prevenir o limitar el acceso a Usairling;</li>
                                <li>Tomar cualquier medida que imponga o pueda imponer, a nuestro criterio, una carga irrazonable o desproporcionadamente grande en nuestra infraestructura;</li>
                                <li> Enlace profundo a cualquier parte de Usairling (incluida, entre otras, la ruta de compra de cualquier servicio de viaje) para cualquier propósito sin nuestro permiso expreso por escrito.</li>
                                <li> "Frame", "mirror" o incorpore cualquier parte de Usairling en cualquier otro sitio web sin nuestra autorización previa por escrito</li>
                            </ul>

                            <p>Si su reserva o cuenta muestra signos de fraude, abuso o actividad sospechosa, podemos cancelar cualquier reserva de viaje o servicio asociada con su nombre, dirección de correo electrónico o cuenta. Además, podemos verificar (es decir, preautorizar) su tarjeta de crédito. Si ha realizado alguna actividad fraudulenta, Usairling se reserva el derecho de emprender las acciones legales necesarias y usted puede ser responsable de las pérdidas monetarias de Usairling, incluidos los costos de litigio y los daños y perjuicios.</p>
                        </Col>

                    </Row>
                </Container>
            </div>

            <Footer />
        </>
    )
}
