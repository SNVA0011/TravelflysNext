import React from "react";

export default function Enginebox(props) {
  return (
    <div
      className={
        "enginebanner_sctn full-w " +
        (props.smallbanner ? props.smallbanner : "")
      }
    >
      <div className="site-banner discover-the-best">
        <div className="container">
          <div className="site-banner__content d-flex justify-content-center align-items-center row">
            <h1 className="site-banner__title Engine-Discover-with text-capitalize">
              Исследовать мир
            </h1> 
            <form className="Searching-area search-place">
              <ul className="row align-items-center">
                <li className="col-xl-6 col-md-6 col-12 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Из города или аэропорта"
                  />
                </li>
                <li className="col-xl-6 col-md-6 col-12 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="В город или аэропорт"
                  />
                </li>
                <li className="col-xl-3 col-md-6 col-12 mb-3 datepickercity-col">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="bi bi-calendar"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control datepickercity checkin"
                      placeholder="Регистрироваться"
                    />
                  </div>
                </li>
                <li className="col-xl-3 col-md-6 col-12 mb-3 datepickercity-col">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="bi bi-calendar"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control datepickercity checkin"
                      placeholder="Проверять"
                    />
                  </div>
                </li>
                <li className="col-xl-2 col-md-6 col-12 mb-3">
                  <select
                    name="Adults"
                    className="form-control nice-selectround wide"
                  >
                    <option value="">Взрослые</option>
                    <option value="1">1 Взрослые</option>
                    <option value="2">2 Взрослые</option>
                    <option value="3">3 Взрослые</option>
                  </select>
                </li>
                <li className="col-xl-2 col-md-6 col-12 mb-3">
                  <select
                    name="Adults"
                    className="form-control nice-selectround wide"
                  >
                    <option value="">Взрослые</option>
                    <option value="1">1 Взрослые</option>
                    <option value="2">2 Взрослые</option>
                    <option value="3">3 Взрослые</option>
                  </select>
                </li>
                <li className="col-xl-2 col-12 mb-3">
                <div className="avail-thefform">
                <button type="submit" className="btn btn-site ">
                      <span>КНИГА</span></button></div></li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
