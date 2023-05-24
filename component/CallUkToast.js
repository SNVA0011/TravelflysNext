import React, { useState } from "react";
import Toast from 'react-bootstrap/Toast';

const CallUkToast = ({ numberjson, numberbyurl }) => {

    // Call Toast
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