import React from "react";

export default function Enginebox(props) {
  return (
    <div className={'enginebanner_sctn full-w ' + (props.smallbanner ? props.smallbanner : '')}>
      <div className="site-banner discover-the-best">
        <div className="container">
          <div className="site-banner__content">
            <h1 className="site-banner__title Engine-Discover-with text-capitalize">Explorar el mundo</h1>
            <form action="#" className="site-banner__search layout-02">
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
            </form>

          </div>
        </div>
      </div>


    </div>
  );
}
