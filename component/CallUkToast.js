import React, { useState } from "react";
import Toast from 'react-bootstrap/Toast';

const CallUkToast = () => {

    // Call Toast
    const [showA, setShowA] = useState(true);
    const toggleShowA = () => setShowA(!showA);

  return (
      <div className="callby-ip">
          <Toast show={showA} onClose={toggleShowA}>
              <Toast.Body> 
                  <div class="list-group">
                      <a href={`tel:+44 (20) 37693132`} class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                          <span className="mr-2">+44 (20) 37693132</span>
                          <span><img src="/images/ukflg-sm.png" /></span> </a>
                  </div>
              </Toast.Body>
          </Toast>

          <div onClick={toggleShowA} className="mt-2">
              {showA ? <i class="bi bi-x btn-round-cl btn"></i> : <img src="/images/callby-ip.jpg" className="callby-round-cl" />}
          </div>

      </div>
  )
}

export default CallUkToast