import React, { useState } from "react";
import { useEffect } from "react";
import Toast from 'react-bootstrap/Toast';
import { getIp } from "../utils/getip";
import { useRouter } from "next/router";
import { siteId } from "../utils/static";

const CallUkToast = ({ numberbyurl }) => {

    // ipaddress number 
    const [dataIp, setDataIp] = useState([]);
    const [isLoading, setLoadingIp] = useState(false);
    const router = useRouter()

    useEffect(async () => {
        setLoadingIp(true);
        await fetch(getIp).then((res) => res.json()).then(async (data) => {
            const reqopt = {
                method: "POST",
                body: JSON.stringify({
                    "countryCode": data.response.countryCode,
                    "siteId": siteId,
                    "countrytfn": "",
                    "status": ""
                }),
                redirect: "follow",
                headers: { 'Content-type': 'application/json; charset=UTF-8' }
            }
            await fetch("https://cms.travomint.com/ip/getClientiptfnBysiteId?authcode=Trav3103s987876", reqopt).then((res) => res.json()).then((data) => {
                setDataIp(data.response || []);
                setLoadingIp(false);
            }).catch((error) => {
                setLoadingIp(false);
                setDataIp([]);
                console.log('Error - ', error)
            });

        }).catch((error) => {
            setLoadingIp(false);
            setDataIp([]);
            console.log('Error : countrycode -', error)
        });
    }, [router.asPath]);


    // Call Toast
    const numberjson = { "data": dataIp, "status": isLoading }
    const [showA, setShowA] = useState(true);
    const toggleShowA = () => setShowA(!showA);
    const ipnumners = numberjson && numberjson.data || []
    const ipnumload = numberjson && numberjson.status || false


    return (
        <div className="callby-ip">
            <Toast show={showA} onClose={toggleShowA}>
                <Toast.Body>
                    <div className="list-group">

                        {
                            ipnumload ?
                                <div className="placeholder"> <div className="animated-background"></div> </div>
                                :
                                ipnumners?.length > 0 && ipnumners.map((item, index) => {
                                    const countrycode = item.countryCode?.toUpperCase();
                                    const countryimg = item.countryCode === "uk" ? "GB" : item.countryCode?.toUpperCase();
                                    if (item.countrytfn === "+44 (20) 37693132") {
                                        return <></>
                                    }
                                    return (
                                        <a key={index} href={`tel:${item.countrytfn}`} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                            <span className="mr-2"><span className="badge">({countrycode})</span> {item.countrytfn}</span>
                                            <span><img src={`https://flaglog.com/codes/standardized-rectangle-120px/${countryimg}.png`} /></span>
                                        </a>
                                    )
                                })
                        }

                        {numberbyurl && numberbyurl.filter((item) => item.number !== "").map((item, index) => {
                            const countrycode = item.code?.toUpperCase();
                            const countryimg = item.code === "uk" ? "GB" : item.code?.toUpperCase();
                            return (
                                <a key={index} href={`tel:${item.number}`} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                    <span className="mr-2"><span className="badge">({countrycode})</span> {item.number}</span>
                                    <span><img src={`https://flaglog.com/codes/standardized-rectangle-120px/${countryimg}.png`} /></span>
                                </a>
                            )
                        })}

                        <a href={`tel:+44 (20) 37693132`} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                            <span className="mr-2"><span className="badge">(UK)</span> +44 (20) 37693132</span>
                            <span><img src="https://flaglog.com/codes/standardized-rectangle-120px/GB.png" /></span> </a>
                    </div>
                </Toast.Body>
            </Toast>

            <div onClick={toggleShowA} className="mt-2">
                {showA ? <i className="bi bi-x btn-round-cl btn"></i> : <img src="/images/callby-ip.jpg" className="callby-round-cl" />}
            </div>

        </div>
    )
}

export default CallUkToast