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
              Explorar el mundo
            </h1>
            {/* <form action="#" className="site-banner__search layout-02">
              <div className="field-input">
                <input className="site-banner__search__input open-suggestion" id="s" type="text" name="s" placeholder="De ciudad" autocomplete="off" />
              </div>
              <div className="field-input">
                <input className="site-banner__search__input open-suggestion" id="loca" type="text" name="where" placeholder="a la ciudad" autocomplete="off" />
                <div className="search-suggestions location-suggestions">
                  <ul>
                    <li><a href="#"><i className="las la-location-arrow"></i><span>Current location</span></a></li>
                    <li><a href="#"><span>San Francisco, CA</span></a></li>
                  </ul>
                </div>
              </div>
              <div className="field-submit">
                <button aria-label="search btn"><i className="bi bi-search"></i></button>
              </div>
            </form> */}
            <form className="Searching-area search-place">
              <ul className="row align-items-center">
                <li className="col-xl-6 col-md-6 col-12 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Desde la ciudad o el aeropuerto"
                  />
                </li>
                <li className="col-xl-6 col-md-6 col-12 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="A ciudad o Aeropuerto"
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
                      placeholder="Registrarse"
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
                      placeholder="Verificar"
                    />
                  </div>
                </li>
                <li className="col-xl-2 col-md-6 col-12 mb-3">
                  <select
                    name="Adults"
                    className="form-control nice-selectround wide"
                  >
                    <option value="">Adultos</option>
                    <option value="1">1 Adultos</option>
                    <option value="2">2 Adultos</option>
                    <option value="3">3 Adultos</option>
                  </select>
                </li>
                <li className="col-xl-2 col-md-6 col-12 mb-3">
                  <select
                    name="Adults"
                    className="form-control nice-selectround wide"
                  >
                    <option value="">Adultos</option>
                    <option value="1">1 Adultos</option>
                    <option value="2">2 Adultos</option>
                    <option value="3">3 Adultos</option>
                  </select>
                </li>
                <li className="col-xl-2 col-12 mb-3">
                <div className="avail-thefform">
                <button type="submit" className="btn btn-site ">
                <span>Enviar</span></button></div></li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
