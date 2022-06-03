import React from "react";
import Image from "next/image"

export default function Enginebox(props) {
  return (
    <div className={'enginebanner_sctn full-w ' + (props.smallbanner ? props.smallbanner : '')}>
      <section className="banner-wrap site-banner discover-the-best bg-orangecoches ">

        <div className="container">
          <div className='row align-items-center flex-lg-row-reverse'>
            <div className='col-lg-6 col-12 d-none d-lg-block'>
              <Image rel="preload" src="/images/our-features-travel.png" alt="our-features-travel"
                className='our-features-travel my-5' width={570} height={499} />
            </div>

            <div className='col-lg-6 col-12'>
              <div className="banner-content">
                <span className="">Vuelo, hotel y alquiler de coches</span>
                <h1 className="site-banner__title Engine-Discover-with text-capitalize">Descubre el mejor vuelo con nosotras</h1>
                <form action="#" className="site-banner__search layout-02 ">
                  <div className="field-input">
                    <input className="site-banner__search__input open-suggestion" id="s" type="text" placeholder="De ciudad" autocomplete="off" />
                    <div className="search-suggestions name-suggestions">
                    </div>
                  </div>
                  <div className="field-input">
                    <input className="site-banner__search__input open-suggestion" id="loca" type="text" name="where" placeholder="a la ciudad" autocomplete="off" />
                    <div className="search-suggestions location-suggestions">

                    </div>
                  </div>
                  <div className="field-submit">
                    <button aria-label="submit search" type='submit'><i class="bi bi-search"></i></button>
                  </div>
                </form>
              </div>
            </div>


          </div>
        </div>
      </section>

      <div className="shape-bottom bigbanner-wgb">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className="shape-fill" fill="#f3f3f3" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
        </svg>
      </div>

    </div>
  );
}
