import React, { useEffect } from 'react'
import Link from "next/link"
import Head from 'next/head'

export default function Pageerror() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Head>
                <title>404 pagina non trovata</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
            </Head>

            <div className="pageerror-wrap d-flex flex-row align-items-center full-w py-5">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-md-12 text-center">
                            <span className="display-1 d-block">404</span>
                            <div className="mb-4 lead">La pagina che stai cercando non è stata trovata.</div>
                            <Link href="/"><a className="btn btn-site ripple-effbtn btn-40"><span>Ritorno a casa</span></a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
